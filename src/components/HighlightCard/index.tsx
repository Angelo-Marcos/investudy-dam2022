import React from 'react';

import {
    Amount,
    Container, Footer, Header, Icon, Title
} from './styles';

export function HighlightCard() {
    return (
        <Container>
            <Header>
                <Icon name="wallet" />
                <Title>EM CONTA</Title>
            </Header>
            <Footer>
                <Amount>R$ 630,25</Amount>
            </Footer>
        </Container>
    )
}