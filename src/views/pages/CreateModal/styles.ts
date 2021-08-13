import styled from 'styled-components/native';

export const BackgroundModal = styled.View`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 99;

  background-color: rgba(255,255,255,0.35);
`;

export const Container = styled.View`
  flex: 1;
  margin-top: 50px;
  background-color: #fff;

  elevation: 30;
  box-shadow: -4px 0px 30px rgba(0,0,0,0.3);
`

export const Title = styled.Text`
  font-size: 40px;
`

export const ButtonWrapper = styled.View`
  flex: 1;
  justify-content: flex-end;
  margin-bottom: 50px;
`

export const ButtonTitle = styled.Text`
  text-align: center;
  font-size: 20px;
`
