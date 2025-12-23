// 13-chain-of-responsibility/validation.handler.ts
import { BaseHandler } from "./base-handler";

export class ValidationHandler extends BaseHandler {
  handle(request: any) {
    if (!request.body) {
      throw new Error("Invalid");
    }
    return super.handle(request);
  }
}
