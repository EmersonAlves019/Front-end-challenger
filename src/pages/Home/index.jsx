import React from 'react';
import Header from '../../components/containers/Header/index';
import SearchProducts from '../../components/core/SearchProducts';
import * as S from './styles';
import ProductsList from '../../components/containers/ProductsList/index';
import { useStore } from '../../context/hooks/storeContext';
import ProductInfosModal from '../../components/containers/ProductInfosModal';

export default function Home() {
  const { modalOpen } = useStore();

  document.body.style.overflow = modalOpen ? 'hidden' : 'auto';

  return (
    <S.HomeContainer>
      <Header />
      <S.Main>
        {modalOpen && <ProductInfosModal />}
        <SearchProducts />
        <ProductsList />
      </S.Main>
    </S.HomeContainer>
  );
}
