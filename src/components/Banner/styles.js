import styled from 'styled-components/native';

export const Container = styled.View`
    background: #6882BB;
    margin: 25px 16px;
    border-radius: 8px;
    height: 150px;
    flex-direction: row;
    padding: 15px;
    align-items: center;
`;

export const Details = styled.View`
    flex: 1;
`;

export const Img = styled.Image``;

export const Title = styled.Text`
    color: #fff;
    font-size: 18px;
    font-weight: bold;
`;

export const Description = styled.Text`
    color: rgba(255, 255, 255, 0.7);
    font-size: 14px;
    margin-top: 15px;
    `;

export const ComoPagar = styled.TouchableOpacity``;

export const Link = styled.Text`
    text-decoration: underline;
    font-weight: bold;
    color: #fff;
    margin-top: 10px;
`;
