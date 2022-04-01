import PropTypes from 'prop-types';
import React from 'react';
import * as S from './styles';

export default function QuantitySelector({ setQty, qty }) {
  return (
    <S.Container>
      <button
        type="button"
        onClick={() => {
          console.log(qty);
          setQty(qty > 1 ? qty - 1 : 1);
        }}
      >
        -
      </button>
      <p>{qty}</p>
      <button
        type="button"
        onClick={() => {
          setQty(qty + 1);
        }}
      >
        +
      </button>
    </S.Container>
  );
}

QuantitySelector.propTypes = {
  qty: PropTypes.number,
  setQty: PropTypes.func,
}.isRequired;
