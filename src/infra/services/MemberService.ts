import { IMemberService, Response } from "../../app/member/IMemberService";
import { api } from "../api";

export class MemberService implements IMemberService {
  async getMember(): Promise<Response> {
    try {
      const response = await api.get('member')

      return {
        data: response.data,
        error: null,
      }
    } catch (error) {
      return {
        data: null,
        error,
      }
    }
  }
}
