const GET_AUTHORS = /* GraphQL */ `
  query GET_AUTHORS {
    authors {
      name
      socialLinks {
        url
      }
    }
  }
`;

export default GET_AUTHORS;
