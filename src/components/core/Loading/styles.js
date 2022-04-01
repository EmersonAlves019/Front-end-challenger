import styled from 'styled-components';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const LoadingIcon = styled(AiOutlineLoading3Quarters)`
  width: 50px;
  height: 50px;
  margin-top: 50px;
  color: #3f3f3f;
  animation: loading 0.8s infinite linear;

  @keyframes loading {
    from {
      transform: rotate(-1turn);
    }
  }
`;
export default LoadingIcon;
