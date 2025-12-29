// 14-command/index.ts
import { CreateUserCommand } from "./create-user.command";
import { DeleteUserCommand } from "./delete-user.command";
import { UserService } from "./user.service";

const userService = new UserService();

const createCmd = new CreateUserCommand(userService, { name: "Rushi" });
const deleteCmd = new DeleteUserCommand(userService, "1");
