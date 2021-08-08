import { container } from "tsyringe";
import { useEffect, useState } from "react";

import { GetPlans } from "../../app/plans/GetPlans";
import { Plan } from "../../models/Plan";

export function usePlans() {
  const [isLoading, setIsLoading] = useState(false)
  const [plans, setPlans] = useState<Plan[]>([])

  useEffect(() => {
    async function load() {
      const getPlans = container.resolve(GetPlans)
      const response = await getPlans.execute()
      console.warn('boco', response);
    }
    load()
  }, [])

  return {
    plans
  }
}
