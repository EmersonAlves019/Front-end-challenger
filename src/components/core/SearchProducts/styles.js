import styled from 'styled-components';
import { HiOutlineSearch } from 'react-icons/hi';

export const SearchProductForm = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 50px 0;
  width: 81.5vw;
  height: 54px;

  @media (max-width: 600px) {
    width: 100%;
  }
  @media (max-width: 800px) {
    margin-top: 20px;
    justify-content: center;
    transition: all 0.3s;
    width: 95%;
  }
  form {
    display: flex;
    align-items: center;
    align-self: flex-start;

    width: 660px;
    height: 54px;
    border-radius: 3px;
    background: #fff;
    border: 1px solid #dddddd;

    button {
      background: #fff;
      background-color: none;
      border: none;
    }

    input {
      width: 100%;
      height: 100%;
      padding-left: 16px;
      border: none;
      font-size: 20px;
      font-weight: 400;
      font-family: Quicksand, sans-serif;

      &::placeholder {
        color: #898989;
      }

      &:focus {
        outline: none;
      }
    }
  }
`;

export const SearchIcon = styled(HiOutlineSearch)`
  width: 25px;
  height: 25px;
  margin-right: 12px;
  color: #acacac;
`;
