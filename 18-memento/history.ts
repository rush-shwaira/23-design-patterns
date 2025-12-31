// 18-memento/history.ts
import { UserMemento } from "./user.memento";

export class History {
  private states: UserMemento[] = [];

  push(memento: UserMemento) {
    this.states.push(memento);
  }
  pop(): UserMemento | undefined {
    return this.states.pop();
  }
}
