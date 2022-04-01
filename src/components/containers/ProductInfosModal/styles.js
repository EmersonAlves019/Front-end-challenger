import styled from 'styled-components';
import { IoIosClose } from 'react-icons/io';
import { MdKeyboardArrowLeft } from 'react-icons/md';

export const ProductInfosModalContainer = styled.div`
  display: flex;
  justify-content: space-between;

  position: relative;
  z-index: 5;

  padding: 30px;
  border-radius: 5px;

  width: 1077px;
  height: 531px;

  background: #fff;

  @media (max-width: 1200px) {
    width: 90%;
  }
  @media (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    padding-top: 100px;
  } ;
`;

export const Overlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

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
  width: 35%;
  height: 398px;
  border-radius: 5px;
  border: 1px solid #eaeaea;

  @media (max-width: 800px) {
    margin-top: 60px;
    width: 70%;
    height: 70%;
  }
  img {
    width: 100%;
    object-fit: cover;
    border-radius: 5px;
  }
`;

export const ProductInfos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 60%;

  @media (max-width: 800px) {
    width: 90%;
    height: 90%;
  }

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
    @media (max-width: 1200px) {
      -webkit-line-clamp: 2;
    }
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

export const CloseModalContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;

  Button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100px;

    background: none;
    border: none;

    color: #fff;
    font-size: 18px;
    font-weight: 600;
  }

  display: none;
  height: 74px;
  width: 100%;
  background-color: #b41c8b;

  @media (max-width: 800px) {
    display: fixed;
    top: 0;
  } ;
`;

export const CloseModal = styled(MdKeyboardArrowLeft)`
  width: 40px;
  height: 40px;
  background: white;
  border-radius: 50%;
  color: #b41c8b;
`;
