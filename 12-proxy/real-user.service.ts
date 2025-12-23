// 12-proxy/real-user.service.ts
import { UserService } from "./user.service";

export class RealUserService implements UserService {
  async getUser(id: string): Promise<string> {
    console.log("Fetching from DB...");
    return `User ${id}`;
  }
}
