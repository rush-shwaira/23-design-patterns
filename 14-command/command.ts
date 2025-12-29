// 14-command/command.ts
export interface Command {
  execute(): Promise<void>;
}
