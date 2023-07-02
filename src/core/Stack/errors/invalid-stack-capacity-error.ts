import { StackError } from './stack-error';

export class InvalidStackCapacityError extends StackError {
  constructor(capacity: number) {
    super(`Invalid stack capacity: ${capacity}`);
  }
}
