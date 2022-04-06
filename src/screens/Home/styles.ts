import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { SimpleLineIcons } from '@expo/vector-icons';


export const Container = styled.View`
    flex: 1;
    background-color: ${(props) => props.theme.colors.primary};
`;

export const Header = styled.View`
    width: 100%;
    height: ${RFPercentage(15)}px;
    background-color: ${({ theme }) => theme.colors.background};
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const ContentWrapper = styled.View`
    width: 100%;
    padding: 0 20px;
    flex-direction: row;

    align-items: center;
    justify-content: space-between;
`;

export const UserInfo = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Photo = styled.Image`
    width: ${RFValue(40)}px;
    height: ${RFValue(40)}px;
    border-radius: 50px;
`;

export const User = styled.View`
    flex-direction: row;
    margin-left: ${RFValue(5)}px;
`;

export const UserGreeting = styled.Text`
    color: ${({ theme }) => theme.colors.title};
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(18)}px
`;

export const UserName = styled.Text`
    color: ${({ theme }) => theme.colors.title};
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(18)}px
`;

export const ExitInfo = styled.View`
    flex-direction: row;
    align-items: center;
`

export const Icon = styled(SimpleLineIcons)`
    color: ${({ theme }) => theme.colors.title};
    font-size: ${RFValue(18)}px;
    margin-right: 5px;
`;

export const Exit = styled.Text`
    color: ${({ theme }) => theme.colors.title};
    font-size: ${RFValue(18)}px;    
`

export const HighlightCards = styled.ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: { paddingLeft: 23 }
})`` 