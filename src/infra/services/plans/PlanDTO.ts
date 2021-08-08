export type PlanDTO = {
  namePlan: string
  planDescription: string
  price: number
  type: string
}

export type PlanProduct = {
  plan: PlanDTO
}
