export interface Movable {
  move(): void;
  turnLeft(): void;
}

export interface Renderable extends Collisionable {
  render(): void;
}

export interface Collector extends Storage {
  place(): void;
  pickUp(): void;
}

export interface Storage {
  store(): void;
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

export type Coordinates = {
  x: number;
  y: number;
};
