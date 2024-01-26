// Reference.js
import React from 'react';

const Reference = ({ reference }) => {
  const { year, location, description, images } = reference;

  return (
    <div>
      <h3>{year}</h3>
      <p>Location: {location}</p>
      <p>Description: {description}</p>
      <div>
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Reference ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default Reference;
