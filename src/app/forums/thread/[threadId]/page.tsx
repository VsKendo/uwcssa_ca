//src\app\forums\thread\[threadId]\page.tsx
'use client';
import { generateClient } from 'aws-amplify/api';
import { GetThreadDetail } from '@/graphql/get_thread_detail';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import PostDetail from '@/app/forums/thread/[threadId]/_component/PostDetail'
import '@wangeditor/editor/dist/css/style.css'

const DEFAULT_ACCOUNT_ID = 'ec26fe80-7c19-4a82-a004-c2efc4d27ca9';  //signed-in user id

type CommentNode = {
    id: string;
    parentId?: string;
    comment_content: string;
    createdAt: string;
    comment_account: { nickname: string };
    children: CommentNode[];
  };

export default function ThreadIndex() {
    const { threadId } = useParams() as { threadId: string };
    const [thread, setThread] = useState<any>(null);
    const [flat,   setFlat]   = useState<any[]>([]);
    const [floor,  setFloor]  = useState(1);           // global counter

      /* ---------- 1. FETCH -------------------------------------------------- */
  const fetchThread = async () => {
    const client = generateClient();
    const res:any = await client.graphql({
      query: GetThreadDetail,
      variables: { id: threadId },
    });
    const t  = res.data.getThread;
    const raw: CommentNode[] = t.thread_comments.items.map((c: any) => ({
      id: c.id,
      parentId: c.commentChild_commentsId ?? null,   // ← bring the FK over
      comment_content: c.comment_content,
      createdAt: c.createdAt,
      comment_account: c.comment_account,
      children: [],
    }));
    

    /* ---------- 2. BUILD ADJACENCY LIST --------------------------------- */
    const map = new Map<string, CommentNode>();
    raw.forEach(n => map.set(n.id, n));
    const roots: CommentNode[] = [];
    raw.forEach(n => {
      if (n.parentId) {
        map.get(n.parentId)?.children.push(n);
      } else {
        roots.push(n);
      }
    });

    /* ---------- 3. DFS FLATTEN + NUMBER --------------------------------- */
    const ordered:any[] = [];
    let counter = 1;
    const dfs = (node:CommentNode, replyTo:string) => {
      ordered.push({
        key:   counter,
        id:   node.id,                     
        title: replyTo,
        author: node.comment_account.nickname,
        context: node.comment_content,
        time:   node.createdAt,
      });
      counter++;
      node.children
        .sort((a,b)=>Date.parse(a.createdAt)-Date.parse(b.createdAt))
        .forEach(child=>dfs(child,`回复：${node.comment_account.nickname}`));
    };

    roots
      .sort((a,b)=>Date.parse(a.createdAt)-Date.parse(b.createdAt))
      .forEach(root=>dfs(root,`回复楼主：${t.thread_owner.nickname}`));

    setThread(t);
    setFlat([
      {
        key: 0,
        id: undefined,  // main thread has no id
        title: t.title,
        author: t.thread_owner.nickname,
        context: t.content,
        time: t.createdAt,
      },
      ...ordered,
    ]);
    setFloor(counter);                            // for future inserts
  };

  useEffect(()=>{ fetchThread(); },[threadId]);

  /* ---------- 4. OPTIONAL – live inserts via subscription --------------- */
  // useEffect(()=> {
  //   const sub = client.graphql({ query: onCreateComment })
  //     .subscribe({ next: ({ value }) => insertComment(value.data.onCreateComment) });
  //   return ()=>sub.unsubscribe();
  // }, []);

  /* ---------- 5. INSERT helper for new comments ------------------------ */
  const insertComment = (newC:any) => {
    setFlat(prev=>{
      const toAdd = {
        key: floor,
        id: newC.id,  // use comment id for replies
        title: `回复: ${newC.parent_comment
          ? newC.parent_comment.comment_account.nickname
          : thread.thread_owner.nickname}`,
        author: newC.comment_account.nickname,
        context: newC.comment_content,
        time: newC.createdAt,
      };
      setFloor(floor+1);
      if (newC.parent_comment) {
        // splice right after its parent’s block
        const parentIdx = prev.findIndex(p=>p.key===newC.parent_comment.floorKey);
        return [
          ...prev.slice(0,parentIdx+1),
          toAdd,
          ...prev.slice(parentIdx+1),
        ];
      }
      return [...prev, toAdd];
    });
  };



    return (
        <div style={{ width:'80%', margin:'auto' }}>
        {flat.length > 0 && 
        <PostDetail
         infoList={flat} 
         threadId={threadId}
         accountId={DEFAULT_ACCOUNT_ID}
         onRefresh={fetchThread}
        
        />}
      </div>
    )
}
