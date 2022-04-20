import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    align-items: center;
    background-color: ${({ theme }) => theme.colors.colorButton};
    border-radius: 30px;

    padding: 14px;
    width: ${RFValue(120)}px;
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.cardView};
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(18)}px;
`;