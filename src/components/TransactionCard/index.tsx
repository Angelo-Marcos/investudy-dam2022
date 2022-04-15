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

interface Category {
    name: string;
    icon: string;
}

export interface TransactionCardProps {
    type: 'income' | 'expense';
    title: string;
    amount: string;
    category: Category;
    date: string;
}

interface Props {
    data: TransactionCardProps;
}

export function TransactionCard({ data }: Props) {
    return (
        <Container>
            <Icon
                type={data.type}
                name={data.category.icon}
            />
            <Header>
                <Title>{data.title}</Title>
                <Category>{data.category.name}</Category>
            </Header>
            <Footer>
                <Amount type={data.type}>
                    {data.type === 'expense' && '- '}
                    {data.amount}
                </Amount>
                <Date>{data.date}</Date>
            </Footer>

        </Container>
    );
}