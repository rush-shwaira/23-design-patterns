// 20-state/order.ts
import { OrderState } from "./order.state";
import { CreatedState } from "./created.state";

export class Order {
  private state: OrderState = new CreatedState();

  setState(state: OrderState) {
    this.state = state;
  }

  pay() {
    this.state.pay();
    this.setState(new CreatedState());
  }
  ship() {
    this.state.ship();
  }
}
