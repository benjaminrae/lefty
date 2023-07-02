export interface Movable {
  move(): void;
}

export interface Turnable {
  turnLeft(): void;
}

export interface Renderable extends Collisionable {
  render(): void;
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
