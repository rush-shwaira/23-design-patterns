// 14-command/delete-user.command.ts
import { Command } from "./command";
import { UserService } from "./user.service";

export class DeleteUserCommand implements Command {
  constructor(private userService: UserService, private userId: string) {}
  async execute(): Promise<void> {
    await this.userService.deleteUser(this.userId);
  }
}
