import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { Entypo, Ionicons } from '@expo/vector-icons';

interface TransactionProps {
    type: 'income' | 'expense';
}

export const Container = styled.View`
    background-color: ${(props) => props.theme.colors.cardView};
    width: 100%;
    height: ${RFValue(73)}px;
    border-radius: 30px;
    padding: 0 15px;
    margin-top: 12px;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Icon = styled(Ionicons) <TransactionProps>`
    color: ${({ theme, type }) =>
        type === 'income' ? theme.colors.income : theme.colors.expense};
    font-size: ${RFValue(18)}px;
`;

export const Header = styled.View`
    justify-content: center;
    text-align: center;
    width: ${RFValue(180)}px;
    
    border-right-width: 0.5px;
    border-left-width: 0.5px;
    padding: 0 10px;
`;

export const Title = styled.Text`
    font-size: ${RFValue(12)}px;
    color: ${({ theme }) => theme.colors.shape};
    font-family: ${({ theme }) => theme.fonts.regular};
    text-align: center;
`;

export const Category = styled.Text`
    font-size: ${RFValue(10)}px;
    color: ${({ theme }) => theme.colors.shape};
    font-family: ${({ theme }) => theme.fonts.regular};
    text-align: center;
`;

export const Footer = styled.View``;

export const Amount = styled.Text<TransactionProps>`
    font-size: ${RFValue(12)}px;
    color: ${({ theme, type }) =>
        type === 'income' ? theme.colors.income : theme.colors.expense};
    font-family: ${({ theme }) => theme.fonts.regular};
    text-align: center;
`;

export const Date = styled.Text`
    font-size: ${RFValue(10)}px;
    color: ${({ theme }) => theme.colors.shape};
    font-family: ${({ theme }) => theme.fonts.regular};
    text-align: center;
`;