// notification.ts
import { Sender } from "./sender";

export abstract class Notification {
  constructor(protected sender: Sender) {}

  abstract notify(message: string): Promise<void>;
}
