// 21-strategy/index.ts
import { CardPayment } from "./card.strategy";
import { PaymentService } from "./payment.service";
import { UpiPayment } from "./upi.strategy";

const payment = new PaymentService(new CardPayment());
payment.pay(500);

payment.setStrategy(new UpiPayment());
payment.pay(200);
