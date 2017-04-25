import React, { PropTypes } from 'react';

const propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};


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

Img.propTypes = propTypes;

export default Img;
