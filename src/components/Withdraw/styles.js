import styled from 'styled-components/native';

export const Container = styled.View`
    background: #1C1C1C;
    height: 100px;
    margin: 15px 15px 0;
    padding: 0 16px;
    border-radius: 8px;
    padding: 15px;
`;

export const CardHeader = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const BankIcon = styled.View`
    align-items: center;
    justify-content: center;
    border: 1px #fff solid;
    border-radius: 25px;
    width: 50px;
    height: 50px;
    padding-left: 3px;
    padding-bottom: 3px;
`;

export const Description = styled.Text`
    color: #fff;
    margin-bottom: 5px;
`;

export const Bold = styled.Text`
    font-weight: bold;
`;

export const CardBody = styled.View`
    margin-left: 10px;
`;

export const Body = styled.Text`
    color: rgba(255, 255, 255, 0.5);
    margin-bottom: 5px;
`;

export const Footer = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Value = styled.Text`
    color: #f75175;
    font-weight: bold;
`;

export const Divider = styled.View`
    width: 2px;
    height: 13px;
    background: rgba(255, 255, 255, 0.4);
    margin: 0 10px;
`;

export const Date = styled.Text`
    color: rgba(255, 255, 255, 0.5);
    margin-left: 5px;
`;
