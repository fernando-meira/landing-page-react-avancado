const GET_LANDING_PAGE = /* GraphQL */ `
  fragment imageData on UploadFile {
    url
    alternativeText
  }

  fragment button on ComponentPageButton {
    url
    label
  }

  fragment logo on LandingPage {
    logo {
      ...imageData
    }
  }

  fragment landingPage on LandingPage {
    header {
      title
      description
      image {
        ...imageData
      }
      button {
        ...button
      }
    }
  }

  query GET_LANDING_PAGE {
    landingPage {
      ...logo

      ...landingPage
    }
  }
`;

export default GET_LANDING_PAGE;
