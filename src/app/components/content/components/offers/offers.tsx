import { media, space2, space3, space4, space5 } from 'assets';
import React from 'react';
import { Grid, Stack } from 'ui-kit';
import { Card } from './components';
import './offers.scss';

const Offers: React.FC = () => {
  const isDownLg = media.useDown('lg');
  const isUpLg = media.useUp('lg');

  return (
    <Stack
      gap={isDownLg ? 1.875 : 2.5}
      alignItems='flex-start'
      style={{ width: '100%' }}
    >
      <span className='offers__title bold'>
        Offers
      </span>

      <Grid container spacing={isDownLg ? 4 : 5}>
        <Grid item sm={12} md={6} lg={12}>
          <Card
            title='Move the borders of reality!'
            subtitle="Go on a space adventure - it's possible with us!"
            bgImgUrl={space2}
            bgPosition={'center'}
            fullSize={isUpLg}
          />
        </Grid>
        <Grid item sm={12} md={6} lg={6}>
          <Card
            title='Space is not just stars and planets'
            subtitle='Go on a space adventure'
            bgImgUrl={space4}
            bgPosition={'center'}
          />
        </Grid>
        <Grid item sm={12} md={6} lg={6}>
          <Card
            title='For those who dream of stars'
            subtitle='Our offer: make your dream come true'
            bgImgUrl={space5}
            bgPosition={'center'}
          />
        </Grid>
        <Grid item sm={12} md={6} lg={12}>
          <Card
            title='Fulfill your fantastic dreams'
            subtitle='Space has never been so close'
            bgImgUrl={space3}
            bgPosition={'center'}
            fullSize={isUpLg}
          />
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Offers;