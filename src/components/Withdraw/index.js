import React from 'react';

import { FontAwesome, Feather } from '@expo/vector-icons';

import { Container, CardHeader, BankIcon, Description, Bold, CardBody, Body, Footer, Value, Divider, Date } from './styles';

export default function Withdraw() {
    return (
        <Container>
            <CardHeader>
                <BankIcon>
                    <FontAwesome name="bank" color="#C0C0C0" size={28}/>
                </BankIcon>

                <CardBody>
                    <Description>
                        <Bold>Você</Bold> solicitou um saque.
                    </Description>

                    <Body>Saque concluído.</Body>

                    <Footer>
                        <Value>R$ 200,00</Value>
                        <Divider />
                        <Feather name="lock" color="rgba(255, 255, 255, 0.5)" size={14} />
                        <Date>3 dias atrás</Date>
                    </Footer>
                </CardBody>
            </CardHeader>
        </Container>
    );
};