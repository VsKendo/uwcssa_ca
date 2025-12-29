//src\graphql\get_thread_detail.ts
export const GetThreadDetail = /* GraphQL */ `
    query GetThreadDetail($id: ID!) {
        getThread(id: $id) {
        id
        title
        content
        createdAt
        updatedAt
        thread_owner {
            nickname
            id
        }
        thread_group {
            id
            group_name
            group_id
        }
        thread_comments{
            items {
                id
                commentChild_commentsId
                comment_content
                createdAt
                updatedAt
                comment_account {
                    nickname
                    id
                }
                comment_likes
                comment_rank
                is_anonymous_comment
                child_comments {
                    items {
                        id
                        comment_content
                        createdAt
                        updatedAt
                        comment_account {
                            nickname
                            id
                        }
                        comment_likes
                        comment_rank
                        is_anonymous_comment
                    }
                }
            }
        }
        }
    }
`;