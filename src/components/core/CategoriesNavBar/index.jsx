import React from 'react';
import { useStore } from '../../../context/hooks/storeContext';
import * as S from './styles';

export default function CategoriesNavBar() {
  const { categoryList, categorySelected, setCategorySelected } = useStore();
  const selectCategory = e => {
    setCategorySelected(e.target.innerText);
  };

  return (
    <S.CategoriesContainer>
      {categoryList?.map(({ name, id }) => (
        <S.Category
          key={id}
          onClick={selectCategory}
          selected={categorySelected === name}
        >
          {name}
        </S.Category>
      ))}
    </S.CategoriesContainer>
  );
}
