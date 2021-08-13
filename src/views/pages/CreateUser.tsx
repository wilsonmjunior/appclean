import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

import { User } from '../../models/User'
import { useUser } from '../../infra/presenters/useUser'
import { usePlans } from '../../infra/presenters/usePlans'

export function CreateUser() {
  const { create } = useUser()
  const { plans } = usePlans()

  function handleCreate() {
    const user: User = {
      name: "John Doe",
      document: "1234567890",
      email: "john@mail.com",
    }

    create(user)
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <TouchableOpacity
        onPress={handleCreate}
        style={{
          height: 50,
          backgroundColor: 'red',
          justifyContent: 'center',
          padding: 10,
          borderRadius: 10,
          marginTop: 10,
        }}
      >
        <Text style={{ color: 'white' }}>Create User</Text>
      </TouchableOpacity>
    </View>
  )
}
