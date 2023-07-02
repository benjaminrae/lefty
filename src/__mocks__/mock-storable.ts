import { type Storable } from '../types';

export class MockStorable implements Storable {
  store(): void {
    return undefined;
  }
}
