// 18-memento/index.ts
import { User } from "./user";
import { History } from "./history";

const user = new User("Rushi", "r@x.com");
const history = new History();

history.push(user.save());

user.setName("New name");

user.restore(history.pop()!);
