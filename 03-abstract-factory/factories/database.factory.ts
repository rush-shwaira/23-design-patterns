// factories/database.factory.ts
import { OrderRepository } from "../repositories/order.repository";
import { UserRepository } from "../repositories/user.repository";

export interface DatabaseFactory {
  createUserRepository(): UserRepository;
  createOrderRepository(): OrderRepository;
}
