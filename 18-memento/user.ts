// 18-memento/user.ts
import { UserMemento } from "./user.memento";

export class User {
  constructor(private name: string, private email: string) {}
  setName(name: string) {
    this.name = name;
  }
  save(): UserMemento {
    return new UserMemento(this.name, this.email);
  }
  restore(memento: UserMemento) {
    this.name = memento.name;
    this.email = memento.email;
  }
}
