/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getAccount = /* GraphQL */ `query GetAccount($id: ID!) {
  getAccount(id: $id) {
    account_id
    nickname
    introduction
    username
    uwemail
    role
    bridges
    wechat_id
    google_id
    apple_id
    comments {
      nextToken
      __typename
    }
    threads {
      nextToken
      __typename
    }
    has_group {
      nextToken
      __typename
    }
    owner
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetAccountQueryVariables,
  APITypes.GetAccountQuery
>;
export const listAccounts = /* GraphQL */ `query ListAccounts(
  $filter: ModelAccountFilterInput
  $limit: Int
  $nextToken: String
) {
  listAccounts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      account_id
      nickname
      introduction
      username
      uwemail
      role
      bridges
      wechat_id
      google_id
      apple_id
      owner
      id
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAccountsQueryVariables,
  APITypes.ListAccountsQuery
>;
export const getThread = /* GraphQL */ `query GetThread($id: ID!) {
  getThread(id: $id) {
    thread_id
    title
    content
    thread_owner {
      account_id
      nickname
      introduction
      username
      uwemail
      role
      bridges
      wechat_id
      google_id
      apple_id
      owner
      id
      createdAt
      updatedAt
      __typename
    }
    thread_group {
      group_id
      group_name
      threads_num
      introduction
      owner
      id
      createdAt
      updatedAt
      accountHas_groupId
      __typename
    }
    thread_comments {
      nextToken
      __typename
    }
    thread_likes
    thread_rank
    group_id
    comments_num
    is_anonymous_thread
    special_tag
    owner
    id
    createdAt
    updatedAt
    accountThreadsId
    threadGroupGroup_threadsId
    __typename
  }
}
` as GeneratedQuery<APITypes.GetThreadQueryVariables, APITypes.GetThreadQuery>;
export const listThreads = /* GraphQL */ `query ListThreads(
  $filter: ModelThreadFilterInput
  $limit: Int
  $nextToken: String
) {
  listThreads(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      thread_id
      title
      content
      thread_likes
      thread_rank
      group_id
      comments_num
      is_anonymous_thread
      special_tag
      owner
      id
      createdAt
      updatedAt
      accountThreadsId
      threadGroupGroup_threadsId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListThreadsQueryVariables,
  APITypes.ListThreadsQuery
>;
export const getThreadGroup = /* GraphQL */ `query GetThreadGroup($id: ID!) {
  getThreadGroup(id: $id) {
    group_id
    group_name
    group_manager {
      account_id
      nickname
      introduction
      username
      uwemail
      role
      bridges
      wechat_id
      google_id
      apple_id
      owner
      id
      createdAt
      updatedAt
      __typename
    }
    group_threads {
      nextToken
      __typename
    }
    threads_num
    introduction
    owner
    id
    createdAt
    updatedAt
    accountHas_groupId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetThreadGroupQueryVariables,
  APITypes.GetThreadGroupQuery
>;
export const listThreadGroups = /* GraphQL */ `query ListThreadGroups(
  $filter: ModelThreadGroupFilterInput
  $limit: Int
  $nextToken: String
) {
  listThreadGroups(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      group_id
      group_name
      threads_num
      introduction
      owner
      id
      createdAt
      updatedAt
      accountHas_groupId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListThreadGroupsQueryVariables,
  APITypes.ListThreadGroupsQuery
>;
export const getComment = /* GraphQL */ `query GetComment($id: ID!) {
  getComment(id: $id) {
    comment_id
    comment_content
    comment_account {
      account_id
      nickname
      introduction
      username
      uwemail
      role
      bridges
      wechat_id
      google_id
      apple_id
      owner
      id
      createdAt
      updatedAt
      __typename
    }
    comment_thread {
      thread_id
      title
      content
      thread_likes
      thread_rank
      group_id
      comments_num
      is_anonymous_thread
      special_tag
      owner
      id
      createdAt
      updatedAt
      accountThreadsId
      threadGroupGroup_threadsId
      __typename
    }
    parent_comment {
      comment_id
      comment_content
      comment_likes
      comment_rank
      is_anonymous_comment
      owner
      id
      createdAt
      updatedAt
      accountCommentsId
      threadThread_commentsId
      commentChild_commentsId
      __typename
    }
    child_comments {
      nextToken
      __typename
    }
    comment_likes
    comment_rank
    is_anonymous_comment
    owner
    id
    createdAt
    updatedAt
    accountCommentsId
    threadThread_commentsId
    commentChild_commentsId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCommentQueryVariables,
  APITypes.GetCommentQuery
>;
export const listComments = /* GraphQL */ `query ListComments(
  $filter: ModelCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      comment_id
      comment_content
      comment_likes
      comment_rank
      is_anonymous_comment
      owner
      id
      createdAt
      updatedAt
      accountCommentsId
      threadThread_commentsId
      commentChild_commentsId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCommentsQueryVariables,
  APITypes.ListCommentsQuery
>;
