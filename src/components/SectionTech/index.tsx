import React from 'react';

import { getImageUrl } from 'utils/getImageUrl';
import Heading from 'components/Heading';
import Container from 'components/Container';

import * as S from './styles';
import { SectionTechProps } from 'types/api';

const SectionTech = ({ title, techIcons }: SectionTechProps) => {
  console.log(techIcons);

  return (
    <S.Wrapper>
      <Container>
        <Heading reverseColor>{title}</Heading>
        <S.IconsContainer>
          {techIcons.map(({ title, icon }) => (
            <S.Icon key={title}>
              <S.Icons
                src={getImageUrl(icon.url)}
                alt={icon.alternativeText}
                loading="lazy"
              />
              <S.IconsName>{title}</S.IconsName>
            </S.Icon>
          ))}
        </S.IconsContainer>
      </Container>
    </S.Wrapper>
  );
};

export default SectionTech;
