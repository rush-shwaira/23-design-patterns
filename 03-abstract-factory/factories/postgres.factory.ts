// factories/postgres.factory.ts
import { PostgresOrderRepository } from "../postgres/postgres-order.repository copy";
import { PostgresUserRepository } from "../postgres/postgres-user.repository";
import { DatabaseFactory } from "./database.factory";

export class PostgresFactory implements DatabaseFactory {
  createUserRepository() {
    return new PostgresUserRepository();
  }
  createOrderRepository() {
    return new PostgresOrderRepository();
  }
}
