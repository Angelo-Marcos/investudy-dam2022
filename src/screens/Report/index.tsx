import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';

import {
    Container,
    Header,
    Title,
} from './styles';

export function Report() {
    return (
        <Container>
            <LinearGradient
                // Background Linear Gradient
                colors={['#61DD6D', '#ffffff']}
                style={styles.background}
            />
            <Header>
                <Title>RESUMO POR CATEGORIA</Title>
            </Header>
        </Container>
    )
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