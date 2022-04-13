import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';
import { Entypo, Ionicons } from '@expo/vector-icons';

interface TypeProps {
    type: 'inCount' | 'income' | 'expense';
}

export const Container = styled.View`
    background-color: ${(props) => props.theme.colors.cardView};
    width: ${RFValue(134)}px;
    height: ${RFValue(92)}px;
    border-radius: 10px;

    flex: 0;

    padding: 0 1px;
    padding-bottom: ${RFValue(27)}px;

    margin-right: 14px;
    margin-top: 19px;
`;

export const Header = styled.View`
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(10)}px;
    color: ${(props) => props.theme.colors.title};
`;

export const Icon = styled(Entypo) <TypeProps>`
    font-size: ${RFValue(20)}px;
    color: ${(props) => props.theme.colors.title};
`;

export const IconArrows = styled(Ionicons) <TypeProps>`
    
    font-size: ${RFValue(18)}px;
    margin-right: 5px;
    color: ${({ theme, type }) => type === 'income' ? theme.colors.income : theme.colors.expense};

`;

export const Footer = styled.View`
    justify-content: center;
    align-items: center;
    padding-top: 13px;
`;

export const Amount = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(24)}px;
    color: ${(props) => props.theme.colors.shape};
`;

