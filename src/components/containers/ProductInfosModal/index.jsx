import React, { useState } from 'react';
import { useStore } from '../../../context/hooks/storeContext';
import * as S from './styles';
import QuantitySelector from '../../core/QuantitySelector/index';
import AddButton from '../../core/AddButton/index';
import ProductAttributes from '../../core/ProductAttributes';

export default function ProductInfosModal() {
  const { modalOpen, setModalOpen, modalContent, setCartItems, cartItems } = useStore();
  const [observations, setObservations] = useState();
  const [qty, setQty] = useState(1);

  const formatPriceTotal = num =>
    typeof num === 'number' &&
    (num * qty).toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL',
    });

  const handleChange = e => {
    if (e.target.value.length <= 500) setObservations(e.target.value);
  };

  const attributes = [
    'Indicado para cães e gatos',
    'Contém extrato de aloe e vera e silicone',
    'Ph neutro',
    'Uso veterinário',
    'Produto de alta qualidade',
    'Disponível em embalagens de 500ml e 5 litros.',
  ];

  return (
    modalOpen && (
      <S.Overlay>
        <S.ProductInfosModalContainer>
          <S.CloseIcon size="50px" onClick={() => setModalOpen(!modalOpen)} />
          <S.ImageContainer>
            {modalContent?.discount && <S.Discount>{modalContent?.discount}</S.Discount>}
            <img src={modalContent?.thumbnail} alt={modalContent.name} />
          </S.ImageContainer>
          <S.ProductInfos>
            <h2>{modalContent?.name}</h2>
            <ProductAttributes attributes={attributes} />
            <label htmlFor={modalContent.sku}>
              <div>
                <p>Observações:</p>
                <span>{observations?.length || 0}/500</span>
              </div>
              <textarea
                onChange={handleChange}
                value={observations}
                id={modalContent.sku}
              />
            </label>
            <div>
              <QuantitySelector setQty={setQty} qty={qty} />
              <AddButton
                onClick={() => {
                  setCartItems([...cartItems, { ...modalContent, quantity: qty }]);
                }}
                totalPrice={formatPriceTotal(modalContent?.price)}
              />
            </div>
          </S.ProductInfos>
        </S.ProductInfosModalContainer>
      </S.Overlay>
    )
  );
}
