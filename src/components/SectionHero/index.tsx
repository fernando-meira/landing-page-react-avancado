import React from 'react';

import Logo from 'components/Logo';
import { gaEvent } from 'utils/ga';
import Button from 'components/Button';
import Container from 'components/Container';
import { HeaderProps, ImageProps } from 'types/api';

import * as S from './styles';
import { getImageUrl } from 'utils/getImageUrl';

const onClick = () =>
  gaEvent({ action: 'click', category: 'cta', label: 'hero button' });

type SectionHeroProps = {
  logo: ImageProps;
  header: HeaderProps;
};

const SectionHero = ({ logo, header }: SectionHeroProps) => (
  <S.Wrapper>
    <Container>
      <Logo {...logo} />

      <S.Content>
        <S.TextBlock>
          <S.Title>{header.title}</S.Title>
          <S.Description>{header.description}</S.Description>
          <S.ButtonWrapper>
            <Button href={header.button.url} onClick={onClick} wide>
              {header.button.label}
            </Button>
          </S.ButtonWrapper>
        </S.TextBlock>

        <S.Image
          alt={header.image.alternativeText}
          src={getImageUrl(header.image.url)}
        />
      </S.Content>
    </Container>
  </S.Wrapper>
);

export default SectionHero;
