export type Stack<T> = {
  push(value: T): void;
  pop(): T;
  peek(): T;
  isEmpty(): boolean;
  size(): number;
};
