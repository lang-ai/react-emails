import React from 'react';

import Grid from '../layout/Grid';

const style = {

  wrapper: {
    width: 'auto',
    margin: '0 auto',
  },

  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginTop: '5px',
    marginBottom: '10px',
  },

};

function Title({ children }) {
  return (
    <Grid style={style.wrapper}>
      <h1 style={style.title}>
        {children}
      </h1>
    </Grid>
  );
}

export default Title;

