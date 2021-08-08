import React from 'react';
import { Text, View } from 'react-native';
import { QueryClient, QueryClientProvider } from 'react-query';

import './shared/container'

import { CreateUser } from './views/pages/CreateUser';

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Clean Architecture</Text>
        <CreateUser />
      </View>
    </QueryClientProvider>
  );
}
