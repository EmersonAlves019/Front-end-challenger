import React from 'react';
import Header from '../../components/containers/Header/index';
import SearchProducts from '../../components/core/SearchProducts';
import * as S from './styles';
import ProductsList from '../../components/containers/ProductsList/index';

export default function Home() {
  return (
    <S.HomeContainer>
      <Header />
      <S.Main>
        <SearchProducts />
        <ProductsList />
      </S.Main>
    </S.HomeContainer>
  );
}
