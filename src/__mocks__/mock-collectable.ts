import { type Collectable, type Coordinates } from '../types';

export class MockCollectable implements Collectable {
  pickUp(): void {
    return undefined;
  }

  place(coordinates: Coordinates): void {
    return undefined;
  }

  store(): void {
    return undefined;
  }
}
