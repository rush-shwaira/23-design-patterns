// index.ts
import { EmailSender } from "./email.sender";
import { NormalNotification } from "./normal.notification";
import { SMSSender } from "./sms.sender";
import { UrgentNotification } from "./urgent.notification";

const emailSender = new EmailSender();
const smsSender = new SMSSender();

const urgentEmail = new UrgentNotification(emailSender);
const normalSms = new NormalNotification(smsSender);

await urgentEmail.notify("Server down");
await normalSms.notify("Welcome!");
await emailSender.send("Normal mail");
await smsSender.send("Normal message");
