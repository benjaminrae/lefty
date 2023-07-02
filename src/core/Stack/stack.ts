import { InvalidStackCapacityError } from './errors/invalid-stack-capacity-error';
import { StackOverflowError } from './errors/stack-overflow-error';
import { StackUnderflowError } from './errors/stack-underflow-error';
import { type Stack } from './types';

export class BaseStack<T> implements Stack<T> {
  private readonly elements: T[] = [];

  constructor(protected capacity: number) {
    if (capacity < 0) {
      throw new InvalidStackCapacityError(capacity);
    }
  }

  push(value: T): void {
    if (this.size() === this.capacity) {
      throw new StackOverflowError('Cannot push onto full stack');
    }

    this.elements.push(value);
  }

  pop(): T {
    if (this.isEmpty()) {
      throw new StackUnderflowError('Cannot pop empty stack');
    }

    return this.elements.pop() as T;
  }

  peek(): T {
    if (this.isEmpty()) {
      throw new StackUnderflowError('Cannot peek empty stack');
    }

    return this.elements[this.elements.length - 1];
  }

  isEmpty(): boolean {
    return this.elements.length === 0;
  }

  size(): number {
    return this.elements.length;
  }
}
