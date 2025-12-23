// email.sender.ts
import { Sender } from "./sender";

export class EmailSender implements Sender {
  async send(message: string) {
    console.log(`Email sent: ${message}`);
  }
}
