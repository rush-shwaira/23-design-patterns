// index.ts
import { UserBuilder } from "./user.builder";

const user = new UserBuilder()
  .setId("1")
  .setName("John Doe")
  .setEmail("r@x.com")
  .setActive(true)
  .build();
console.log(user);
