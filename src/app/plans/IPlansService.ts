import { Plan } from "../../models/Plan";
import { IResponse } from "../IResponse";

export type Response<T> = IResponse<T>

export interface IPlansService {
  getPlans(): Promise<Response<Plan[]>>
}
