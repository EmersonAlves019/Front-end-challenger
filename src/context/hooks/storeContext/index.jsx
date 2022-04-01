import PropTypes from 'prop-types';
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { getCategories, getProducts } from '../../../services/api';

const StoreContext = createContext();

export function StoreProvider({ children }) {
  const [categoryList, setCategoryLIst] = useState([]);
  const [categorySelected, setCategorySelected] = useState('');
  const [products, setProducts] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const [filterByQuery, setFilterByQuery] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const data = await getCategories();
      const dataProducts = await getProducts();
      setCategoryLIst(data.data);
      setProducts(dataProducts.data);
    })();
  }, [filterByQuery, categorySelected]);

  useEffect(() => {
    const filterProducts = categoryList?.reduce(
      (acc, { name }) => ({
        ...acc,
        [categorySelected || name]:
          products[categorySelected || name]?.filter(product =>
            product.name?.toLowerCase().includes(filterByQuery?.toLowerCase()),
          ) || [],
      }),
      {},
    );
    setProducts(filterProducts);
    setIsLoading(false);
  }, [categoryList]);

  const storeMemo = useMemo(
    () => ({
      categoryList,
      setCategoryLIst,
      categorySelected,
      setCategorySelected,
      products,
      setModalOpen,
      modalOpen,
      setModalContent,
      modalContent,
      setFilterByQuery,
      filterByQuery,
      setProducts,
      cartItems,
      setCartItems,
      isLoading,
    }),
    [categoryList, modalOpen, modalContent, products, cartItems, categorySelected],
  );

  return <StoreContext.Provider value={storeMemo}>{children}</StoreContext.Provider>;
}

StoreProvider.propTypes = {
  children: PropTypes.func,
}.isRequired;

export const useStore = () => useContext(StoreContext);
