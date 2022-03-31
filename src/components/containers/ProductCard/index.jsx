import PropTypes from 'prop-types';
import React from 'react';
import * as S from './styles';

export default function CategoriesNavBar({ product }) {
  const formatPrice = num =>
    typeof num === 'number' &&
    num?.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL',
    });

  return (
    <S.ProductCardContainer>
      <img src={product?.thumbnail} alt={product?.name} />
      <S.ProductInfos>
        <p>{product?.name}</p>
        <div>
          <S.Price>{formatPrice(product?.price)}</S.Price>
          <S.CartIcon />
        </div>
      </S.ProductInfos>
    </S.ProductCardContainer>
  );
}

CategoriesNavBar.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
  }),
}.isRequired;
