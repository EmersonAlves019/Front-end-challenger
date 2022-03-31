import styled from 'styled-components';
import { FaShoppingCart } from 'react-icons/fa';

export const CartInfosContainer = styled.div`
  align-self: center;
  display: flex;
  padding-left: 36px;
  align-items: center;
  width: 363px;
  height: 120px;
  border-left: 1px solid #ececec;
  color: #3f3f3f;

  font-size: 18px;
  font-weight: 600;

  span {
    color: #b41c8b;
    font-size: 20px;
    font-weight: 800;
  }
`;

export const CartLogo = styled(FaShoppingCart)`
  width: 26px;
  margin-top: -25px;
  margin-right: 13px;
`;
