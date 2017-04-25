import React from 'react';

import Grid from '../layout/Grid';

const style = {

  footer: {
    margin: '20px 0',
  },

  p: {
    fontSize: '14px',
    lineHeight: '1.5',
    margin: 0,
    color: '#607D8B',
    textAlign: 'center',
  },

  a: {
    color: '#00a1ef',
  },

};

function Footer() {
  return (
    <Grid style={style.footer}>
      <Grid.Cell style={style.content}>
        <p style={style.p}>
          This email was created with React.
        </p>
        <p style={style.p}>
          The template and source code is freely available&nbsp;
          <a style={style.a} href="https://github.com/sentisis/react-emails">here</a>
        </p>
      </Grid.Cell>
    </Grid>
  );
}

export default Footer;

