import { type Coordinates, type Drawable } from '../types';

export class MockDrawable implements Drawable {
  getCoordinates(): Coordinates {
    throw new Error('Method not implemented.');
  }

  draw(): void {
    return undefined;
  }
}
