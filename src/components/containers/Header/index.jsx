import React from 'react';
import * as S from './styles';
import StoreInfos from '../../core/StoreInfos/index';
import CartInfos from '../../core/CartInfos/index';
import CategoriesNavBar from '../../core/CategoriesNavBar/index';

export default function Header() {
  return (
    <S.HeaderContainer>
      <S.TopContainer>
        <StoreInfos />
        <CartInfos />
      </S.TopContainer>
      <CategoriesNavBar />
    </S.HeaderContainer>
  );
}
