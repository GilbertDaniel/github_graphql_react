const githubQuery = (pageCount, queryString) => {
    return {
        query: `
    {
        viewer {
            name
          }
        search(
          query: "${queryString} user:planetoftheweb sort:update-desc"
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