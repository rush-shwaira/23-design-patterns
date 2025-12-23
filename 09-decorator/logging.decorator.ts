// 09-decorator/logging.decorator.ts
import { UserServiceDecorator } from "./user-service.decorator";
export class LoggingDecorator extends UserServiceDecorator {
  async getUser(id: string) {
    console.log(`Fetching user ${id}`);
    return super.getUser(id);
  }
}
