// 11-flyweight/index.ts
import { User } from "./user";

const u1 = new User("1", "ADMIN");
const u2 = new User("2", "ADMIN");

console.log(u1.getRole() === u2.getRole());
