// 13-chain-of-responsibility/base-handler.ts
import { Handler } from "./handler";
export abstract class BaseHandler implements Handler {
  private next?: Handler;

  setNext(handler: Handler): Handler {
    this.next = handler;
    return handler;
  }
  handle(request: any): any {
    if (this.next) {
      return this.next.handle(request);
    }
    return request;
  }
}
