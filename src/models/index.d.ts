import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerAccount = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Account, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly account_id: string;
  readonly username: string;
  readonly nickname: string;
  readonly password?: string | null;
  readonly uwemail: string;
  readonly role: number;
  readonly bridges?: (number | null)[] | null;
  readonly wechat_id?: string | null;
  readonly google_id?: string | null;
  readonly apple_id?: string | null;
  readonly comments?: (Comment | null)[] | null;
  readonly threads?: (Thread | null)[] | null;
  readonly has_group?: (ThreadGroup | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAccount = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Account, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly account_id: string;
  readonly username: string;
  readonly nickname: string;
  readonly password?: string | null;
  readonly uwemail: string;
  readonly role: number;
  readonly bridges?: (number | null)[] | null;
  readonly wechat_id?: string | null;
  readonly google_id?: string | null;
  readonly apple_id?: string | null;
  readonly comments: AsyncCollection<Comment>;
  readonly threads: AsyncCollection<Thread>;
  readonly has_group: AsyncCollection<ThreadGroup>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Account = LazyLoading extends LazyLoadingDisabled ? EagerAccount : LazyAccount

export declare const Account: (new (init: ModelInit<Account>) => Account) & {
  copyOf(source: Account, mutator: (draft: MutableModel<Account>) => MutableModel<Account> | void): Account;
}

type EagerThread = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Thread, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly thread_id: string;
  readonly title: string;
  readonly content: string;
  readonly thread_owner: Account;
  readonly thread_group: ThreadGroup;
  readonly thread_comments?: (Comment | null)[] | null;
  readonly thread_likes?: number | null;
  readonly thread_rank?: number | null;
  readonly group_id?: string | null;
  readonly comments_num?: number | null;
  readonly is_anonymous_thread?: boolean | null;
  readonly special_tag?: (number | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly accountThreadsId?: string | null;
  readonly threadGroupGroup_threadsId: string;
}

type LazyThread = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Thread, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly thread_id: string;
  readonly title: string;
  readonly content: string;
  readonly thread_owner: AsyncItem<Account>;
  readonly thread_group: AsyncItem<ThreadGroup>;
  readonly thread_comments: AsyncCollection<Comment>;
  readonly thread_likes?: number | null;
  readonly thread_rank?: number | null;
  readonly group_id?: string | null;
  readonly comments_num?: number | null;
  readonly is_anonymous_thread?: boolean | null;
  readonly special_tag?: (number | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly accountThreadsId?: string | null;
  readonly threadGroupGroup_threadsId: string;
}

export declare type Thread = LazyLoading extends LazyLoadingDisabled ? EagerThread : LazyThread

export declare const Thread: (new (init: ModelInit<Thread>) => Thread) & {
  copyOf(source: Thread, mutator: (draft: MutableModel<Thread>) => MutableModel<Thread> | void): Thread;
}

type EagerThreadGroup = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ThreadGroup, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly group_id: string;
  readonly group_name: string;
  readonly group_manager?: Account | null;
  readonly group_threads?: (Thread | null)[] | null;
  readonly threads_num?: number | null;
  readonly introduction?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly accountHas_groupId?: string | null;
}

type LazyThreadGroup = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ThreadGroup, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly group_id: string;
  readonly group_name: string;
  readonly group_manager: AsyncItem<Account | undefined>;
  readonly group_threads: AsyncCollection<Thread>;
  readonly threads_num?: number | null;
  readonly introduction?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly accountHas_groupId?: string | null;
}

export declare type ThreadGroup = LazyLoading extends LazyLoadingDisabled ? EagerThreadGroup : LazyThreadGroup

export declare const ThreadGroup: (new (init: ModelInit<ThreadGroup>) => ThreadGroup) & {
  copyOf(source: ThreadGroup, mutator: (draft: MutableModel<ThreadGroup>) => MutableModel<ThreadGroup> | void): ThreadGroup;
}

type EagerComment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Comment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly comment_id: string;
  readonly comment_content: string;
  readonly comment_account: Account;
  readonly comment_thread: Thread;
  readonly parent_comment?: Comment | null;
  readonly child_comments?: (Comment | null)[] | null;
  readonly comment_likes?: number | null;
  readonly comment_rank?: number | null;
  readonly is_anonymous_comment?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly accountCommentsId?: string | null;
  readonly threadThread_commentsId?: string | null;
  readonly commentChild_commentsId?: string | null;
}

type LazyComment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Comment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly comment_id: string;
  readonly comment_content: string;
  readonly comment_account: AsyncItem<Account>;
  readonly comment_thread: AsyncItem<Thread>;
  readonly parent_comment: AsyncItem<Comment | undefined>;
  readonly child_comments: AsyncCollection<Comment>;
  readonly comment_likes?: number | null;
  readonly comment_rank?: number | null;
  readonly is_anonymous_comment?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly accountCommentsId?: string | null;
  readonly threadThread_commentsId?: string | null;
  readonly commentChild_commentsId?: string | null;
}

export declare type Comment = LazyLoading extends LazyLoadingDisabled ? EagerComment : LazyComment

export declare const Comment: (new (init: ModelInit<Comment>) => Comment) & {
  copyOf(source: Comment, mutator: (draft: MutableModel<Comment>) => MutableModel<Comment> | void): Comment;
}