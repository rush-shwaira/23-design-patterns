// 09-decorator/basic-user.service.ts
import { UserService } from "./user.service";
export class BasicUserService implements UserService {
  async getUser(id: string) {
    return `User: ${id}`;
  }
}
