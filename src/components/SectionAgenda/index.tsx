import React from 'react';

import Heading from 'components/Heading';
import Container from 'components/Container';
import { SectionAgendaProps } from 'types/api';

import * as S from './styles';

interface ISectionAgenda {
  agenda: SectionAgendaProps;
}

const SectionAgenda = ({ agenda }: ISectionAgenda) => {
  console.log(agenda.description);
  return (
    <Container id="agenda">
      <Heading reverseColor>{agenda.title}</Heading>

      <S.Text dangerouslySetInnerHTML={{ __html: agenda.description }} />
    </Container>
  );
};

export default SectionAgenda;
