import styled from 'styled-components';
import { FaMotorcycle } from 'react-icons/fa';
import { AiOutlineClockCircle } from 'react-icons/ai';

export const StoreInfosContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  padding: 23.96px 0 23.96px 58px;

  font-family: Quicksand, sans-serif;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    width: 730px;
    color: #333333;

    div {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      width: 424px;

      p {
        font-size: 12px;
        color: #1bbb16;
        font-weight: 700;
      }
    }

    h1 {
      font-size: 28px;
    }

    p {
      display: flex;
      align-items: center;
      font-size: 19px;
      font-weight: 400;

      span {
        margin-right: 10px;
        color: #818181;
        font-weight: 600;
      }
      strong {
        margin-right: 10px;
      }
    }
  }
`;

export const Logo = styled.img`
  border-radius: 50%;
  border: 2px solid #b41c8b;

  margin-right: 30.96px;

  width: 142.08px;
  height: 142.08px;
`;

export const MotoLogo = styled(FaMotorcycle)`
  width: 16px;
  margin-right: 4px;
`;

export const ClockIcon = styled(AiOutlineClockCircle)`
  width: 10px;
  margin-right: 2px;
`;
