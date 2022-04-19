import React from 'react';
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import {
    Container,
    ContentWrapper,
    Exit,
    ExitInfo,
    Header,
    HighlightCards,
    Icon,
    Photo,
    TitleMain,
    User,
    UserGreeting,
    UserInfo,
    UserName,
    Transactions,
    TitleTransactions,
    ListTransactions,
    Wallet,
    TransactionList
} from './styles';

import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard';

export interface DataListProps extends TransactionCardProps {
    id: string;
}

export function Home() {
    const transactionData: DataListProps[] = [
        {
            id: '1',
            type: 'income',
            title: 'ASSISTÊNCIA ESTUDANTIL',
            amount: 'R$ 420,00',
            date: '10/02/2022',
            category: {
                icon: 'arrow-up-circle',
                name: 'AUXÍLIO'
            }
        },
        {
            id: '2',
            type: 'income',
            title: 'BOLSA PROJETO',
            amount: 'R$ 250,00',
            date: '09/02/2022',
            category: {
                icon: 'arrow-up-circle',
                name: 'AUXÍLIO'
            }
        },
        {
            id: '3',
            type: 'expense',
            title: 'PAGAMENTO DO ALUGUEL',
            amount: 'R$ 145,00',
            date: '07/02/2022',
            category: {
                icon: 'arrow-down-circle',
                name: 'CASA'
            }
        },
        {
            id: '4',
            type: 'expense',
            title: 'PAGAMENTO DOS LIVROS',
            amount: 'R$ 97,50',
            date: '05/02/2022',
            category: {
                icon: 'arrow-down-circle',
                name: 'FACULDADE'
            }
        },
        {
            id: '5',
            type: 'expense',
            title: 'PAGAMENTO DO ÔNIBUS',
            amount: 'R$ 167,30',
            date: '02/02/2022',
            category: {
                icon: 'arrow-down-circle',
                name: 'FACULDADE'
            }
        },
    ]
    return (
        <Container>
            <LinearGradient
                // Background Linear Gradient
                colors={['#61DD6D', '#ffffff']}
                style={styles.background}
            />
            <Header>
                <ContentWrapper>
                    <UserInfo>
                        <Photo source={{ uri: 'https://github.com/Angelo-Marcos.png' }} />
                        <User>
                            <UserGreeting>Olá, </UserGreeting>
                            <UserName>Angelo!</UserName>
                        </User>
                    </UserInfo>

                    <ExitInfo>
                        <Icon name="logout" />
                        <Exit>Sair</Exit>
                    </ExitInfo>
                </ContentWrapper>
            </Header>

            <TitleMain>CARTEIRA</TitleMain>

            <Wallet>
                <HighlightCards>
                    <HighlightCard
                        title='EM CONTA'
                        amount='R$ 630,25'
                        type='inCount'
                    />
                    <HighlightCard
                        title='ENTRADA'
                        amount='R$ 430,25'
                        type='income'
                    />
                    <HighlightCard
                        title='SAÍDA'
                        amount='R$ 200,00'
                        type='expense'
                    />
                </HighlightCards>
            </Wallet>


            <ListTransactions>
                <TitleTransactions>MOVIMENTAÇÕES</TitleTransactions>

                <Transactions>

                    <TransactionList
                        data={transactionData}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) =>
                            <TransactionCard data={item} />
                        }

                    />

                </Transactions>
            </ListTransactions>

        </Container>
    );
}

const styles = StyleSheet.create({
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%',
    },
});