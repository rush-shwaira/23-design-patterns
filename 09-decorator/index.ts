// 09-decorator/index.ts
import { BasicUserService } from "./basic-user.service";
import { CachingDecorator } from "./caching.decorator";
import { LoggingDecorator } from "./logging.decorator";
import { UserService } from "./user.service";

let service: UserService = new BasicUserService();
service = new LoggingDecorator(service);
service = new CachingDecorator(service);

await service.getUser("1");
await service.getUser("1"); // cached
