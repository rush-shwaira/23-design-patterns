// 12-proxy/index.ts
import { UserServiceProxy } from "./user-service.proxy";
import { UserService } from "./user.service";
const userService: UserService = new UserServiceProxy();

await userService.getUser("1"); // DB hit
await userService.getUser("1"); // cache hit
