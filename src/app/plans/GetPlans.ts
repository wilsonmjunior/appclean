import { inject, injectable } from "tsyringe";

import { IPlansService } from "./IPlansService";

@injectable()
class GetPlans {
  constructor(
    @inject('PlansService') private plansService: IPlansService
  ) { }

  public async execute() {
    const plansResponse = await this.plansService.getPlans()

    return plansResponse
  }
}

export { GetPlans }
