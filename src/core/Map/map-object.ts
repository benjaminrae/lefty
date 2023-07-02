import { type Coordinates, type Drawable } from '../../types';

export class MapObject implements Drawable {
  constructor(protected coordinates: Coordinates) {
    this.coordinates = coordinates;
  }

  draw(): void {
    throw new Error('Method not implemented.');
  }

  getCoordinates(): Coordinates {
    return this.coordinates;
  }
}
