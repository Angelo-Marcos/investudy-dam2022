import styled from "styled-components/native";
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    flex: 1;
`;

export const Header = styled.View`
    width: 100%;
    height: ${RFPercentage(15)}px;
    background-color: ${({ theme }) => theme.colors.background};
    align-items: center;
    justify-content: flex-end;
    padding-bottom: 20px;
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.title};
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(18)}px
`;
