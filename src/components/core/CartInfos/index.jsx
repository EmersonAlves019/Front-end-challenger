import React from 'react';
import * as S from './styles';

export default function CartInfos() {
  return (
    <S.CartInfosContainer>
      <S.CartLogo />
      <div>
        <p>5 Produtos no Carrinho</p>
        <span>R$ 349,80</span>
      </div>
    </S.CartInfosContainer>
  );
}
