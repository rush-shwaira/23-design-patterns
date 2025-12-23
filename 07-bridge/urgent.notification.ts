// urgent.notification.ts
import { Notification } from "./notification";
export class UrgentNotification extends Notification {
  async notify(message: string): Promise<void> {
    await this.sender.send(`URGENT: ${message}`);
  }
}
