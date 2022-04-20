import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';

import {
    Container,
    Header,
    Title,
    Form,
    TitleInput,
    Buttons,
    Fields
} from './styles';
import { Input } from '../../components/forms/Input';
import { Button } from '../../components/forms/Button';

export function Register() {
    return (
        <Container>
            <LinearGradient
                // Background Linear Gradient
                colors={['#61DD6D', '#ffffff']}
                style={styles.background}
            />
            <Header>
                <Title>CADASTRO</Title>
            </Header>

            <Form>
                <Fields>
                    <TitleInput>DESCRIÇÃO:</TitleInput>
                    <Input
                        placeholder='Digite uma descrição'
                    />
                    <TitleInput>VALOR:</TitleInput>
                    <Input
                        placeholder='Digite o valor'
                    />
                </Fields>


                <Buttons>
                    <Button title='Cancelar' />
                    <Button title='Enviar' />
                </Buttons>

            </Form>



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