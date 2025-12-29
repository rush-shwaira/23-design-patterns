// 16-iterator/index.ts
import { UserCollection } from "./user.collection";

const users = new UserCollection();
users.add("Rushi");
users.add("Alex");

const iterator = users.createIterator();

while (iterator.hasNext()) {
  console.log(iterator.next());
}
