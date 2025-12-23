// 09-decorator/caching.decorator.ts
import { UserServiceDecorator } from "./user-service.decorator";

export class CachingDecorator extends UserServiceDecorator {
  private cache = new Map<string, string>();

  async getUser(id: string) {
    if (this.cache.has(id)) {
      return String(this.cache.get(id));
    }
    const user = await super.getUser(id);
    this.cache.set(id, user);
    return user;
  }
}
