/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type Thread = {
  __typename: "Thread",
  thread_id: string,
  title: string,
  content: string,
  thread_owner: Account,
  thread_group: ThreadGroup,
  thread_comments?: ModelCommentConnection | null,
  thread_likes?: number | null,
  thread_rank?: number | null,
  group_id?: string | null,
  comments_num?: number | null,
  is_anonymous_thread?: boolean | null,
  special_tag?: Array< number | null > | null,
  owner?: string | null,
  updatedAt?: string | null,
  id: string,
  createdAt: string,
  accountThreadsId?: string | null,
  threadGroupGroup_threadsId?: string | null,
};

export type Account = {
  __typename: "Account",
  account_id: string,
  nickname: string,
  introduction?: string | null,
  username?: string | null,
  uwemail?: string | null,
  role: number,
  bridges?: Array< number | null > | null,
  wechat_id?: string | null,
  google_id?: string | null,
  apple_id?: string | null,
  comments?: ModelCommentConnection | null,
  threads?: ModelThreadConnection | null,
  has_group?: ModelThreadGroupConnection | null,
  owner?: string | null,
  id: string,
  createdAt: string,
  updatedAt: string,
};

export type ModelCommentConnection = {
  __typename: "ModelCommentConnection",
  items:  Array<Comment | null >,
  nextToken?: string | null,
};

export type Comment = {
  __typename: "Comment",
  comment_id: string,
  comment_content: string,
  comment_account: Account,
  comment_thread: Thread,
  parent_comment?: Comment | null,
  child_comments?: ModelCommentConnection | null,
  comment_likes?: number | null,
  comment_rank?: number | null,
  is_anonymous_comment?: boolean | null,
  owner?: string | null,
  id: string,
  createdAt: string,
  updatedAt: string,
  accountCommentsId?: string | null,
  threadThread_commentsId?: string | null,
  commentChild_commentsId?: string | null,
};

export type ModelThreadConnection = {
  __typename: "ModelThreadConnection",
  items:  Array<Thread | null >,
  nextToken?: string | null,
};

export type ModelThreadGroupConnection = {
  __typename: "ModelThreadGroupConnection",
  items:  Array<ThreadGroup | null >,
  nextToken?: string | null,
};

export type ThreadGroup = {
  __typename: "ThreadGroup",
  group_id: string,
  group_name: string,
  group_manager?: Account | null,
  group_threads?: ModelThreadConnection | null,
  threads_num?: number | null,
  introduction?: string | null,
  owner?: string | null,
  id: string,
  createdAt: string,
  updatedAt: string,
  accountHas_groupId?: string | null,
};

export type CreateAccountInput = {
  account_id: string,
  nickname: string,
  introduction?: string | null,
  username?: string | null,
  uwemail?: string | null,
  role: number,
  bridges?: Array< number | null > | null,
  wechat_id?: string | null,
  google_id?: string | null,
  apple_id?: string | null,
  owner?: string | null,
  id?: string | null,
};

export type ModelAccountConditionInput = {
  account_id?: ModelIDInput | null,
  nickname?: ModelStringInput | null,
  introduction?: ModelStringInput | null,
  username?: ModelStringInput | null,
  uwemail?: ModelStringInput | null,
  role?: ModelIntInput | null,
  bridges?: ModelIntInput | null,
  wechat_id?: ModelStringInput | null,
  google_id?: ModelStringInput | null,
  apple_id?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelAccountConditionInput | null > | null,
  or?: Array< ModelAccountConditionInput | null > | null,
  not?: ModelAccountConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateAccountInput = {
  account_id?: string | null,
  nickname?: string | null,
  introduction?: string | null,
  username?: string | null,
  uwemail?: string | null,
  role?: number | null,
  bridges?: Array< number | null > | null,
  wechat_id?: string | null,
  google_id?: string | null,
  apple_id?: string | null,
  owner?: string | null,
  id: string,
};

export type DeleteAccountInput = {
  id: string,
};

export type CreateThreadInput = {
  thread_id: string,
  title: string,
  content: string,
  thread_likes?: number | null,
  thread_rank?: number | null,
  group_id?: string | null,
  comments_num?: number | null,
  is_anonymous_thread?: boolean | null,
  special_tag?: Array< number | null > | null,
  owner?: string | null,
  updatedAt?: string | null,
  id?: string | null,
  accountThreadsId?: string | null,
  threadGroupGroup_threadsId?: string | null,
};

export type ModelThreadConditionInput = {
  thread_id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  content?: ModelStringInput | null,
  thread_likes?: ModelIntInput | null,
  thread_rank?: ModelIntInput | null,
  group_id?: ModelIDInput | null,
  comments_num?: ModelIntInput | null,
  is_anonymous_thread?: ModelBooleanInput | null,
  special_tag?: ModelIntInput | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelThreadConditionInput | null > | null,
  or?: Array< ModelThreadConditionInput | null > | null,
  not?: ModelThreadConditionInput | null,
  createdAt?: ModelStringInput | null,
  accountThreadsId?: ModelIDInput | null,
  threadGroupGroup_threadsId?: ModelIDInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateThreadInput = {
  thread_id?: string | null,
  title?: string | null,
  content?: string | null,
  thread_likes?: number | null,
  thread_rank?: number | null,
  group_id?: string | null,
  comments_num?: number | null,
  is_anonymous_thread?: boolean | null,
  special_tag?: Array< number | null > | null,
  owner?: string | null,
  updatedAt?: string | null,
  id: string,
  accountThreadsId?: string | null,
  threadGroupGroup_threadsId?: string | null,
};

export type DeleteThreadInput = {
  id: string,
};

export type CreateThreadGroupInput = {
  group_id: string,
  group_name: string,
  threads_num?: number | null,
  introduction?: string | null,
  owner?: string | null,
  id?: string | null,
  accountHas_groupId?: string | null,
};

export type ModelThreadGroupConditionInput = {
  group_id?: ModelIDInput | null,
  group_name?: ModelStringInput | null,
  threads_num?: ModelIntInput | null,
  introduction?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelThreadGroupConditionInput | null > | null,
  or?: Array< ModelThreadGroupConditionInput | null > | null,
  not?: ModelThreadGroupConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  accountHas_groupId?: ModelIDInput | null,
};

export type UpdateThreadGroupInput = {
  group_id?: string | null,
  group_name?: string | null,
  threads_num?: number | null,
  introduction?: string | null,
  owner?: string | null,
  id: string,
  accountHas_groupId?: string | null,
};

export type DeleteThreadGroupInput = {
  id: string,
};

export type CreateCommentInput = {
  comment_id: string,
  comment_content: string,
  comment_likes?: number | null,
  comment_rank?: number | null,
  is_anonymous_comment?: boolean | null,
  owner?: string | null,
  id?: string | null,
  accountCommentsId?: string | null,
  threadThread_commentsId?: string | null,
  commentChild_commentsId?: string | null,
};

export type ModelCommentConditionInput = {
  comment_id?: ModelIDInput | null,
  comment_content?: ModelStringInput | null,
  comment_likes?: ModelIntInput | null,
  comment_rank?: ModelIntInput | null,
  is_anonymous_comment?: ModelBooleanInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelCommentConditionInput | null > | null,
  or?: Array< ModelCommentConditionInput | null > | null,
  not?: ModelCommentConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  accountCommentsId?: ModelIDInput | null,
  threadThread_commentsId?: ModelIDInput | null,
  commentChild_commentsId?: ModelIDInput | null,
};

export type UpdateCommentInput = {
  comment_id?: string | null,
  comment_content?: string | null,
  comment_likes?: number | null,
  comment_rank?: number | null,
  is_anonymous_comment?: boolean | null,
  owner?: string | null,
  id: string,
  accountCommentsId?: string | null,
  threadThread_commentsId?: string | null,
  commentChild_commentsId?: string | null,
};

export type DeleteCommentInput = {
  id: string,
};

export type ModelAccountFilterInput = {
  account_id?: ModelIDInput | null,
  nickname?: ModelStringInput | null,
  introduction?: ModelStringInput | null,
  username?: ModelStringInput | null,
  uwemail?: ModelStringInput | null,
  role?: ModelIntInput | null,
  bridges?: ModelIntInput | null,
  wechat_id?: ModelStringInput | null,
  google_id?: ModelStringInput | null,
  apple_id?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelAccountFilterInput | null > | null,
  or?: Array< ModelAccountFilterInput | null > | null,
  not?: ModelAccountFilterInput | null,
};

export type ModelAccountConnection = {
  __typename: "ModelAccountConnection",
  items:  Array<Account | null >,
  nextToken?: string | null,
};

export type ModelThreadFilterInput = {
  thread_id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  content?: ModelStringInput | null,
  thread_likes?: ModelIntInput | null,
  thread_rank?: ModelIntInput | null,
  group_id?: ModelIDInput | null,
  comments_num?: ModelIntInput | null,
  is_anonymous_thread?: ModelBooleanInput | null,
  special_tag?: ModelIntInput | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelThreadFilterInput | null > | null,
  or?: Array< ModelThreadFilterInput | null > | null,
  not?: ModelThreadFilterInput | null,
  accountThreadsId?: ModelIDInput | null,
  threadGroupGroup_threadsId?: ModelIDInput | null,
};

export type ModelThreadGroupFilterInput = {
  group_id?: ModelIDInput | null,
  group_name?: ModelStringInput | null,
  threads_num?: ModelIntInput | null,
  introduction?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelThreadGroupFilterInput | null > | null,
  or?: Array< ModelThreadGroupFilterInput | null > | null,
  not?: ModelThreadGroupFilterInput | null,
  accountHas_groupId?: ModelIDInput | null,
};

export type ModelCommentFilterInput = {
  comment_id?: ModelIDInput | null,
  comment_content?: ModelStringInput | null,
  comment_likes?: ModelIntInput | null,
  comment_rank?: ModelIntInput | null,
  is_anonymous_comment?: ModelBooleanInput | null,
  owner?: ModelStringInput | null,
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelCommentFilterInput | null > | null,
  or?: Array< ModelCommentFilterInput | null > | null,
  not?: ModelCommentFilterInput | null,
  accountCommentsId?: ModelIDInput | null,
  threadThread_commentsId?: ModelIDInput | null,
  commentChild_commentsId?: ModelIDInput | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type createThreadMutationVariables = {
  thread_id: string,
  title: string,
  content: string,
  accountThreadsId: string,
  threadGroupGroup_threadsId: string,
  group_id: string,
};

export type createThreadMutation = {
  createThread?:  {
    __typename: "Thread",
    thread_id: string,
    title: string,
    content: string,
    accountThreadsId?: string | null,
    threadGroupGroup_threadsId?: string | null,
    group_id?: string | null,
    thread_owner:  {
      __typename: "Account",
      id: string,
      nickname: string,
      account_id: string,
    },
    createdAt: string,
    updatedAt?: string | null,
  } | null,
};

export type GetAllThreadGroupsQueryVariables = {
};

export type GetAllThreadGroupsQuery = {
  listThreadGroups?:  {
    __typename: "ModelThreadGroupConnection",
    items:  Array< {
      __typename: "ThreadGroup",
      id: string,
      group_id: string,
      group_name: string,
      introduction?: string | null,
      threads_num?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetThreadGroupMainPageQueryVariables = {
  groupId: string,
  limit: number,
};

export type GetThreadGroupMainPageQuery = {
  getThreadGroup?:  {
    __typename: "ThreadGroup",
    id: string,
    group_name: string,
  } | null,
  threadsByGroup_idAndUpdatedAt?:  {
    __typename: "ModelThreadConnection",
    items:  Array< {
      __typename: "Thread",
      id: string,
      title: string,
      updatedAt?: string | null,
      thread_owner:  {
        __typename: "Account",
        nickname: string,
      },
    } | null >,
  } | null,
};

export type GetThreadDetailQueryVariables = {
  id: string,
};

export type GetThreadDetailQuery = {
  getThread?:  {
    __typename: "Thread",
    id: string,
    title: string,
    content: string,
    createdAt: string,
    updatedAt?: string | null,
    thread_owner:  {
      __typename: "Account",
      nickname: string,
      id: string,
    },
    thread_group:  {
      __typename: "ThreadGroup",
      id: string,
      group_name: string,
      group_id: string,
    },
    thread_comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        commentChild_commentsId?: string | null,
        comment_content: string,
        createdAt: string,
        updatedAt: string,
        comment_account:  {
          __typename: "Account",
          nickname: string,
          id: string,
        },
        comment_likes?: number | null,
        comment_rank?: number | null,
        is_anonymous_comment?: boolean | null,
        child_comments?:  {
          __typename: "ModelCommentConnection",
          items:  Array< {
            __typename: "Comment",
            id: string,
            comment_content: string,
            createdAt: string,
            updatedAt: string,
            comment_account:  {
              __typename: "Account",
              nickname: string,
              id: string,
            },
            comment_likes?: number | null,
            comment_rank?: number | null,
            is_anonymous_comment?: boolean | null,
          } | null >,
        } | null,
      } | null >,
    } | null,
  } | null,
};

export type CreateAccountMutationVariables = {
  input: CreateAccountInput,
  condition?: ModelAccountConditionInput | null,
};

export type CreateAccountMutation = {
  createAccount?:  {
    __typename: "Account",
    account_id: string,
    nickname: string,
    introduction?: string | null,
    username?: string | null,
    uwemail?: string | null,
    role: number,
    bridges?: Array< number | null > | null,
    wechat_id?: string | null,
    google_id?: string | null,
    apple_id?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    threads?:  {
      __typename: "ModelThreadConnection",
      nextToken?: string | null,
    } | null,
    has_group?:  {
      __typename: "ModelThreadGroupConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAccountMutationVariables = {
  input: UpdateAccountInput,
  condition?: ModelAccountConditionInput | null,
};

export type UpdateAccountMutation = {
  updateAccount?:  {
    __typename: "Account",
    account_id: string,
    nickname: string,
    introduction?: string | null,
    username?: string | null,
    uwemail?: string | null,
    role: number,
    bridges?: Array< number | null > | null,
    wechat_id?: string | null,
    google_id?: string | null,
    apple_id?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    threads?:  {
      __typename: "ModelThreadConnection",
      nextToken?: string | null,
    } | null,
    has_group?:  {
      __typename: "ModelThreadGroupConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAccountMutationVariables = {
  input: DeleteAccountInput,
  condition?: ModelAccountConditionInput | null,
};

export type DeleteAccountMutation = {
  deleteAccount?:  {
    __typename: "Account",
    account_id: string,
    nickname: string,
    introduction?: string | null,
    username?: string | null,
    uwemail?: string | null,
    role: number,
    bridges?: Array< number | null > | null,
    wechat_id?: string | null,
    google_id?: string | null,
    apple_id?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    threads?:  {
      __typename: "ModelThreadConnection",
      nextToken?: string | null,
    } | null,
    has_group?:  {
      __typename: "ModelThreadGroupConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateThreadMutationVariables = {
  input: CreateThreadInput,
  condition?: ModelThreadConditionInput | null,
};

export type CreateThreadMutation = {
  createThread?:  {
    __typename: "Thread",
    thread_id: string,
    title: string,
    content: string,
    thread_owner:  {
      __typename: "Account",
      account_id: string,
      nickname: string,
      introduction?: string | null,
      username?: string | null,
      uwemail?: string | null,
      role: number,
      bridges?: Array< number | null > | null,
      wechat_id?: string | null,
      google_id?: string | null,
      apple_id?: string | null,
      owner?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    thread_group:  {
      __typename: "ThreadGroup",
      group_id: string,
      group_name: string,
      threads_num?: number | null,
      introduction?: string | null,
      owner?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      accountHas_groupId?: string | null,
    },
    thread_comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    thread_likes?: number | null,
    thread_rank?: number | null,
    group_id?: string | null,
    comments_num?: number | null,
    is_anonymous_thread?: boolean | null,
    special_tag?: Array< number | null > | null,
    owner?: string | null,
    updatedAt?: string | null,
    id: string,
    createdAt: string,
    accountThreadsId?: string | null,
    threadGroupGroup_threadsId?: string | null,
  } | null,
};

export type UpdateThreadMutationVariables = {
  input: UpdateThreadInput,
  condition?: ModelThreadConditionInput | null,
};

export type UpdateThreadMutation = {
  updateThread?:  {
    __typename: "Thread",
    thread_id: string,
    title: string,
    content: string,
    thread_owner:  {
      __typename: "Account",
      account_id: string,
      nickname: string,
      introduction?: string | null,
      username?: string | null,
      uwemail?: string | null,
      role: number,
      bridges?: Array< number | null > | null,
      wechat_id?: string | null,
      google_id?: string | null,
      apple_id?: string | null,
      owner?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    thread_group:  {
      __typename: "ThreadGroup",
      group_id: string,
      group_name: string,
      threads_num?: number | null,
      introduction?: string | null,
      owner?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      accountHas_groupId?: string | null,
    },
    thread_comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    thread_likes?: number | null,
    thread_rank?: number | null,
    group_id?: string | null,
    comments_num?: number | null,
    is_anonymous_thread?: boolean | null,
    special_tag?: Array< number | null > | null,
    owner?: string | null,
    updatedAt?: string | null,
    id: string,
    createdAt: string,
    accountThreadsId?: string | null,
    threadGroupGroup_threadsId?: string | null,
  } | null,
};

export type DeleteThreadMutationVariables = {
  input: DeleteThreadInput,
  condition?: ModelThreadConditionInput | null,
};

export type DeleteThreadMutation = {
  deleteThread?:  {
    __typename: "Thread",
    thread_id: string,
    title: string,
    content: string,
    thread_owner:  {
      __typename: "Account",
      account_id: string,
      nickname: string,
      introduction?: string | null,
      username?: string | null,
      uwemail?: string | null,
      role: number,
      bridges?: Array< number | null > | null,
      wechat_id?: string | null,
      google_id?: string | null,
      apple_id?: string | null,
      owner?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    thread_group:  {
      __typename: "ThreadGroup",
      group_id: string,
      group_name: string,
      threads_num?: number | null,
      introduction?: string | null,
      owner?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      accountHas_groupId?: string | null,
    },
    thread_comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    thread_likes?: number | null,
    thread_rank?: number | null,
    group_id?: string | null,
    comments_num?: number | null,
    is_anonymous_thread?: boolean | null,
    special_tag?: Array< number | null > | null,
    owner?: string | null,
    updatedAt?: string | null,
    id: string,
    createdAt: string,
    accountThreadsId?: string | null,
    threadGroupGroup_threadsId?: string | null,
  } | null,
};

export type CreateThreadGroupMutationVariables = {
  input: CreateThreadGroupInput,
  condition?: ModelThreadGroupConditionInput | null,
};

export type CreateThreadGroupMutation = {
  createThreadGroup?:  {
    __typename: "ThreadGroup",
    group_id: string,
    group_name: string,
    group_manager?:  {
      __typename: "Account",
      account_id: string,
      nickname: string,
      introduction?: string | null,
      username?: string | null,
      uwemail?: string | null,
      role: number,
      bridges?: Array< number | null > | null,
      wechat_id?: string | null,
      google_id?: string | null,
      apple_id?: string | null,
      owner?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    group_threads?:  {
      __typename: "ModelThreadConnection",
      nextToken?: string | null,
    } | null,
    threads_num?: number | null,
    introduction?: string | null,
    owner?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    accountHas_groupId?: string | null,
  } | null,
};

export type UpdateThreadGroupMutationVariables = {
  input: UpdateThreadGroupInput,
  condition?: ModelThreadGroupConditionInput | null,
};

export type UpdateThreadGroupMutation = {
  updateThreadGroup?:  {
    __typename: "ThreadGroup",
    group_id: string,
    group_name: string,
    group_manager?:  {
      __typename: "Account",
      account_id: string,
      nickname: string,
      introduction?: string | null,
      username?: string | null,
      uwemail?: string | null,
      role: number,
      bridges?: Array< number | null > | null,
      wechat_id?: string | null,
      google_id?: string | null,
      apple_id?: string | null,
      owner?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    group_threads?:  {
      __typename: "ModelThreadConnection",
      nextToken?: string | null,
    } | null,
    threads_num?: number | null,
    introduction?: string | null,
    owner?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    accountHas_groupId?: string | null,
  } | null,
};

export type DeleteThreadGroupMutationVariables = {
  input: DeleteThreadGroupInput,
  condition?: ModelThreadGroupConditionInput | null,
};

export type DeleteThreadGroupMutation = {
  deleteThreadGroup?:  {
    __typename: "ThreadGroup",
    group_id: string,
    group_name: string,
    group_manager?:  {
      __typename: "Account",
      account_id: string,
      nickname: string,
      introduction?: string | null,
      username?: string | null,
      uwemail?: string | null,
      role: number,
      bridges?: Array< number | null > | null,
      wechat_id?: string | null,
      google_id?: string | null,
      apple_id?: string | null,
      owner?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    group_threads?:  {
      __typename: "ModelThreadConnection",
      nextToken?: string | null,
    } | null,
    threads_num?: number | null,
    introduction?: string | null,
    owner?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    accountHas_groupId?: string | null,
  } | null,
};

export type CreateCommentMutationVariables = {
  input: CreateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type CreateCommentMutation = {
  createComment?:  {
    __typename: "Comment",
    comment_id: string,
    comment_content: string,
    comment_account:  {
      __typename: "Account",
      account_id: string,
      nickname: string,
      introduction?: string | null,
      username?: string | null,
      uwemail?: string | null,
      role: number,
      bridges?: Array< number | null > | null,
      wechat_id?: string | null,
      google_id?: string | null,
      apple_id?: string | null,
      owner?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    comment_thread:  {
      __typename: "Thread",
      thread_id: string,
      title: string,
      content: string,
      thread_likes?: number | null,
      thread_rank?: number | null,
      group_id?: string | null,
      comments_num?: number | null,
      is_anonymous_thread?: boolean | null,
      special_tag?: Array< number | null > | null,
      owner?: string | null,
      updatedAt?: string | null,
      id: string,
      createdAt: string,
      accountThreadsId?: string | null,
      threadGroupGroup_threadsId?: string | null,
    },
    parent_comment?:  {
      __typename: "Comment",
      comment_id: string,
      comment_content: string,
      comment_likes?: number | null,
      comment_rank?: number | null,
      is_anonymous_comment?: boolean | null,
      owner?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      accountCommentsId?: string | null,
      threadThread_commentsId?: string | null,
      commentChild_commentsId?: string | null,
    } | null,
    child_comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    comment_likes?: number | null,
    comment_rank?: number | null,
    is_anonymous_comment?: boolean | null,
    owner?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    accountCommentsId?: string | null,
    threadThread_commentsId?: string | null,
    commentChild_commentsId?: string | null,
  } | null,
};

export type UpdateCommentMutationVariables = {
  input: UpdateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type UpdateCommentMutation = {
  updateComment?:  {
    __typename: "Comment",
    comment_id: string,
    comment_content: string,
    comment_account:  {
      __typename: "Account",
      account_id: string,
      nickname: string,
      introduction?: string | null,
      username?: string | null,
      uwemail?: string | null,
      role: number,
      bridges?: Array< number | null > | null,
      wechat_id?: string | null,
      google_id?: string | null,
      apple_id?: string | null,
      owner?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    comment_thread:  {
      __typename: "Thread",
      thread_id: string,
      title: string,
      content: string,
      thread_likes?: number | null,
      thread_rank?: number | null,
      group_id?: string | null,
      comments_num?: number | null,
      is_anonymous_thread?: boolean | null,
      special_tag?: Array< number | null > | null,
      owner?: string | null,
      updatedAt?: string | null,
      id: string,
      createdAt: string,
      accountThreadsId?: string | null,
      threadGroupGroup_threadsId?: string | null,
    },
    parent_comment?:  {
      __typename: "Comment",
      comment_id: string,
      comment_content: string,
      comment_likes?: number | null,
      comment_rank?: number | null,
      is_anonymous_comment?: boolean | null,
      owner?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      accountCommentsId?: string | null,
      threadThread_commentsId?: string | null,
      commentChild_commentsId?: string | null,
    } | null,
    child_comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    comment_likes?: number | null,
    comment_rank?: number | null,
    is_anonymous_comment?: boolean | null,
    owner?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    accountCommentsId?: string | null,
    threadThread_commentsId?: string | null,
    commentChild_commentsId?: string | null,
  } | null,
};

export type DeleteCommentMutationVariables = {
  input: DeleteCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type DeleteCommentMutation = {
  deleteComment?:  {
    __typename: "Comment",
    comment_id: string,
    comment_content: string,
    comment_account:  {
      __typename: "Account",
      account_id: string,
      nickname: string,
      introduction?: string | null,
      username?: string | null,
      uwemail?: string | null,
      role: number,
      bridges?: Array< number | null > | null,
      wechat_id?: string | null,
      google_id?: string | null,
      apple_id?: string | null,
      owner?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    comment_thread:  {
      __typename: "Thread",
      thread_id: string,
      title: string,
      content: string,
      thread_likes?: number | null,
      thread_rank?: number | null,
      group_id?: string | null,
      comments_num?: number | null,
      is_anonymous_thread?: boolean | null,
      special_tag?: Array< number | null > | null,
      owner?: string | null,
      updatedAt?: string | null,
      id: string,
      createdAt: string,
      accountThreadsId?: string | null,
      threadGroupGroup_threadsId?: string | null,
    },
    parent_comment?:  {
      __typename: "Comment",
      comment_id: string,
      comment_content: string,
      comment_likes?: number | null,
      comment_rank?: number | null,
      is_anonymous_comment?: boolean | null,
      owner?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      accountCommentsId?: string | null,
      threadThread_commentsId?: string | null,
      commentChild_commentsId?: string | null,
    } | null,
    child_comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    comment_likes?: number | null,
    comment_rank?: number | null,
    is_anonymous_comment?: boolean | null,
    owner?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    accountCommentsId?: string | null,
    threadThread_commentsId?: string | null,
    commentChild_commentsId?: string | null,
  } | null,
};

export type myCreateCommentMutationVariables = {
  comment_id: string,
  comment_content: string,
  accountCommentsId: string,
  threadThread_commentsId: string,
  commentChild_commentsId?: string | null,
  is_anonymous_comment?: boolean | null,
};

export type myCreateCommentMutation = {
  createComment?:  {
    __typename: "Comment",
    comment_id: string,
    comment_content: string,
    comment_account:  {
      __typename: "Account",
      id: string,
      nickname: string,
      account_id: string,
    },
    createdAt: string,
    updatedAt: string,
    commentChild_commentsId?: string | null,
    accountCommentsId?: string | null,
    threadThread_commentsId?: string | null,
    is_anonymous_comment?: boolean | null,
  } | null,
};

export type GetAccountQueryVariables = {
  id: string,
};

export type GetAccountQuery = {
  getAccount?:  {
    __typename: "Account",
    account_id: string,
    nickname: string,
    introduction?: string | null,
    username?: string | null,
    uwemail?: string | null,
    role: number,
    bridges?: Array< number | null > | null,
    wechat_id?: string | null,
    google_id?: string | null,
    apple_id?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    threads?:  {
      __typename: "ModelThreadConnection",
      nextToken?: string | null,
    } | null,
    has_group?:  {
      __typename: "ModelThreadGroupConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAccountsQueryVariables = {
  filter?: ModelAccountFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAccountsQuery = {
  listAccounts?:  {
    __typename: "ModelAccountConnection",
    items:  Array< {
      __typename: "Account",
      account_id: string,
      nickname: string,
      introduction?: string | null,
      username?: string | null,
      uwemail?: string | null,
      role: number,
      bridges?: Array< number | null > | null,
      wechat_id?: string | null,
      google_id?: string | null,
      apple_id?: string | null,
      owner?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetThreadQueryVariables = {
  id: string,
};

export type GetThreadQuery = {
  getThread?:  {
    __typename: "Thread",
    thread_id: string,
    title: string,
    content: string,
    thread_owner:  {
      __typename: "Account",
      account_id: string,
      nickname: string,
      introduction?: string | null,
      username?: string | null,
      uwemail?: string | null,
      role: number,
      bridges?: Array< number | null > | null,
      wechat_id?: string | null,
      google_id?: string | null,
      apple_id?: string | null,
      owner?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    thread_group:  {
      __typename: "ThreadGroup",
      group_id: string,
      group_name: string,
      threads_num?: number | null,
      introduction?: string | null,
      owner?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      accountHas_groupId?: string | null,
    },
    thread_comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    thread_likes?: number | null,
    thread_rank?: number | null,
    group_id?: string | null,
    comments_num?: number | null,
    is_anonymous_thread?: boolean | null,
    special_tag?: Array< number | null > | null,
    owner?: string | null,
    updatedAt?: string | null,
    id: string,
    createdAt: string,
    accountThreadsId?: string | null,
    threadGroupGroup_threadsId?: string | null,
  } | null,
};

export type ListThreadsQueryVariables = {
  filter?: ModelThreadFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListThreadsQuery = {
  listThreads?:  {
    __typename: "ModelThreadConnection",
    items:  Array< {
      __typename: "Thread",
      thread_id: string,
      title: string,
      content: string,
      thread_likes?: number | null,
      thread_rank?: number | null,
      group_id?: string | null,
      comments_num?: number | null,
      is_anonymous_thread?: boolean | null,
      special_tag?: Array< number | null > | null,
      owner?: string | null,
      updatedAt?: string | null,
      id: string,
      createdAt: string,
      accountThreadsId?: string | null,
      threadGroupGroup_threadsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetThreadGroupQueryVariables = {
  id: string,
};

export type GetThreadGroupQuery = {
  getThreadGroup?:  {
    __typename: "ThreadGroup",
    group_id: string,
    group_name: string,
    group_manager?:  {
      __typename: "Account",
      account_id: string,
      nickname: string,
      introduction?: string | null,
      username?: string | null,
      uwemail?: string | null,
      role: number,
      bridges?: Array< number | null > | null,
      wechat_id?: string | null,
      google_id?: string | null,
      apple_id?: string | null,
      owner?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    group_threads?:  {
      __typename: "ModelThreadConnection",
      nextToken?: string | null,
    } | null,
    threads_num?: number | null,
    introduction?: string | null,
    owner?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    accountHas_groupId?: string | null,
  } | null,
};

export type ListThreadGroupsQueryVariables = {
  filter?: ModelThreadGroupFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListThreadGroupsQuery = {
  listThreadGroups?:  {
    __typename: "ModelThreadGroupConnection",
    items:  Array< {
      __typename: "ThreadGroup",
      group_id: string,
      group_name: string,
      threads_num?: number | null,
      introduction?: string | null,
      owner?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      accountHas_groupId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCommentQueryVariables = {
  id: string,
};

export type GetCommentQuery = {
  getComment?:  {
    __typename: "Comment",
    comment_id: string,
    comment_content: string,
    comment_account:  {
      __typename: "Account",
      account_id: string,
      nickname: string,
      introduction?: string | null,
      username?: string | null,
      uwemail?: string | null,
      role: number,
      bridges?: Array< number | null > | null,
      wechat_id?: string | null,
      google_id?: string | null,
      apple_id?: string | null,
      owner?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    comment_thread:  {
      __typename: "Thread",
      thread_id: string,
      title: string,
      content: string,
      thread_likes?: number | null,
      thread_rank?: number | null,
      group_id?: string | null,
      comments_num?: number | null,
      is_anonymous_thread?: boolean | null,
      special_tag?: Array< number | null > | null,
      owner?: string | null,
      updatedAt?: string | null,
      id: string,
      createdAt: string,
      accountThreadsId?: string | null,
      threadGroupGroup_threadsId?: string | null,
    },
    parent_comment?:  {
      __typename: "Comment",
      comment_id: string,
      comment_content: string,
      comment_likes?: number | null,
      comment_rank?: number | null,
      is_anonymous_comment?: boolean | null,
      owner?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      accountCommentsId?: string | null,
      threadThread_commentsId?: string | null,
      commentChild_commentsId?: string | null,
    } | null,
    child_comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    comment_likes?: number | null,
    comment_rank?: number | null,
    is_anonymous_comment?: boolean | null,
    owner?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    accountCommentsId?: string | null,
    threadThread_commentsId?: string | null,
    commentChild_commentsId?: string | null,
  } | null,
};

export type ListCommentsQueryVariables = {
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommentsQuery = {
  listComments?:  {
    __typename: "ModelCommentConnection",
    items:  Array< {
      __typename: "Comment",
      comment_id: string,
      comment_content: string,
      comment_likes?: number | null,
      comment_rank?: number | null,
      is_anonymous_comment?: boolean | null,
      owner?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      accountCommentsId?: string | null,
      threadThread_commentsId?: string | null,
      commentChild_commentsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ThreadsByGroup_idAndUpdatedAtQueryVariables = {
  group_id: string,
  updatedAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelThreadFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ThreadsByGroup_idAndUpdatedAtQuery = {
  threadsByGroup_idAndUpdatedAt?:  {
    __typename: "ModelThreadConnection",
    items:  Array< {
      __typename: "Thread",
      thread_id: string,
      title: string,
      content: string,
      thread_likes?: number | null,
      thread_rank?: number | null,
      group_id?: string | null,
      comments_num?: number | null,
      is_anonymous_thread?: boolean | null,
      special_tag?: Array< number | null > | null,
      owner?: string | null,
      updatedAt?: string | null,
      id: string,
      createdAt: string,
      accountThreadsId?: string | null,
      threadGroupGroup_threadsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};
