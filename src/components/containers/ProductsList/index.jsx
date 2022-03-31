import React, { useId } from 'react';
import { useStore } from '../../../context/hooks/storeContext';
import * as S from './styles';
import CategoryCard from '../CategoryCard';

export default function ProductsList() {
  const {
    products: { productsByCategory },
    categories: { categories },
  } = useStore();

  return (
    <S.ProductsListContainer>
      {categories?.map(category => (
        <CategoryCard
          key={useId()}
          category={category}
          products={productsByCategory[category]}
        />
      ))}
      <div />
    </S.ProductsListContainer>
  );
}
