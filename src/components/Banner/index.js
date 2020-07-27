import React from 'react';

import { Container, Details, Img, Title, Description, ComoPagar, Link } from './styles';

import img11 from '../../images/11.png';

export default function Banner() {
    return (
        <Container>
            <Details>
                <Title>Saiba como pagar um boleto com PicPay</Title>

                <Description>
                    Pague contas, boletos e parcele em até 12x no cartão com o Picpay
                </Description>

                <ComoPagar>
                    <Link>Ver como pagar</Link>
                </ComoPagar>
            </Details>

            <Img source={img11} />
        </Container>
    );
}