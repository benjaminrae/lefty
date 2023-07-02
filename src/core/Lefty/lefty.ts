import { Direction } from '../../enums';
import {
  type Collectable,
  type Collector,
  type Collisionable,
  type Coordinates,
  type Movable,
  type Storage,
} from '../../types';
import { BaseStack } from '../Stack';
import { StorageModule } from '../StorageModule/storage-module';
import { type LeftyConfig } from './types';

export const defaultLeftyConfig: LeftyConfig = {
  coordinates: { x: 0, y: 0 },
  direction: Direction.RIGHT,
  storage: new StorageModule(new BaseStack(5)),
};

export class Lefty implements Collector, Movable, Collisionable {
  #coordinates: Coordinates;
  #direction: Direction;
  #storage: Storage;
  #movementMap = new Map<Direction, () => void>();

  constructor({ coordinates, direction, storage }: LeftyConfig) {
    this.#coordinates = coordinates;
    this.#direction = direction;
    this.#storage = storage;
    this.#generateMovementMap();
  }

  place(): void {
    const item = this.#storage.withdraw();
    (item as Collectable).place(this.#coordinates);
  }

  pickUp(item: Collectable): void {
    item.pickUp();
    item.store();
    this.#storage.store(item);
  }

  checkCollectedItems(): number {
    return this.#storage.checkItemsInStorage();
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
