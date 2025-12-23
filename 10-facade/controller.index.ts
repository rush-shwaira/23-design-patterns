// controller.index.ts
import { OrderFacade } from "./order.facade";

const orderFacade = new OrderFacade();
orderFacade.placeOrder("abx", "1", 500, "mail@mail.com");
