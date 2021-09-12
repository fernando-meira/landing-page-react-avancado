export type ImageProps = {
  url: string;
  alternativeText: string;
};

type ButtonProps = {
  url: string;
  label: string;
};

type techIconsProps = {
  title: string;
  icon: ImageProps;
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

export type SectionTechProps = {
  title: string;
  techIcons: techIconsProps[];
};

export type LandingPageProps = {
  logo: ImageProps;
  header: HeaderProps;
  sectionTech: SectionTechProps;
  sectionAboutProject: SectionAboutProjectProps;
};
