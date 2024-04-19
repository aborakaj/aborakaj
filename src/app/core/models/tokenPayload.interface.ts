import { JwtPayload } from "jwt-decode";

export interface tokenPayload extends JwtPayload {
  [key: string]: any;
}
