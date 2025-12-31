// 17-mediator/order.service.ts
import { Mediator } from "./mediator";

export class OrderService {
  constructor(private mediator: Mediator) {}

  createOrder(data: any) {
    console.log("Order created");
    this.mediator.notify("OrderService", data);
  }
}
