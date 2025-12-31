// 17-mediator/mediator.ts
export interface Mediator {
  notify(sender: string, data: any): void;
}
