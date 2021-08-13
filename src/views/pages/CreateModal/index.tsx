import React from 'react';
import { TouchableOpacity } from 'react-native';

import { BackgroundModal, ButtonTitle, ButtonWrapper, Container, Title } from './styles';


interface ModalProps {
  visible: boolean
  onClose: (value: boolean) => void
}

export function CreateModal({ visible, onClose }: ModalProps) {
  return (
    visible && (
      <BackgroundModal>
        <Container>
          <Title>Modal Teste</Title>

          <ButtonWrapper>
            <TouchableOpacity onPress={() => onClose(false)}>
              <ButtonTitle>Fechar</ButtonTitle>
            </TouchableOpacity>
          </ButtonWrapper>
        </Container>
      </BackgroundModal>
    )
  );
};
