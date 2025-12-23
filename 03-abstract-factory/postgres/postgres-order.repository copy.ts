// postgres/postgres-order.repository.ts
import { OrderRepository } from "../repositories/order.repository";

export class PostgresOrderRepository implements OrderRepository {
  async findByUser(userId: string): Promise<string[]> {
    return [`Postgres order for user ${userId}`];
  }
}
