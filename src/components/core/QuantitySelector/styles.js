import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 110px;
  border: 1px solid #dcdcdc;
  p {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 33%;
    font-size: 20px;
    font-weight: 600;
    color: #333333;
  }
  button {
    width: 33%;
    cursor: pointer;
    font-size: 30px;
    background: none;
    border: none;
    color: #b41c8b;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
`;
