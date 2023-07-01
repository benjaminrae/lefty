import { Direction } from '../../enums';
import { type Collisionable, type Coordinates } from '../../types';
import { type LeftyConfig } from './types';

export const defaultLeftyConfig: LeftyConfig = {
  coordinates: { x: 0, y: 0 },
  direction: Direction.RIGHT,
};

export class Lefty implements Collisionable {
  #coordinates: Coordinates;

  constructor({ coordinates }: LeftyConfig) {
    this.#coordinates = coordinates;
  }

  getCoordinates(): Coordinates {
    return this.#coordinates;
  }
}
