// normal.notification.ts
import { Notification } from "./notification";
export class NormalNotification extends Notification {
  async notify(message: string) {
    await this.sender.send(message);
  }
}
