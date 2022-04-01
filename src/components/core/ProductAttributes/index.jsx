import PropTypes from 'prop-types';
import React, { useId } from 'react';

export default function ProductAttributes({ attributes }) {
  return (
    <ul>
      {attributes?.map(item => (
        <li key={useId()}>{item}</li>
      ))}
    </ul>
  );
}

ProductAttributes.propTypes = {
  atributes: PropTypes.arrayOf(PropTypes.string),
}.isRequired;
