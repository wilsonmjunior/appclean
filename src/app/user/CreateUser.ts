import { inject, injectable } from "tsyringe";

import { User } from "../../models/User";
import { IUserService } from "./IUserService";

@injectable()
class CreateUser {
  constructor(
    @inject('UserService') private userService: IUserService,
  ) { }

  public async execute(user: User) {
    const createResponse = await this.userService.create(user)

    return createResponse
  }
}

export { CreateUser }
