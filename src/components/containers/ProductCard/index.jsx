import PropTypes from 'prop-types';
import React from 'react';
import { useStore } from '../../../context/hooks/storeContext';
import * as S from './styles';

export default function CategoriesNavBar({ product }) {
  const calculateDiscount = ({ originalPrice, price }) => {
    if (originalPrice && price) {
      const discount = originalPrice - price;
      return `${((discount * 100) / originalPrice).toFixed(0)}% OFF`;
    }
    return '';
  };

  const formatPrice = num =>
    typeof num === 'number' &&
    num?.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL',
    });

  const { setModalOpen, setModalContent } = useStore();

  return (
    <S.ProductCardContainer
      onClick={() => {
        setModalOpen(true);
        setModalContent({ ...product, discount: calculateDiscount(product) });
      }}
    >
      {calculateDiscount(product) && (
        <S.Discount>{calculateDiscount(product)}</S.Discount>
      )}
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
