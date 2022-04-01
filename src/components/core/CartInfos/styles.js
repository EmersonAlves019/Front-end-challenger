import styled from 'styled-components';
import { FaShoppingCart } from 'react-icons/fa';

export const CartInfosContainer = styled.div`
  align-self: center;
  padding-left: 36px;

  display: flex;
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

  @media (max-width: 1000px) {
    position: fixed;
    height: 60px;
    bottom: 20px;
    left: 10%;
    right: 10%;
    z-index: 1;
    background-color: #b41c8b;
    color: #fff;
    width: 80vw;
    border-radius: 8px;

    div {
      display: flex;
      justify-content: space-between;
      width: 100%;
      align-items: center;
      padding: 20px;
    }

    span {
      background-color: #fff;
      padding: 5px;
      border-radius: 10px;
    }
  }
`;

export const CartLogo = styled(FaShoppingCart)`
  width: 26px;
  margin-top: -25px;
  margin-right: 13px;
  @media (max-width: 1000px) {
    margin: 0;
  }
`;
