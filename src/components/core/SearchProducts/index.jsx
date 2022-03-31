import React from 'react';
import * as S from './styles';

export default function SearchProducts() {
  return (
    <S.SearchContainer>
      <div>
        <input placeholder="O que você procura?" />
        <S.SearchIcon />
      </div>
    </S.SearchContainer>
  );
}
