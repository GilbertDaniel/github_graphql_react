const githubQuery = {
    query: `
    {
        viewer {
            name
          }
        search(
          query: "user:GilbertDaniel sort:update-desc"
          type: REPOSITORY
          first: 20
        ) {
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
    `,
};

export default githubQuery