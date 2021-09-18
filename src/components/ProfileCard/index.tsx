import React from 'react';
import { GrGithub } from 'react-icons/gr';
import { FaDribbble, FaTwitter } from 'react-icons/fa';

import { AuthorsProps } from 'types/api';

import * as S from './styles';
import { getImageUrl } from 'utils/getImageUrl';

const icons = {
  twitter: <FaTwitter />,
  github: <GrGithub />,
  dribbble: <FaDribbble />,
};

const ProfileCard: React.FC<AuthorsProps> = ({
  name,
  role,
  photo,
  socialLinks,
  description,
}) => (
  <S.Card key={name}>
    <S.Image alt={photo.alternativeText} src={getImageUrl(photo.url)} />

    <S.Name>{name}</S.Name>

    <S.Role>{role}</S.Role>

    <S.SocialLinks>
      {socialLinks.map((item) => (
        <S.Link key={item.url}>
          <a href={item.url} title={item.title}>
            {icons[item.title.toLowerCase()]}
          </a>
        </S.Link>
      ))}
    </S.SocialLinks>

    <S.Description>{description}</S.Description>
  </S.Card>
);

export default ProfileCard;
