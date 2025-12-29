// 14-command/create-user.command.ts
import { Command } from "./command";
import { UserService } from "./user.service";

export class CreateUserCommand implements Command {
  constructor(private userService: UserService, private data: any) {}
  async execute(): Promise<void> {
    await this.userService.createUser(this.data);
  }
}
