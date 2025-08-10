//# src/graphql/my_create_comment.ts
export const myCreateComment = /* GraphQL */ `
  mutation myCreateComment(
    $comment_id: ID!
    $comment_content: String!
    $accountCommentsId: ID!           
    $threadThread_commentsId: ID!  
    $commentChild_commentsId: ID     
    $is_anonymous_comment: Boolean
  ) {
    createComment(
      input: {
        comment_id: $comment_id
        comment_content: $comment_content
        accountCommentsId: $accountCommentsId
        threadThread_commentsId: $threadThread_commentsId
        commentChild_commentsId: $commentChild_commentsId
        is_anonymous_comment: $is_anonymous_comment
      }
    ) {
      comment_id
      comment_content
      createdAt
      updatedAt
      commentChild_commentsId     
      accountCommentsId
      threadThread_commentsId
      is_anonymous_comment
    }
  }
`;
