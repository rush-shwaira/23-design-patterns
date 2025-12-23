// index.ts
import { BasicPermission } from "./basic-permission";
import { PermissionGroup } from "./permission-group";

const read = new BasicPermission(true);
const write = new BasicPermission(true);
const deletePerm = new BasicPermission(false);

const adminPermissions = new PermissionGroup();
adminPermissions.add(read);
adminPermissions.add(write);
adminPermissions.add(deletePerm);

console.log(adminPermissions.hasAccess());
