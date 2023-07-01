import { Direction } from '../../enums';
import {
  type Collisionable,
  type Coordinates,
  type Movable,
} from '../../types';
import { type LeftyConfig } from './types';

export const defaultLeftyConfig: LeftyConfig = {
  coordinates: { x: 0, y: 0 },
  direction: Direction.RIGHT,
};

export class Lefty implements Movable, Collisionable {
  #coordinates: Coordinates;
  #direction: Direction;
  #movementMap = new Map<Direction, () => void>();

  constructor({ coordinates, direction }: LeftyConfig) {
    this.#coordinates = coordinates;
    this.#direction = direction;
    this.#generateMovementMap();
  }

  getCoordinates(): Coordinates {
    return this.#coordinates;
  }

  move() {
    this.#movementMap.get(this.#direction)?.call(this);
  }

  #generateMovementMap() {
    this.#movementMap.set(Direction.RIGHT, this.#moveRight);
    this.#movementMap.set(Direction.LEFT, this.#moveLeft);
    this.#movementMap.set(Direction.UP, this.#moveUp);
    this.#movementMap.set(Direction.DOWN, this.#moveDown);
  }

  #moveRight() {
    this.#coordinates.x++;
  }

  #moveLeft() {
    this.#coordinates.x--;
  }

  #moveUp() {
    this.#coordinates.y++;
  }

  #moveDown() {
    this.#coordinates.y--;
  }
}
