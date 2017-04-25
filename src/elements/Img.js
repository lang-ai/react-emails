import React from 'react';

const imgStyle = {

  img: {
    outline: 'none',
    textDecoration: 'none',
    border: 'none',
    display: 'block',
  },

};

function Img({ src, alt, className, style = {} }) {
  return (
    <img
      src={src}
      alt={alt}
      style={{ ...imgStyle.img, ...style }}
      className={className}
    />
  );
}

export default Img;
