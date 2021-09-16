import React from 'react';

import { FooterAuthorsProps } from 'types/api';
import Container from 'components/Container';

import * as S from './styles';

const Footer = ({ authors }: FooterAuthorsProps) => {
  return (
    <S.Wrapper>
      <Container>
        <p>
          Desenvolvido por
          {authors.map(({ name, socialLinks }) => (
            <a key={name} href={socialLinks[0].url}>
              {name}
            </a>
          ))}
        </p>
      </Container>
    </S.Wrapper>
  );
};

export default Footer;
