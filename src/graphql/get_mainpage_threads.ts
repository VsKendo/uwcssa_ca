//src\graphql\get_mainpage_threads.ts
export const GetThreadGroupMainPage = /* GraphQL */ `
  query GetThreadGroupMainPage($id: ID!) {
    getThreadGroup(id: $id) {
      group_id
      group_name
      group_threads {
        items {
          title
          updatedAt
          thread_owner {
            nickname
          }
        }
      }
    }
  }
`;

  