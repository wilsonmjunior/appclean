import { inject, injectable } from "tsyringe"

import { IMemberService } from "./IMemberService"

@injectable()
class GetMember {
  constructor(
    @inject('MemberService') private memberService: IMemberService
  ) { }

  public async execute() {
    const memberService = await this.memberService.getMember()

    return memberService
  }
}

export { GetMember }
