// postgres/postgres-user.repository.ts
import { UserRepository } from "../repositories/user.repository";

export class PostgresUserRepository implements UserRepository {
  async findById(id: string): Promise<string> {
    return `Postgres user ${id}`;
  }
}
