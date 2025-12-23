// factory-method/user.service.ts
import { UserRepositoryFactory } from "./user-repository.factory";

const repo = UserRepositoryFactory.create("mongo"); // Or get from env

export class UserService {
  async getUser(id: string) {
    return repo.findById(id);
  }
}
