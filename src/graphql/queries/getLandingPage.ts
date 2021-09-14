const GET_LANDING_PAGE = /* GraphQL */ `
  fragment imageData on UploadFile {
    url
    alternativeText
  }

  fragment button on ComponentPageButton {
    url
    label
  }

  fragment authors on Author {
    id
    name
    role
    description
    photo {
      ...imageData
    }
    socialLinks {
      url
      title
    }
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

  fragment SectionAgenda on LandingPage {
    sectionAgenda {
      title
      description
    }
  }

  fragment PricingBox on LandingPage {
    pricingBox {
      totalPrice
      numberInstallments
      priceInstallment
      benefits
      button {
        ...button
      }
    }
  }

  fragment SectionAboutUs on LandingPage {
    sectionAboutUs {
      title
      authors {
        ...authors
      }
    }
  }

  fragment SectionReviews on LandingPage {
    sectionReviews {
      title
      reviews {
        name
        text
        image {
          ...imageData
        }
      }
    }
  }

  fragment SectionFaq on LandingPage {
    sectionFaq {
      title
      questions {
        question
        answer
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

      ...SectionAgenda

      ...PricingBox

      ...SectionAboutUs

      ...SectionReviews

      ...SectionFaq
    }
  }
`;

export default GET_LANDING_PAGE;
