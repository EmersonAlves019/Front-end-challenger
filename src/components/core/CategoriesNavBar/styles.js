import styled from 'styled-components';

export const CategoriesContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  overflow: auto;

  width: 100%;
  height: 25%;
  border-bottom: 1px solid #e0e0e0;

  @media (max-width: 1200px) {
    transition: all 0.3s;

    justify-content: flex-start;
  }
`;

export const Category = styled.div`
  font-family: Quicksand, sans-serif;
  cursor: pointer;

  min-width: 200px;
  text-align: center;

  color: ${({ selected }) => (selected ? '#B41C8B' : '#3f3f3f')};
  text-decoration: ${({ selected }) => (selected ? 'underline' : 'none')};
  font-weight: ${({ selected }) => (selected ? '700' : '600')};
`;
