import { type Direction } from '../../enums';
import { type Coordinates, type Storage } from '../../types';

export type LeftyConfig = {
  coordinates: Coordinates;
  direction: Direction;
  storage: Storage;
};
