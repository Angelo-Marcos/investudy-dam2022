import React from 'react';
import { SimpleLineIcons } from '@expo/vector-icons';

import {
    Container,
    ContentWrapper,
    Exit,
    ExitInfo,
    Header,
    HighlightCards,
    Icon,
    Photo,
    User,
    UserGreeting,
    UserInfo,
    UserName
} from './styles';
import { HighlightCard } from '../../components/HighlightCard';

export function Home() {
    return (
        <Container>
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
            <HighlightCards>
                <HighlightCard />
                <HighlightCard />
                <HighlightCard />
            </HighlightCards>

        </Container>
    );
}

