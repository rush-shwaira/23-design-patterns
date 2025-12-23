// mongo/mongo-order.repository.ts
import { OrderRepository } from "../repositories/order.repository";

export class MongoOrderRepository implements OrderRepository {
  async findByUser(userId: string): Promise<string[]> {
    return [`Mongo order for user ${userId}`];
  }
}
