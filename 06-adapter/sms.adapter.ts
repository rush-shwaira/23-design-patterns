// sms.adapter.ts
import { NotificationService } from "./notification.service";
import { ThirdPartySMS } from "./third-party-sms";

export class SMSAdapter implements NotificationService {
  constructor(private smsService: ThirdPartySMS) {}
  async send(to: string, message: string): Promise<void> {
    this.smsService.sendSMS(to, message);
  }
}
