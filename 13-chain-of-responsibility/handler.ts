// 13-chain-of-responsibility/handler.ts
export interface Handler {
  setNext(handler: Handler): Handler;
  handle(request: any): any;
}
