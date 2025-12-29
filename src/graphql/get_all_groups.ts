// src/graphql/get_all_groups.ts
export const GetAllThreadGroups = /* GraphQL */ `
  query GetAllThreadGroups {
    listThreadGroups {
      items {
        id
        group_id
        group_name
        introduction
        threads_num
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
