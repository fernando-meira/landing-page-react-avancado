import React from 'react';
import Slider from 'react-slick';

import Container from 'components/Container';
import Heading from 'components/Heading';
import ReviewCard from 'components/ReviewCard';

import * as S from './styles';
import { SectionReviewsProps } from 'types/api';

const settings = {
  dots: true,
  arrows: false,
  slidesToShow: 2,
  infinite: false,
  speed: 500,
  rows: 2,
  slidesPerRow: 1,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        rows: 2,
        slidesPerRow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const SectionReviews = ({ title, reviews }: SectionReviewsProps) => {
  return (
    <Container>
      <Heading reverseColor>{title}</Heading>

      <S.Content>
        <Slider {...settings}>
          {reviews.map(({ name, image, text }, index) => (
            <ReviewCard
              id={index}
              key={index}
              name={name}
              text={text}
              image={image}
            />
          ))}
        </Slider>
      </S.Content>
    </Container>
  );
};

export default SectionReviews;
