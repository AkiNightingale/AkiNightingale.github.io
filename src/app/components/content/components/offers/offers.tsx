import { media } from 'assets';
import React from 'react';
import { Grid, Stack } from 'ui-kit';
import './offers.scss';

const Offers: React.FC = () => {
  return (
    <Stack
      gap={media.down('md') ? 1.875 : 2.5}
      alignItems='flex-start'
      style={{ width: '100%' }}
    >
      <span className='offers__title bold'>
        Offers
      </span>

      <Grid container spacing={2}>
        <Grid item sm={12} md={6} lg={12}>
          Item 3
        </Grid>
        <Grid item sm={12} md={6} lg={6}>
          Item 4
        </Grid>
        <Grid item sm={12} md={6} lg={6}>
          Item 5
        </Grid>
        <Grid item sm={12} md={6} lg={6}>
          Item 6
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Offers;