import PropTypes from 'prop-types';
import React from 'react';
import * as S from './styles';

export default function AddButton({ onClick, totalPrice }) {
  return (
    <S.Button type="button" onClick={onClick}>
      <span>Adicionar</span>
      <span>{totalPrice}</span>
    </S.Button>
  );
}

AddButton.propTypes = {
  onClick: PropTypes.func,
  totalPrive: PropTypes.string,
}.isRequired;
