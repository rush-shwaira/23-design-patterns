// index.ts
import { NotificationService } from "./notification.service";
import { SMSAdapter } from "./sms.adapter";
import { ThirdPartySMS } from "./third-party-sms";

const smsService = new ThirdPartySMS();
const notifier: NotificationService = new SMSAdapter(smsService);

await notifier.send("999999999", "Hello");
