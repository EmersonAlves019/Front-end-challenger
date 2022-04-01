import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useStore } from '../../../context/hooks/storeContext';
import * as S from './styles';
import CategoryCard from '../CategoryCard';
import Loading from '../../core/Loading/index';

export default function ProductsList() {
  const { products, categoryList, isLoading } = useStore();

  return isLoading ? (
    <Loading />
  ) : (
    <S.ProductsListContainer>
      {categoryList?.map(category => (
        <CategoryCard
          key={uuidv4()}
          category={category}
          products={products[category.name]}
        />
      ))}
      <div />
    </S.ProductsListContainer>
  );
}
