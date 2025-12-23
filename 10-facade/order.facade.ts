// order.facade.ts

import { AuthService } from "./auth.service";
import { EmailService } from "./email.service";
import { PaymentService } from "./payment.service";

export class OrderFacade {
  private authService = new AuthService();
  private paymentService = new PaymentService();
  private emailService = new EmailService();

  placeOrder(token: string, userId: string, amount: number, email: string) {
    if (!this.authService.verify(token)) {
      throw new Error("Unauthorized");
    }
    this.paymentService.charge(userId, amount);
    this.emailService.send(email, "Order placed successfully");
  }
}
