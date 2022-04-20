import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.TextInput`
    background-color: ${({ theme }) => theme.colors.cardView};;
    border-radius: 15px;
    color: ${({ theme }) => theme.colors.shape};
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(12)}px;

    padding: 12px 19px;
    margin-bottom: 12px;
`;