import React from 'react';

import Logo from 'components/Logo';
import { gaEvent } from 'utils/ga';
import { LogoProps } from 'types/api';
import Button from 'components/Button';
import Container from 'components/Container';

import * as S from './styles';

const onClick = () =>
  gaEvent({ action: 'click', category: 'cta', label: 'hero button' });

type SectionHeroProps = {
  logo: LogoProps;
};

const SectionHero = ({ logo }: SectionHeroProps) => (
  <S.Wrapper>
    <Container>
      <Logo {...logo} />

      <S.Content>
        <S.TextBlock>
          <S.Title>React Avançado</S.Title>
          <S.Description>
            Crie aplicações reais com NextJS, Strapi, GraphQL e mais!
          </S.Description>
          <S.ButtonWrapper>
            <Button
              href="https://www.udemy.com/course/react-avancado/?couponCode=PROMOINDEPENDENCIA"
              onClick={onClick}
              wide
            >
              Comprar
            </Button>
          </S.ButtonWrapper>
        </S.TextBlock>

        <S.Image
          src="/img/hero-illustration.svg"
          alt="Ilustração de um desenvolvedor em frente a um computador com várias linhas de código."
        />
      </S.Content>
    </Container>
  </S.Wrapper>
);

export default SectionHero;
