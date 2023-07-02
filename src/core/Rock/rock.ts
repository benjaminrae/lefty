import { type Collectable, type Coordinates } from '../../types';
import { MapObject } from '../Map';
import { type RockConfig } from './types';

export class Rock extends MapObject implements Collectable {
  #isPlaced: boolean;
  #isStored: boolean;

  constructor({ coordinates, isPlaced, isStored }: RockConfig) {
    super(coordinates);
    this.#isPlaced = isPlaced;
    this.#isStored = isStored;
  }

  pickUp(): void {
    if (this.#isStored) {
      return;
    }

    if (!this.#isPlaced) {
      return;
    }

    this.#isPlaced = false;
  }

  place(coordinates: Coordinates): void {
    if (this.#isPlaced) {
      return;
    }

    this.#isStored = false;
    this.#isPlaced = true;
    this.coordinates = coordinates;
  }

  store(): void {
    if (this.#isStored) {
      return;
    }

    this.#isStored = true;
  }
}
