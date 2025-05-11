/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateAccount = /* GraphQL */ `subscription OnCreateAccount($filter: ModelSubscriptionAccountFilterInput) {
  onCreateAccount(filter: $filter) {
    account_id
    username
    nickname
    password
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
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateAccountSubscriptionVariables,
  APITypes.OnCreateAccountSubscription
>;
export const onUpdateAccount = /* GraphQL */ `subscription OnUpdateAccount($filter: ModelSubscriptionAccountFilterInput) {
  onUpdateAccount(filter: $filter) {
    account_id
    username
    nickname
    password
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
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateAccountSubscriptionVariables,
  APITypes.OnUpdateAccountSubscription
>;
export const onDeleteAccount = /* GraphQL */ `subscription OnDeleteAccount($filter: ModelSubscriptionAccountFilterInput) {
  onDeleteAccount(filter: $filter) {
    account_id
    username
    nickname
    password
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
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteAccountSubscriptionVariables,
  APITypes.OnDeleteAccountSubscription
>;
export const onCreateThread = /* GraphQL */ `subscription OnCreateThread($filter: ModelSubscriptionThreadFilterInput) {
  onCreateThread(filter: $filter) {
    thread_id
    title
    content
    thread_owner {
      account_id
      username
      nickname
      password
      uwemail
      role
      bridges
      wechat_id
      google_id
      apple_id
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
    id
    createdAt
    updatedAt
    accountThreadsId
    threadGroupGroup_threadsId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateThreadSubscriptionVariables,
  APITypes.OnCreateThreadSubscription
>;
export const onUpdateThread = /* GraphQL */ `subscription OnUpdateThread($filter: ModelSubscriptionThreadFilterInput) {
  onUpdateThread(filter: $filter) {
    thread_id
    title
    content
    thread_owner {
      account_id
      username
      nickname
      password
      uwemail
      role
      bridges
      wechat_id
      google_id
      apple_id
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
    id
    createdAt
    updatedAt
    accountThreadsId
    threadGroupGroup_threadsId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateThreadSubscriptionVariables,
  APITypes.OnUpdateThreadSubscription
>;
export const onDeleteThread = /* GraphQL */ `subscription OnDeleteThread($filter: ModelSubscriptionThreadFilterInput) {
  onDeleteThread(filter: $filter) {
    thread_id
    title
    content
    thread_owner {
      account_id
      username
      nickname
      password
      uwemail
      role
      bridges
      wechat_id
      google_id
      apple_id
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
    id
    createdAt
    updatedAt
    accountThreadsId
    threadGroupGroup_threadsId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteThreadSubscriptionVariables,
  APITypes.OnDeleteThreadSubscription
>;
export const onCreateThreadGroup = /* GraphQL */ `subscription OnCreateThreadGroup(
  $filter: ModelSubscriptionThreadGroupFilterInput
) {
  onCreateThreadGroup(filter: $filter) {
    group_id
    group_name
    group_manager {
      account_id
      username
      nickname
      password
      uwemail
      role
      bridges
      wechat_id
      google_id
      apple_id
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
    id
    createdAt
    updatedAt
    accountHas_groupId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateThreadGroupSubscriptionVariables,
  APITypes.OnCreateThreadGroupSubscription
>;
export const onUpdateThreadGroup = /* GraphQL */ `subscription OnUpdateThreadGroup(
  $filter: ModelSubscriptionThreadGroupFilterInput
) {
  onUpdateThreadGroup(filter: $filter) {
    group_id
    group_name
    group_manager {
      account_id
      username
      nickname
      password
      uwemail
      role
      bridges
      wechat_id
      google_id
      apple_id
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
    id
    createdAt
    updatedAt
    accountHas_groupId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateThreadGroupSubscriptionVariables,
  APITypes.OnUpdateThreadGroupSubscription
>;
export const onDeleteThreadGroup = /* GraphQL */ `subscription OnDeleteThreadGroup(
  $filter: ModelSubscriptionThreadGroupFilterInput
) {
  onDeleteThreadGroup(filter: $filter) {
    group_id
    group_name
    group_manager {
      account_id
      username
      nickname
      password
      uwemail
      role
      bridges
      wechat_id
      google_id
      apple_id
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
    id
    createdAt
    updatedAt
    accountHas_groupId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteThreadGroupSubscriptionVariables,
  APITypes.OnDeleteThreadGroupSubscription
>;
export const onCreateComment = /* GraphQL */ `subscription OnCreateComment($filter: ModelSubscriptionCommentFilterInput) {
  onCreateComment(filter: $filter) {
    comment_id
    comment_content
    comment_account {
      account_id
      username
      nickname
      password
      uwemail
      role
      bridges
      wechat_id
      google_id
      apple_id
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
    id
    createdAt
    updatedAt
    accountCommentsId
    threadThread_commentsId
    commentChild_commentsId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateCommentSubscriptionVariables,
  APITypes.OnCreateCommentSubscription
>;
export const onUpdateComment = /* GraphQL */ `subscription OnUpdateComment($filter: ModelSubscriptionCommentFilterInput) {
  onUpdateComment(filter: $filter) {
    comment_id
    comment_content
    comment_account {
      account_id
      username
      nickname
      password
      uwemail
      role
      bridges
      wechat_id
      google_id
      apple_id
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
    id
    createdAt
    updatedAt
    accountCommentsId
    threadThread_commentsId
    commentChild_commentsId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateCommentSubscriptionVariables,
  APITypes.OnUpdateCommentSubscription
>;
export const onDeleteComment = /* GraphQL */ `subscription OnDeleteComment($filter: ModelSubscriptionCommentFilterInput) {
  onDeleteComment(filter: $filter) {
    comment_id
    comment_content
    comment_account {
      account_id
      username
      nickname
      password
      uwemail
      role
      bridges
      wechat_id
      google_id
      apple_id
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
    id
    createdAt
    updatedAt
    accountCommentsId
    threadThread_commentsId
    commentChild_commentsId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteCommentSubscriptionVariables,
  APITypes.OnDeleteCommentSubscription
>;
