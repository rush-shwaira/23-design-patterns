// bootstrap.ts
import { MongoFactory } from "./factories/mongo.factory";

const dbFactory = new MongoFactory();

export const userRepo = dbFactory.createUserRepository();
export const orderRepo = dbFactory.createOrderRepository();
