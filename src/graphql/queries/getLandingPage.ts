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

  fragment headerPage on LandingPage {
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

  fragment sectionAboutProject on LandingPage {
    sectionAboutProject {
      title
      description
      image {
        ...imageData
      }
    }
  }

  fragment SectionTech on LandingPage {
    sectionTech {
      title
      techIcons {
        title
        icon {
          ...imageData
        }
      }
    }
  }

  fragment SectionConcepts on LandingPage {
    sectionConcepts {
      title
      concepts {
        title
      }
    }
  }

  fragment SectionModules on LandingPage {
    sectionModules {
      title
      modules {
        title
        subtitle
        description
      }
    }
  }

  query GET_LANDING_PAGE {
    landingPage {
      ...logo

      ...headerPage

      ...sectionAboutProject

      ...SectionTech

      ...SectionConcepts

      ...SectionModules
    }
  }
`;

export default GET_LANDING_PAGE;
