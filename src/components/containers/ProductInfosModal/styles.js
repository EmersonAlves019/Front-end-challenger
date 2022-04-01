import styled from 'styled-components';
import { IoIosClose } from 'react-icons/io';

export const ProductInfosModalContainer = styled.div`
  display: flex;
  justify-content: space-between;

  position: relative;
  z-index: 2;

  padding: 30px;
  border-radius: 5px;

  width: 1077px;
  height: 531px;

  background: #fff;
`;

export const Overlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
`;

export const CloseIcon = styled(IoIosClose)`
  width: 70px;
  height: 70px;

  position: absolute;
  top: -48px;
  right: -48px;
  color: white;
  stroke-width: 15px;
`;

export const ImageContainer = styled.div`
  width: 398px;
  height: 398px;
  border-radius: 5px;
  border: 1px solid #eaeaea;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
  }
`;

export const ProductInfos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 585px;

  div {
    display: flex;
    justify-content: space-between;
    height: 48px;
  }

  h2 {
    color: #b41c8b;
    font-size: 29px;
    font-weight: 600;

    word-break: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  label {
    display: flex;
    flex-direction: column;

    color: #b41c8b;
    font-weight: 600;
    font-size: 18px;
    margin-top: 20px;
    div {
      display: flex;
      justify-content: space-between;
      span {
        color: #b1b1b1;
      }
    }
    textarea {
      margin-top: 20px;
      resize: none;
      height: 99px;
      width: 100%;
      border: 1px solid #dcdcdc;
      border-radius: 10px;
      padding: 10px;

      font-size: 18px;
      color: #333333;

      &:focus {
        outline: none;
      }
    }
  }
  ul {
    list-style: none;
    li {
      font-size: 18px;
      font-weight: 600;
      color: #333333;

      &:before {
        content: '-';
        color: black;
        font-size: 18px;
        font-weight: bold;
        margin-right: 10px;
      }
    }
  }
`;

export const Discount = styled.p`
  position: absolute;
  background-color: #77d400;
  padding: 4px;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
`;
