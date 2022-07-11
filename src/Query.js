const githubQuery = {
    query: `
    {
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
            }
          }
        }
    }
    `,
};

export default githubQuery