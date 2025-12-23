// 11-flyweight/user.ts
import { RoleFactory } from "./role.factory";
export class User {
  constructor(public id: string, public roleName: string) {}
  getRole() {
    return RoleFactory.getRole(this.roleName);
  }
}
