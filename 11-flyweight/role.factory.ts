// 11-flyweight/role.factory.ts
import { Role } from "./role";
export class RoleFactory {
  private static roles = new Map<string, Role>();

  static getRole(name: string): Role {
    if (!this.roles.has(name)) {
      const permissions =
        name === "ADMIN" ? ["READ", "WRITE", "DELETE"] : ["READ"];
      this.roles.set(name, new Role(name, permissions));
    }
    return this.roles.get(name)!;
  }
}
