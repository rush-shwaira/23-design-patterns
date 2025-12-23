// 11-flyweight/role.ts
// Flyweight object - shared state
export class Role {
  constructor(
    public readonly name: string,
    public readonly permissions: string[]
  ) {}
}
