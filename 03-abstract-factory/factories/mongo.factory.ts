// factories/mongo.factory.ts
import { MongoUserRepository } from "../mongo/mongo-user.repository";
import { MongoOrderRepository } from "../mongo/mongo-order.repository";
import { OrderRepository } from "../repositories/order.repository";
import { UserRepository } from "../repositories/user.repository";
import { DatabaseFactory } from "./database.factory";

export class MongoFactory implements DatabaseFactory {
  createOrderRepository(): OrderRepository {
    return new MongoOrderRepository();
  }
  createUserRepository(): UserRepository {
    return new MongoUserRepository();
  }
}
