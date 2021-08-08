import { User } from "../../models/User";
import { IResponse } from "../IResponse";

export type Response = IResponse<User>

export interface IUserService {
  create(user: User): Promise<Response>
  delete(id: number): Promise<Response>
}
