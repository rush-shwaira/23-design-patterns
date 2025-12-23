// mongo/mongo-user.repository.ts
import { UserRepository } from "../repositories/user.repository";

export class MongoUserRepository implements UserRepository {
  async findById(id: string): Promise<string> {
    return `Mongo user ${id}`;
  }
}
