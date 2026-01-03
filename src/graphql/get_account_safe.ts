/* tslint:disable */
/* eslint-disable */
// Custom query for getAccount - only fetches id to check if account exists
// This avoids requesting createdAt/updatedAt fields that may be null in the database

export const getAccountSafe = /* GraphQL */ `query GetAccountSafe($id: ID!) {
  getAccount(id: $id) {
    id
    __typename
  }
}
`;
