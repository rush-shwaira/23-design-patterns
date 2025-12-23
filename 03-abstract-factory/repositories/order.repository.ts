// factory-method/order.repository.ts
export interface OrderRepository {
  findByUser(userId: string): Promise<string[]>;
}
