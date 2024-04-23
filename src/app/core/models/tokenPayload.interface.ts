import { JwtPayload } from "jwt-decode";

export interface tokenPayload extends JwtPayload {
  role: string;
  permissions: [];
}
