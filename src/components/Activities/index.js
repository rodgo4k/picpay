import React, { useState } from 'react';

import { Feather, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

import { Container, Header, Title, TodosMinhas, TodosButton, Todos, Minhas, MinhasButton, Card, 
        CardHeader, Avatar, Description, Bold, CardBody, UserName, CardFooter, Details, Value, 
        Divider, Date, Actions, Option, OptionLabel } from './styles';

import avatar from '../../images/avatar.png';

export default function Activities() {
    const [isLiked, setIsLiked] = useState(false);

    function like() {
        setIsLiked((prevState) => !prevState)        
        }

    return (
        <Container>
            <Header>
                <Title>Atividades</Title>

                <TodosMinhas>
                    <TodosButton>
                        <Todos>Todos</Todos>
                    </TodosButton>
                    <MinhasButton>
                        <Minhas>Minhas</Minhas>
                    </MinhasButton>
                </TodosMinhas>
            </Header>

            <Card>
                <CardHeader>
                    <Avatar source={avatar} />
                    <Description>
                        <Bold>Você</Bold> pagou a <Bold>@rodrigo</Bold>
                    </Description>
                </CardHeader>

                <CardBody>
                    <UserName>Rodrigo Prestes</UserName>
                </CardBody>

                <CardFooter>
                    <Details>
                        <Value>R$ 18,00</Value>

                        <Divider />

                        <Feather name="lock" color="rgba(255, 255, 255, 0.5)" size={14} />
                        <Date>2 dias atrás</Date>
                    </Details>

                    <Actions>
                        <Option>
                            <MaterialCommunityIcons name="comment-outline" size={14} color="#fff" />
                            <OptionLabel>0</OptionLabel>
                        </Option>

                        <Option onPress={like} >
                            <AntDesign name={isLiked ? 'heart' : 'hearto'} size={14} 
                                       color={isLiked ? 'red' : '#fff'} />
                            <OptionLabel>{isLiked ? '1' : '0'}</OptionLabel>
                        </Option>
                    </Actions>
                </CardFooter>
            </Card>
        </Container>
    );
};