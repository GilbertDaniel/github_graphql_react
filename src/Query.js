const githubQuery = (pageCount, queryString) => {
    return {
        query: `
    {
        viewer {
            name
            avatarUrl
            login
            bio
          }
        search(
          query: "${queryString} user:GilbertDaniel sort:update-desc"
          type: REPOSITORY
          first: ${pageCount}
        ) {
          repositoryCount
          nodes {
            ... on Repository {
              id
              name
              description
              url
              viewerSubscription
            }
          }
        }
    }
    `
    }
};

export default githubQuery