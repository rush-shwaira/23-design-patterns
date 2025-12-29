// 16-iterator/aggregate.ts
import { Iterator } from "./iterator";
export interface Aggregate<T> {
  createIterator(): Iterator<T>;
}
