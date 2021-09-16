type ButtonProps = {
  url: string;
  label: string;
};

type SocialLinksProps = {
  url: string;
  title: string;
};

export type FooterAuthor = {
  name: string;
  socialLinks: Pick<SocialLinksProps, 'url'>[];
};

export type FooterAuthorsProps = {
  authors: FooterAuthor[];
};

export type AuthorsProps = {
  id?: string;
  name: string;
  role: string;
  photo: ImageProps;
  description: string;
  socialLinks: SocialLinksProps[];
};

type TechIconsProps = {
  title: string;
  icon: ImageProps;
};

type ConceptsProps = {
  title: string;
};

type QuestionProps = {
  answer: string;
  question: string;
};

type ModulesProps = {
  title: string;
  subtitle: string;
  description: string;
};

export type ReviewsProps = {
  name: string;
  text: string;
  image: ImageProps;
};

export type ImageProps = {
  url: string;
  alternativeText: string;
};

export type HeaderProps = {
  title: string;
  image: ImageProps;
  description: string;
  button: ButtonProps;
};

export type SectionAboutProjectProps = {
  title: string;
  image: ImageProps;
  description: string;
};

export type SectionConceptsProps = {
  title: string;
  concepts: ConceptsProps[];
};

export type SectionTechProps = {
  title: string;
  techIcons: TechIconsProps[];
};

export type SectionModulesProps = {
  title: string;
  modules: ModulesProps[];
};

export type SectionAgendaProps = {
  title: string;
  description: string;
};

export type PricingBoxProps = {
  benefits: string;
  totalPrice: number;
  button: ButtonProps;
  priceInstallment: number;
  numberInstallments: number;
};

export type SectionAboutUsProps = {
  title: string;
  authors: AuthorsProps[];
};

export type SectionReviewsProps = {
  title: string;
  reviews: ReviewsProps[];
};

export type SectionFaqProps = {
  title: string;
  questions: QuestionProps[];
};

export type LandingPageProps = {
  logo: ImageProps;
  header: HeaderProps;
  authors: FooterAuthorsProps;
  sectionFaq: SectionFaqProps;
  pricingBox: PricingBoxProps;
  sectionTech: SectionTechProps;
  sectionAgenda: SectionAgendaProps;
  sectionModules: SectionModulesProps;
  sectionAboutUs: SectionAboutUsProps;
  sectionReviews: SectionReviewsProps;
  sectionConcepts: SectionConceptsProps;
  sectionAboutProject: SectionAboutProjectProps;
};
