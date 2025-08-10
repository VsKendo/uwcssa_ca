// src/graphql/create_thread.ts
export const createThread = /* GraphQL */ `
  mutation createThread(
    $thread_id: ID!
    $title: String!
    $content: String!
    $accountThreadsId: ID!
    $threadGroupGroup_threadsId: ID!
  ) {
    createThread(
      input: {
        thread_id: $thread_id
        title: $title
        content: $content
        accountThreadsId: $accountThreadsId
        threadGroupGroup_threadsId: $threadGroupGroup_threadsId
      }
    ) {
      thread_id
      title
      content
      accountThreadsId
      threadGroupGroup_threadsId
      createdAt
      updatedAt
    }
  }
`;
