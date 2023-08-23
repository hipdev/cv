export const GET_POSTS = `
  query getPosts {
    allPosts {
        id
        title
        content {
            value
        }
    }
  }
`
