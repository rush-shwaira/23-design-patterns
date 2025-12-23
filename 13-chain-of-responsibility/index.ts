// 13-chain-of-responsibility/index.ts
import { AuthHandler } from "./auth.handler";
import { ValidationHandler } from "./validation.handler";

const auth = new AuthHandler();
const validate = new ValidationHandler();

auth.setNext(validate);

auth.handle({ token: "abc", body: {} });
