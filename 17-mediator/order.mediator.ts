// 17-mediator/order.mediator.ts
import { Mediator } from "./mediator";

export class OrderMediator implements Mediator {
  notify(sender: string, data: any): void {
    if (sender === "OrderService") {
      console.log("Trigger payment and notification");
    }

    if (sender === "PaymentService") {
      console.log("Confirm order");
    }
  }
}
