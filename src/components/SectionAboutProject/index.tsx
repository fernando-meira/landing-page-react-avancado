import React from 'react';

import Heading from 'components/Heading';
import Container from 'components/Container';
import { SectionAboutProjectProps } from 'types/api';

import * as S from './styles';
import { getImageUrl } from 'utils/getImageUrl';

const SectionAboutProject = ({
  title,
  description,
  image,
}: SectionAboutProjectProps) => {
  console.log(description);
  return (
    <S.Wrapper>
      <Container>
        <S.Container>
          <S.Image src={getImageUrl(image.url)} alt={image.alternativeText} />

          <div>
            <Heading>{title}</Heading>

            <S.Text dangerouslySetInnerHTML={{ __html: description }} />
          </div>
        </S.Container>
      </Container>
    </S.Wrapper>
  );
};

export default SectionAboutProject;
