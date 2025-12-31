// 20-state/created.state.ts
import { OrderState } from "./order.state";
export class CreatedState implements OrderState {
  pay(): void {
    console.log("PAyment accepted");
  }

  ship(): void {
    throw new Error("Cannot ship unpaid order");
  }
}
