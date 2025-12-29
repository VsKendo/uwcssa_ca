/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createAccount = /* GraphQL */ `mutation CreateAccount(
  $input: CreateAccountInput!
  $condition: ModelAccountConditionInput
) {
  createAccount(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateAccountMutationVariables,
  APITypes.CreateAccountMutation
>;
export const updateAccount = /* GraphQL */ `mutation UpdateAccount(
  $input: UpdateAccountInput!
  $condition: ModelAccountConditionInput
) {
  updateAccount(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateAccountMutationVariables,
  APITypes.UpdateAccountMutation
>;
export const deleteAccount = /* GraphQL */ `mutation DeleteAccount(
  $input: DeleteAccountInput!
  $condition: ModelAccountConditionInput
) {
  deleteAccount(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteAccountMutationVariables,
  APITypes.DeleteAccountMutation
>;
export const createThread = /* GraphQL */ `mutation CreateThread(
  $input: CreateThreadInput!
  $condition: ModelThreadConditionInput
) {
  createThread(input: $input, condition: $condition) {
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
    updatedAt
    id
    createdAt
    accountThreadsId
    threadGroupGroup_threadsId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateThreadMutationVariables,
  APITypes.CreateThreadMutation
>;
export const updateThread = /* GraphQL */ `mutation UpdateThread(
  $input: UpdateThreadInput!
  $condition: ModelThreadConditionInput
) {
  updateThread(input: $input, condition: $condition) {
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
    updatedAt
    id
    createdAt
    accountThreadsId
    threadGroupGroup_threadsId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateThreadMutationVariables,
  APITypes.UpdateThreadMutation
>;
export const deleteThread = /* GraphQL */ `mutation DeleteThread(
  $input: DeleteThreadInput!
  $condition: ModelThreadConditionInput
) {
  deleteThread(input: $input, condition: $condition) {
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
    updatedAt
    id
    createdAt
    accountThreadsId
    threadGroupGroup_threadsId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteThreadMutationVariables,
  APITypes.DeleteThreadMutation
>;
export const createThreadGroup = /* GraphQL */ `mutation CreateThreadGroup(
  $input: CreateThreadGroupInput!
  $condition: ModelThreadGroupConditionInput
) {
  createThreadGroup(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateThreadGroupMutationVariables,
  APITypes.CreateThreadGroupMutation
>;
export const updateThreadGroup = /* GraphQL */ `mutation UpdateThreadGroup(
  $input: UpdateThreadGroupInput!
  $condition: ModelThreadGroupConditionInput
) {
  updateThreadGroup(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateThreadGroupMutationVariables,
  APITypes.UpdateThreadGroupMutation
>;
export const deleteThreadGroup = /* GraphQL */ `mutation DeleteThreadGroup(
  $input: DeleteThreadGroupInput!
  $condition: ModelThreadGroupConditionInput
) {
  deleteThreadGroup(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteThreadGroupMutationVariables,
  APITypes.DeleteThreadGroupMutation
>;
export const createComment = /* GraphQL */ `mutation CreateComment(
  $input: CreateCommentInput!
  $condition: ModelCommentConditionInput
) {
  createComment(input: $input, condition: $condition) {
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
      updatedAt
      id
      createdAt
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
` as GeneratedMutation<
  APITypes.CreateCommentMutationVariables,
  APITypes.CreateCommentMutation
>;
export const updateComment = /* GraphQL */ `mutation UpdateComment(
  $input: UpdateCommentInput!
  $condition: ModelCommentConditionInput
) {
  updateComment(input: $input, condition: $condition) {
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
      updatedAt
      id
      createdAt
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
` as GeneratedMutation<
  APITypes.UpdateCommentMutationVariables,
  APITypes.UpdateCommentMutation
>;
export const deleteComment = /* GraphQL */ `mutation DeleteComment(
  $input: DeleteCommentInput!
  $condition: ModelCommentConditionInput
) {
  deleteComment(input: $input, condition: $condition) {
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
      updatedAt
      id
      createdAt
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
` as GeneratedMutation<
  APITypes.DeleteCommentMutationVariables,
  APITypes.DeleteCommentMutation
>;
