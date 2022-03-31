import React, { useState } from 'react';
import * as S from './styles';

export default function CategoriesNavBar() {
  const [selected, setSelected] = useState(false);

  const catergories = [
    'Sugestão do Vendedor',
    'Brinquedos',
    'Camas e Casinhas',
    'Coleiras',
    'Ossos e Petiscos',
    'Saúde',
  ];

  return (
    <S.CategoriesContainer>
      {catergories.map(category => (
        <S.Category
          onClick={() => setSelected(!selected)}
          selected={selected}
          key={category}
        >
          {category}
        </S.Category>
      ))}
    </S.CategoriesContainer>
  );
}
