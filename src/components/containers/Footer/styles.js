import styled from 'styled-components';
import { BsFacebook, BsTwitter } from 'react-icons/bs';
import { AiOutlineInstagram, AiFillYoutube } from 'react-icons/ai';

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: center;
  /* position: --webkit-sticky;
  position: sticky;
  bottom: 0; */

  min-height: 120px;
  width: 100%;

  color: #b41c8b;
  font-size: 18px;
  font-weight: 600;
  div {
    min-width: 250px;
    min-height: 60px;
    display: flex;
    flex-direction: column;
    div {
      flex-direction: row;
      justify-content: space-between;
      * {
        width: 35px;
        height: 35px;
      }
    }
  }

  border-top: 5px solid #b41c8b;

  background: #fff;
`;

export const FacebookIcon = styled(BsFacebook)`
  display: flex;
  color: #1877f2;
  justify-content: space-between;
`;

export const InstagramIcon = styled(AiOutlineInstagram)`
  display: flex;
  background: linear-gradient(#d8307b, #f39259);
  color: white;
  border-radius: 50%;
  padding: 2px;
  justify-content: space-between;
`;

export const TwitterIcon = styled(BsTwitter)`
  background: #43bceb;
  border-radius: 50%;
  padding: 5px;
  color: white;
  display: flex;
  justify-content: space-between;
`;

export const YoutubeIcon = styled(AiFillYoutube)`
  display: flex;
  color: white;
  border-radius: 50%;
  padding: 5px;
  background: #ff0000;
  justify-content: space-between;
`;
