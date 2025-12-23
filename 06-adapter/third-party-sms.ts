// third-party-sms.ts
export class ThirdPartySMS {
  sendSMS(phone: string, text: string): void {
    console.log(`Sending SMS to ${phone}: ${text}`);
  }
}
