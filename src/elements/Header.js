import React from 'react';

import Grid from '../layout/Grid';
import Img from './Img';

const logoSrc = 'http://i.imgur.com/RAJDs6w.png';

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

