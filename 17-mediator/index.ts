// 17-mediator/index.ts
import { OrderMediator } from "./order.mediator";
import { OrderService } from "./order.service";
import { PaymentService } from "./payment.service";

const mediator=new OrderMediator()
const orderService = new OrderService(mediator)
const paymentService = new PaymentService(mediator)

orderService.createOrder({})
paymentService.completePayment({})