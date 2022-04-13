import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { Entypo, Ionicons } from '@expo/vector-icons';

export const Container = styled.View`
    background-color: ${(props) => props.theme.colors.cardView};
    width: 100%;
    height: ${RFValue(73)}px;
    border-radius: 30px;
    padding: 0 15px;
    margin-top: 23px;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Icon = styled(Ionicons)``;
export const Header = styled.View``;
export const Title = styled.Text``;
export const Category = styled.Text``;
export const Footer = styled.View``;
export const Amount = styled.Text``;
export const Date = styled.Text``;