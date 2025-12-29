// 16-iterator/user.collection.ts
import { Aggregate } from "./aggregate";
import { Iterator } from "./iterator";

export class UserCollection implements Aggregate<string> {
  private users: string[] = [];

  add(user: string) {
    this.users.push(user);
  }

  createIterator(): Iterator<string> {
    let index = 0;
    const users = this.users;

    return {
      hasNext(): boolean {
        return index < users.length;
      },

      next(): string | null {
        if (!this.hasNext()) return null;
        return users[index++];
      },
    };
  }
}
