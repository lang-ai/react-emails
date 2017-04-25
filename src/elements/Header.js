import React from 'react';

import Grid from '../layout/Grid';
import Img from './Img';

import logoSrc from '../logo.png';

const style = {

  header: {
    margin: '10px auto 20px auto',
    width: 'auto',
  },

  img: {
    height: '35px',
  },

};

function Header() {
  return (
    <Grid style={style.header}>
      <Img style={style.img} src={logoSrc} alt="logo" />
    </Grid>
  );
}

export default Header;

