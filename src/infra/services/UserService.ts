import { User } from "../../models/User";
import { IUserService, Response } from "../../app/user/IUserService";
import { api } from "../api";

export class UserService implements IUserService {
  async create(user: User): Promise<Response> {
    try {
      // await api.post('user', user)
      // throw new Error("erro")
      return {
        data: user,
        error: null
      }
    } catch (error) {
      return {
        data: null,
        error
      }
    }
  }

  async delete(id: number): Promise<Response> {
    try {
      const response = await api.get(`user/${id}`)

      return {
        data: response.data,
        error: null,
      }
    } catch (error) {
      return {
        data: null,
        error
      }
    }
  }
}
