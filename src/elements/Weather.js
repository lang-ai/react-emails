import React from 'react';

import Grid from '../layout/Grid';
import Img from './Img';

const style = {
};

function Weather({ name, abbr }) {
  return (
    <Grid>
      <Grid.Row>
        <Img src={`https://www.metaweather.com/static/img/weather/png/64/${abbr}.png`} alt={name} />
        <p>{name}</p>
      </Grid.Row>
    </Grid>
  );
}

export default Weather;

