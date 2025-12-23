// sender.ts
export interface Sender {
  send(message: string): Promise<void>;
}
