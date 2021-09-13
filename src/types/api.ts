export type ImageProps = {
  url: string;
  alternativeText: string;
};

type ButtonProps = {
  url: string;
  label: string;
};

type TechIconsProps = {
  title: string;
  icon: ImageProps;
};

type ConceptsProps = {
  title: string;
};

type ModulesProps = {
  title: string;
  subtitle: string;
  description: string;
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

export type LandingPageProps = {
  logo: ImageProps;
  header: HeaderProps;
  sectionTech: SectionTechProps;
  sectionModules: SectionModulesProps;
  sectionConcepts: SectionConceptsProps;
  sectionAboutProject: SectionAboutProjectProps;
};
