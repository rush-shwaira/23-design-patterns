// 16-iterator/iterator.ts
export interface Iterator<T> {
  next(): T | null;
  hasNext(): boolean;
}
