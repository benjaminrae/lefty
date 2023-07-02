export interface Movable {
  move(): void;
}

export interface Turnable {
  turnLeft(): void;
}

export interface Renderable extends Collisionable {
  render(): void;
}

export interface Collector extends Storage {
  place(item: Collectable): void;
  pickUp(item: Collectable): void;
}

export interface Collectable extends Storable {
  pickUp(): void;
  place(): void;
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
