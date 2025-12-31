// 19-observer/order.service.ts
import { Observer } from "./observer";
import { Subject } from "./subject";

export class OrderService implements Subject {
  private observers: Observer[] = [];

  subscribe(observer: Observer): void {
    this.observers.push(observer);
  }

  unsubscribe(observer: Observer): void {
    this.observers = this.observers.filter((o) => o !== observer);
  }

  notify(data: any) {
    this.observers.forEach((o) => o.update(data));
  }

  createOrder(order: any) {
    console.log("Order created");
    this.notify(order);
  }
}
