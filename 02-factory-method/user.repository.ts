// factory-method/user.repository.ts
export interface UserRepository {
  findById(id: string): Promise<string>;
}
