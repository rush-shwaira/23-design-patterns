// 19-observer/email.observer.ts
import { Observer } from "./observer";

export class EmailObserver implements Observer {
  update(order: any): void {
    console.log("Send email for order", order.id);
  }
}
