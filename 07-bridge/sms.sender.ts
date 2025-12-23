// sms.sender.ts
import { Sender } from "./sender";

export class SMSSender implements Sender {
  async send(message: string) {
    console.log(`SMS sent: ${message}`);
  }
}
