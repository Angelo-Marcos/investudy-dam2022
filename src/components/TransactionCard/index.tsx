import React from 'react';
import {
    Amount,
    Category,
    Container,
    Footer,
    Header,
    Icon,
    Title,
    Date
} from './styles'

export function TransactionCard() {
    return (
        <Container>
            <Icon name='arrow-up-circle' />
            <Header>
                <Title>ASSISTÊNCIA ESTUDANTIL</Title>
                <Category>AUXÍLIO</Category>
            </Header>
            <Footer>
                <Amount>R$ 420,00</Amount>
                <Date>10/02/2022</Date>
            </Footer>

        </Container>
    );
}