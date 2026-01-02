// 21-strategy/payment.service.ts
import { PaymentStrategy } from "./payment.strategy";
export class PaymentService {
  constructor(private strategy: PaymentStrategy) {}

  setStrategy(strategy: PaymentStrategy) {
    this.strategy = strategy;
  }
  pay(amount: number) {
    this.strategy.pay(amount);
  }
}
