import React from 'react';

import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

import { Wrapper, Container, Header, QRButton, BalanceContainer, GiftButton, BalanceTitle, Balance } from './styles';

import Suggestions from '../../components/Suggestions';
import Activities from '../../components/Activities';
import Tips from '../../components/Tips';
import Withdraw from '../../components/Withdraw';
import Banner from '../../components/Banner';

export default function Home() {
    return (
        <Wrapper>
            <Container>
                <Header>
                    <QRButton>
                        <MaterialCommunityIcons name="qrcode-scan" size={30} color="#10c86e" />
                    </QRButton>
        
                    <BalanceContainer>
                        <BalanceTitle>Meu Saldo</BalanceTitle>
                        <Balance>R$ 0,00</Balance>
                    </BalanceContainer>

                    <GiftButton>
                        <AntDesign name="gift" size={30} color="#10c86e" />
                    </GiftButton>
                </Header>

                <Suggestions />

                <Activities />

                <Tips />

                <Withdraw />

                <Banner />
            </Container>
        </Wrapper>
    );
}