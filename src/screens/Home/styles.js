import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
    background: ${props => props.theme.background};
    flex: 1;
`;

export const Container = styled.ScrollView``;

export const Header = styled.View`
    height: 50px;
    padding: 0 16px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const QRButton = styled.TouchableOpacity``;

export const BalanceContainer = styled.View``;

export const GiftButton = styled.TouchableOpacity``;

export const BalanceTitle = styled.Text`
    color: rgba(255, 255, 255, 0.8);
    font-size: 14px;
    text-align: center;
`;

export const Balance = styled.Text`
    color: ${props => props.theme.color};
    font-size: 20px;
    text-align: center;
    font-weight: bold;
`;
