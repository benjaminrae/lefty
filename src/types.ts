import { type Direction } from './enums';

export interface Movable {
  move(): void;
}

export interface Turnable {
  turn(direction: Direction): void;
  getOrientation(): Direction;
}

export interface Renderable {
  render(): void;
}

export interface Drawable extends Collisionable {
  draw(): void;
}

export interface Collector {
  place(): void;
  pickUp(item: Collectable): void;
  checkCollectedItems(): number;
}

export interface Collectable extends Storable {
  pickUp(): void;
  place(coordinates: Coordinates): void;
}

export interface Storable {
  store(): void;
}

export interface Storage {
  store(item: Storable): void;
  withdraw(): Storable;
  checkItemsInStorage(): number;
}

export interface Sensors {
  frontIsClear(): boolean;
  leftIsClear(): boolean;
  rightIsClear(): boolean;
}

export interface Collisionable {
  getCoordinates(): Coordinates;
}

export interface Obstacle extends Collisionable {}

export type Coordinates = {
  x: number;
  y: number;
};

export interface Collection<T> {
  add(item: T): void;
  remove(item: T): void;
  getItems(): T[];
  count(): number;
}
