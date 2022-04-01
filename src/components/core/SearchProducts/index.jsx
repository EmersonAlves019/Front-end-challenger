import React, { useState } from 'react';
import { useStore } from '../../../context/hooks/storeContext';
import * as S from './styles';

export default function SearchProducts() {
  const [query, setQuery] = useState('');
  const { setFilterByQuery } = useStore();

  return (
    <S.SearchProductForm>
      <form
        onSubmit={e => {
          e.preventDefault();
          setFilterByQuery(query);
        }}
      >
        <input
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="O que você procura?"
        />
        <button type="submit">
          <S.SearchIcon />
        </button>
      </form>
    </S.SearchProductForm>
  );
}
