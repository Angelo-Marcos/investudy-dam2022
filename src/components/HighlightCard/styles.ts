import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { Entypo } from '@expo/vector-icons';


export const Container = styled.View`
    background-color: ${(props) => props.theme.colors.cardView};
    width: ${RFValue(134)}px;
    height: ${RFValue(92)}px;
    border-radius: 10px;

    padding: 0 1px;
    padding-bottom: ${RFValue(27)}px;

    margin-right: 14px;
    margin-top: 70px;
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

export const Icon = styled(Entypo)`
    font-size: ${RFValue(20)}px;
    color: ${(props) => props.theme.colors.title};
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

