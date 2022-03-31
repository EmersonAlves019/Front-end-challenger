import PropTypes from 'prop-types';
import React, { createContext, useContext, useMemo, useState } from 'react';
import data, { categoryList } from '../../../services/api';

const StoreContext = createContext();

export function StoreProvider({ children }) {
  const [categories, setCategories] = useState({
    categorySelected: 'Sugestão do Vendedor',
    categories: categoryList,
  });
  const [products, setProducts] = useState(data);

  const storeMemo = useMemo(
    () => ({
      categories,
      setCategories,
      products,
      setProducts,
    }),
    [categories],
  );

  return <StoreContext.Provider value={storeMemo}>{children}</StoreContext.Provider>;
}

StoreProvider.propTypes = {
  children: PropTypes.func,
}.isRequired;

export const useStore = () => useContext(StoreContext);
