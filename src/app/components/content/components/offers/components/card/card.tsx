import { Property } from 'csstype';
import React from 'react';
import './card.scss';
import { Button, Stack } from 'ui-kit';

interface CardProps {
  title: string;
  subtitle: string;
  fullSize?: boolean;
  bgImgUrl: string;
  bgPosition: Property.BackgroundPosition;
}

const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  bgImgUrl,
  bgPosition,
  fullSize = false,
}) => {
  return (
    <div
      className='card'
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bgImgUrl})`,
        backgroundPosition: bgPosition
    }}
    >
      <Stack
        gap={1.375}
        alignItems='flex-start'
        className='card__container'
      >
        <span className={`card__container_title ${fullSize ? '-full-size' : ''} bold`}>
          {title}
        </span>

        <span className={`card__container_subtitle ${fullSize ? '-full-size' : ''} bold`}>
          {subtitle}
        </span>

        <Button variant='secondary'>
          Learn more
        </Button>
      </Stack>
    </div>

  );
};

export default Card;