import React, { useId } from 'react';
import { useStore } from '../../../context/hooks/storeContext';
import * as S from './styles';

export default function CategoriesNavBar() {
  const {
    setCategories,
    categories: { categories, categorySelected },
  } = useStore();
  const selectCategory = e => {
    setCategories(prev => ({ ...prev, categorySelected: e.target.id }));
  };

  return (
    <S.CategoriesContainer>
      {categories.map(category => (
        <S.Category
          key={useId()}
          onClick={selectCategory}
          selected={categorySelected === category}
          id={category}
        >
          {category}
        </S.Category>
      ))}
    </S.CategoriesContainer>
  );
}
