import { OrderState } from "./order.state";

// 20-state/paid.state.ts
export class PaidState implements OrderState {
  pay(): void {
    throw new Error("Already paid");
  }
  ship(): void {
    console.log("Order shipped");
  }
}
