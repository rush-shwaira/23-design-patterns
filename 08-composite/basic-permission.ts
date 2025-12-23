// basic-permission.ts
// Leaf (single permission)
import { Permission } from "./permission";
export class BasicPermission implements Permission {
  constructor(private allowed: boolean) {}

  hasAccess(): boolean {
    return this.allowed;
  }
}
