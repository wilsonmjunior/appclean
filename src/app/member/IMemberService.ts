import { Member } from "../../models/Member";
import { IResponse } from "../IResponse";

export type Response = IResponse<Member>

export interface IMemberService {
  getMember(): Promise<Response>
}
