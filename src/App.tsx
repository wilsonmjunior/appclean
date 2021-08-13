import React, { useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { QueryClient, QueryClientProvider } from 'react-query';

import './shared/container'

import { CreateModal } from './views/pages/CreateModal';

const queryClient = new QueryClient()

export default function App() {
  const [visible, setVisible] = useState(false)

  return (
    <QueryClientProvider client={queryClient}>
      <RectButton
        style={{ marginTop: 100, alignItems: 'center' }}
        onPress={() => setVisible(true)}
      >
        <Text>Abrir</Text>
      </RectButton>
      <CreateModal visible={visible} onClose={setVisible} />
    </QueryClientProvider>
  );
}
