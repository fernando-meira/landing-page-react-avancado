import React from 'react';
import { GetStaticProps } from 'next';

import client from 'graphql/client';
import { LandingPageProps } from 'types/api';
import GET_AUTHORS from 'graphql/queries/getAuthors';
import GET_LANDING_PAGE from 'graphql/queries/getLandingPage';

import Footer from 'components/Footer';
import JsonSchema from 'components/JsonSchema';
import PricingBox from 'components/PricingBox';
import SectionFaq from 'components/SectionFaq';
import SectionHero from 'components/SectionHero';
import SectionTech from 'components/SectionTech';
import SectionAgenda from 'components/SectionAgenda';
import SectionModules from 'components/SectionModules';
import SectionAboutUs from 'components/SectionAboutUs';
import SectionReviews from 'components/SectionReviews';
import SectionConcepts from 'components/SectionConcepts';
import SectionAboutProject from 'components/SectionAboutProject';

const Index = ({
  logo,
  header,
  authors,
  pricingBox,
  sectionFaq,
  sectionTech,
  sectionAgenda,
  sectionReviews,
  sectionModules,
  sectionAboutUs,
  sectionConcepts,
  sectionAboutProject,
}: LandingPageProps) => {
  return (
    <>
      <SectionHero logo={logo} header={header} />
      <SectionAboutProject {...sectionAboutProject} />
      <SectionTech {...sectionTech} />
      <SectionConcepts {...sectionConcepts} />
      <SectionModules {...sectionModules} />
      <SectionAgenda {...sectionAgenda} />
      <PricingBox {...pricingBox} />
      <SectionAboutUs {...sectionAboutUs} />
      <SectionReviews {...sectionReviews} />
      <SectionFaq {...sectionFaq} />
      <Footer authors={authors} />
      <JsonSchema />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { landingPage } = await client.request(GET_LANDING_PAGE);

  const { authors } = await client.request(GET_AUTHORS);

  return {
    props: {
      ...landingPage,
      authors,
    },
  };
};

export default Index;
