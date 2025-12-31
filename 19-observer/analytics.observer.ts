// 19-observer/analytics.observer.ts
import { Observer } from "./observer";
export class AnalyticsObserver implements Observer {
  update(order: any): void {
    console.log("Track analytics", order.id);
  }
}
