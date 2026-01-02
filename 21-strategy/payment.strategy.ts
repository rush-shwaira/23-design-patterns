// 21-strategy/payment.strategy.ts
export interface PaymentStrategy {
  pay(amount: number): void;
}
