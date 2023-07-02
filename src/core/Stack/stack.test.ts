import { InvalidStackCapacityError } from './errors/invalid-stack-capacity-error';
import { StackOverflowError } from './errors/stack-overflow-error';
import { StackUnderflowError } from './errors/stack-underflow-error';
import { BaseStack } from './stack';

describe('Given a stack', () => {
  describe('When it is created', () => {
    test('Then it should be an object', () => {
      const stack = new BaseStack(10);

      expect(typeof stack).toBe('object');
    });

    test('Then it should be empty', () => {
      const stack = new BaseStack(10);

      expect(stack.isEmpty()).toBe(true);
    });
  });

  describe('When an element is added onto the stack', () => {
    test('Then it should not be empty', () => {
      const stack = new BaseStack(10);

      stack.push(1);

      expect(stack.isEmpty()).toBe(false);
    });

    test('Then it should have a size of 1', () => {
      const stack = new BaseStack(10);

      stack.push(1);

      expect(stack.size()).toBe(1);
    });

    test('Then the element at the top of the stack should be the element that was added', () => {
      const stack = new BaseStack(10);

      stack.push(1);

      expect(stack.peek()).toBe(1);
    });
  });

  describe('When the stack has 1 element and it is removed', () => {
    test('Then it should be empty', () => {
      const stack = new BaseStack(10);

      stack.push(1);
      stack.pop();

      expect(stack.isEmpty()).toBe(true);
    });
  });

  describe('When the stack is empty and an element is removed', () => {
    test('Then it should throw a stack underflow error', () => {
      const stack = new BaseStack(10);

      expect(() => stack.pop()).toThrowError(StackUnderflowError);
    });
  });

  describe('When the stack is full and an element is added', () => {
    test('Then it should throw a stack overflow error', () => {
      const stack = new BaseStack(1);

      stack.push(1);

      expect(() => {
        stack.push(2);
      }).toThrowError(StackOverflowError);
    });
  });

  describe('When it is created with a negative capactity', () => {
    test('Then it should throw an invalid capacity error', () => {
      expect(() => new BaseStack(-1)).toThrowError(InvalidStackCapacityError);
    });
  });

  describe('When an empty stack is peeked', () => {
    test('Then it should throw a stack underflow error', () => {
      const stack = new BaseStack(10);

      expect(() => stack.peek()).toThrowError(StackUnderflowError);
    });
  });
});
