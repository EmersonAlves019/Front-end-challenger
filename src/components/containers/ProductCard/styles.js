import styled from 'styled-components';
import { FaCartPlus } from 'react-icons/fa';

export const ProductCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 254px;
  height: 440px;
  margin: 25px 0 0 25px;
  padding: 15px;
  border-radius: 5px;

  background: white;
  border: 1px solid #d9d9d9;
  img {
    width: 224px;
    height: 224px;
    object-fit: contain;
  }
`;

export const ProductInfos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  height: 170px;

  p {
    font-size: 19px;
    line-height: 23.75px;
    font-weight: 500;
    color: #3f3f3f;

    word-break: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Price = styled.div`
  font-size: 22px;
  font-weight: 700;
  color: #3f3f3f;
`;

export const CartIcon = styled(FaCartPlus)`
  width: 19px;
  color: #b11e89;
`;
