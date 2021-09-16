import React from 'react';

import Heading from 'components/Heading';
import Container from 'components/Container';
import { SectionAboutUsProps } from 'types/api';
import ProfileCard from 'components/ProfileCard';

import * as S from './styles';

const SectionAboutUs = ({ authors, title }: SectionAboutUsProps) => (
  <Container>
    <Heading reverseColor>{title}</Heading>

    <S.Content>
      {authors.map((profile) => (
        <ProfileCard
          key={profile.id}
          name={profile.name}
          role={profile.role}
          photo={profile.photo}
          socialLinks={profile.socialLinks}
          description={profile.description}
        />
      ))}
    </S.Content>
  </Container>
);

export default SectionAboutUs;
