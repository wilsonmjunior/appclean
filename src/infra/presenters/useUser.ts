import { Alert } from 'react-native';
import { container } from 'tsyringe'

import { CreateUser } from "../../app/user/CreateUser"
import { User } from '../../models/User';

export function useUser() {
  async function create(user: User) {
    const createUser = container.resolve(CreateUser)

    const { data, error } = await createUser.execute(user)
    if (!error) {
      Alert.alert("Criado com sucesso", JSON.stringify(data))
    } else {
      Alert.alert("Erro ao criar usuário")
    }
  }

  return {
    create
  }
}
