// 09-decorator/user-service.decorator.ts
import { UserService } from "./user.service";
export abstract class UserServiceDecorator implements UserService {
  constructor(protected wrapped: UserService) {}

  getUser(id: string): Promise<string> {
    return this.wrapped.getUser(id);
  }
}
