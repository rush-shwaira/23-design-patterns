// 12-proxy/user-service.proxy.ts
import { RealUserService } from "./real-user.service";
import { UserService } from "./user.service";

export class UserServiceProxy implements UserService {
  private realService = new RealUserService();
  private cache = new Map<string, string>();

  async getUser(id: string): Promise<string> {
    if (this.cache.has(id)) {
      return this.cache.get(id)!;
    }
    const user = await this.realService.getUser(id);
    this.cache.set(id, user);
    return user;
  }
}
