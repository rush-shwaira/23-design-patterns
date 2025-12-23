// factory-method/user-repository.factory.ts
import { UserRepository } from "./user.repository";
import { MongoUserRepository } from "./mongo-user.repository";
import { PostgresUserRepository } from "./postgres-user.repository";

export class UserRepositoryFactory {
  static create(type: "mongo" | "postgres"): UserRepository {
    switch (type) {
      case "mongo":
        return new MongoUserRepository();
      case "postgres":
        return new PostgresUserRepository();
      default:
        throw new Error("Unsupported repository type");
    }
  }
}
