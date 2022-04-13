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
    ListTransactions
} from './styles';

import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard } from '../../components/TransactionCard';

export function Home() {
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

            <ListTransactions>
                <TitleTransactions>MOVIMENTAÇÕES</TitleTransactions>

                <Transactions>
                    <TransactionCard />
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