import React from 'react';

import Grid from './layout/Grid';
import Header from './elements/Header';
import Title from './elements/Title';
import Body from './elements/Body';
import Footer from './elements/Footer';

const style = {

  container: {
    backgroundColor: '#efefef',
    padding: '20px 0',
  },

  main: {
    maxWidth: '500px',
    width: '100%',
  },

};

function Email({ data }) {
  return (
    <center style={style.container}>
      <Grid style={style.main}>
        <Header />
        <Body>
          <Title>{data.title}</Title>

          <p>Hey {data.name}!</p>
          <p>
            This is just a demo project so don't worry too much about the content!
          </p>
        </Body>
        <Footer />
      </Grid>
    </center>
  );
}

export default Email;

