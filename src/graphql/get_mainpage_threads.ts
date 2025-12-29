// src/graphql/get_mainpage_threads.ts
export const GetThreadGroupMainPage = /* GraphQL */ `
  query GetThreadGroupMainPage($groupId: ID!, $limit: Int!) {
    getThreadGroup(id: $groupId) {
      id
      group_name
    }

    threadsByGroup_idAndUpdatedAt(
      group_id: $groupId
      sortDirection: DESC
      limit: $limit
    ) {
      items {
        id
        title
        updatedAt
        thread_owner {
          nickname
        }
      }
    }
  }
`;
