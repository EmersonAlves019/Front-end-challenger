import React from 'react';
import { useStore } from '../../../context/hooks/storeContext';
import * as S from './styles';

export default function CartInfos() {
  const { cartItems } = useStore();

  const countItems = cartItems.reduce((acc, { quantity }) => acc + quantity, 0) || 0;

  const totalPrice = Number(
    cartItems
      ?.reduce((acc, { quantity, price }) => acc + +quantity * +price, 0)
      ?.toFixed(2),
  ).toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  });

  return (
    <S.CartInfosContainer>
      <S.CartLogo />
      <div>
        <p>
          {countItems === 1
            ? `${countItems} Produto no Carrinho`
            : `${countItems} Produtos no Carrinho`}
        </p>
        <span>{totalPrice}</span>
      </div>
    </S.CartInfosContainer>
  );
}
