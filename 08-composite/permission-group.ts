// permission-group.ts
import { Permission } from "./permission";
export class PermissionGroup implements Permission {
  private permissions: Permission[] = [];
  add(permission: Permission) {
    this.permissions.push(permission);
  }
  hasAccess(): boolean {
    return this.permissions.every((p) => p.hasAccess());
  }
}
