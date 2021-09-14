import React from 'react';

import Heading from 'components/Heading';
import Container from 'components/Container';
import { SectionAgendaProps } from 'types/api';

import * as S from './styles';

const SectionAgenda = ({ title, description }: SectionAgendaProps) => {
  return (
    <Container id="agenda">
      <Heading reverseColor>{title}</Heading>

      <S.Text dangerouslySetInnerHTML={{ __html: description }} />
    </Container>
  );
};

export default SectionAgenda;
