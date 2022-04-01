import React from 'react';
import storeLogo from '../../../assets/images/store-logo.jpg';
import * as S from './styles';

export default function StoreInfos() {
  return (
    <S.StoreInfosContainer>
      <S.Logo src={storeLogo} alt="logo" />
      <div>
        <div>
          <h1>Pet Friends Acessories</h1>
          <p>
            <S.ClockIcon />
            ABERTO AGORA
          </p>
        </div>
        <p>Avenida Rio Grande do Sul, 1520, Estados | 58030-021 | João Pessoa - PB</p>
        <section>
          <p>
            <S.MotoLogo />
            <strong>Delivery: </strong>
            <span>35m - 1h:40m </span>
          </p>
          <p>
            <strong>Entrega: </strong>
            <span>À partir de R$ 3,00</span>
          </p>
        </section>
      </div>
    </S.StoreInfosContainer>
  );
}
