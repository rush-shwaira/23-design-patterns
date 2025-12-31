// 19-observer/index.ts
import { OrderService } from "./order.service";
import { EmailObserver } from "./email.observer";
import { AnalyticsObserver } from "./analytics.observer";
const orderService = new OrderService();

orderService.subscribe(new EmailObserver());
orderService.subscribe(new AnalyticsObserver());

orderService.createOrder({ id: 1 });
