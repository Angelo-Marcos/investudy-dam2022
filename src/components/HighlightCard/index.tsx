import React from 'react';


import {
    Amount,
    Container, Footer, Header, Icon, IconArrows, Title
} from './styles';

interface Props {
    title: string;
    amount: string;
    type: 'inCount' | 'income' | 'expense';
}

export function HighlightCard({
    title,
    amount,
    type
}: Props) {
    const icons = {
        inCount: 'wallet',
        income: 'arrow-up-circle',
        expense: 'arrow-down-circle'
    }

    return (
        <Container>
            <Header>
                {
                    type === 'inCount' ?
                        <Icon name={icons[type]} type={type} /> :
                        <IconArrows name={icons[type]} type={type} />
                }

                <Title>{title}</Title>
            </Header>
            <Footer>
                <Amount>{amount}</Amount>
            </Footer>
        </Container>
    )
}