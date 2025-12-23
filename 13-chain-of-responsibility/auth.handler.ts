// 13-chain-of-responsibility/auth.handler.ts
import { BaseHandler } from "./base-handler";

export class AuthHandler extends BaseHandler {
  handle(request: any) {
    if (!request.token) {
      throw new Error("Unauthorized");
    }
    return super.handle(request);
  }
}
