import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;

  height: 265px;
  width: 100%;
  background: #fff;

  @media (max-width: 700px) {
    transition: all 0.3s;
    height: 200px;

    img {
      width: 100px;
      height: 100px;
    }
    h1 {
    }
  }
`;

export const TopContainer = styled.div`
  border-bottom: 5px solid #b41c8b;
  display: flex;
  justify-content: space-between;

  width: 100%;
  height: 75%;
`;
