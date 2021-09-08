import SectionAboutProject from 'components/SectionAboutProject';

export type ImageProps = {
  url: string;
  alternativeText: string;
};

type ButtonProps = {
  url: string;
  label: string;
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

export type LandingPageProps = {
  logo: ImageProps;
  header: HeaderProps;
  sectionAboutProject: SectionAboutProjectProps;
};
