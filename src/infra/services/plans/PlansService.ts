import { IPlansService, Response } from "../../../app/plans/IPlansService";
import { Plan } from "../../../models/Plan";
import { api } from "../../api";
import { PlanProduct } from "./PlanDTO";

function unMap(plans: PlanProduct[]) {
  return plans.map(({ plan }) => ({
    name: plan.namePlan,
    description: plan.planDescription,
    price: plan.price,
    type: plan.type,
  })) as Plan[]
}

export class PlansService implements IPlansService {
  async getPlans(): Promise<Response<Plan[]>> {
    try {
      const response = await api.get<PlanProduct[]>('admin/plan/list')

      return {
        data: unMap(response.data),
        error: null
      }
    } catch (error) {
      return {
        data: null,
        error
      }
    }
  }
}
