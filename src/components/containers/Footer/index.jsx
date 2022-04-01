import React from 'react';
import * as S from './styles';

export default function Footer() {
  return (
    <S.FooterContainer>
      <div>
        Desenvolvido por: <p>Emerson Alves</p>
      </div>
      <div>Políticas de Privacidade</div>
      <div>Termos de Uso</div>
      <div>
        <p>Nossas redes sociais</p>
        <div>
          <S.FacebookIcon />
          <S.InstagramIcon />
          <S.TwitterIcon />
          <S.YoutubeIcon />
        </div>
      </div>
    </S.FooterContainer>
  );
}
