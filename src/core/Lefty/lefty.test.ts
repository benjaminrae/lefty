import { Direction } from '../../enums';
import { type Coordinates } from '../../types';
import { Lefty, defaultLeftyConfig } from './lefty';

describe('Given Lefty', () => {
  describe('When it is created', () => {
    test('Then it should be an object', () => {
      expect(typeof new Lefty(defaultLeftyConfig)).toBe('object');
    });
  });

  describe('When it is created with coordinates (0, 0)', () => {
    test('Then it should have coordinates (0, 0)', () => {
      const initialCoordinates: Coordinates = { x: 0, y: 0 };
      const expectedCoordinates: Coordinates = { x: 0, y: 0 };

      expect(
        new Lefty({
          ...defaultLeftyConfig,
          coordinates: initialCoordinates,
        }).getCoordinates(),
      ).toStrictEqual(expectedCoordinates);
    });
  });

  describe("When it is created with coordinates (0, 0) and it's moved to the right", () => {
    test('Then it should have coordinates (1, 0)', () => {
      const initialCoordinates: Coordinates = { x: 0, y: 0 };
      const expectedCoordinates: Coordinates = { x: 1, y: 0 };

      const lefty = new Lefty({
        ...defaultLeftyConfig,
        coordinates: initialCoordinates,
      });

      lefty.move();

      expect(lefty.getCoordinates()).toStrictEqual(expectedCoordinates);
    });
  });

  describe("When it is created with coordinates (0, 0) and it's moved to the left", () => {
    test('Then it should have coordinates (-1, 0)', () => {
      const initialCoordinates: Coordinates = { x: 0, y: 0 };
      const expectedCoordinates: Coordinates = { x: -1, y: 0 };

      const lefty = new Lefty({
        ...defaultLeftyConfig,
        coordinates: initialCoordinates,
        direction: Direction.LEFT,
      });

      lefty.move();

      expect(lefty.getCoordinates()).toStrictEqual(expectedCoordinates);
    });
  });

  describe("When it is created with coordinates (0, 0) and it's moved up", () => {
    test('Then it should have coordinates (0, 1)', () => {
      const initialCoordinates: Coordinates = { x: 0, y: 0 };
      const expectedCoordinates: Coordinates = { x: 0, y: 1 };

      const lefty = new Lefty({
        ...defaultLeftyConfig,
        coordinates: initialCoordinates,
        direction: Direction.UP,
      });

      lefty.move();

      expect(lefty.getCoordinates()).toStrictEqual(expectedCoordinates);
    });
  });

  describe("When it is created with coordinates (0, 0) and it's moved down", () => {
    test('Then it should have coordinates (0, -1)', () => {
      const initialCoordinates: Coordinates = { x: 0, y: 0 };
      const expectedCoordinates: Coordinates = { x: 0, y: -1 };

      const lefty = new Lefty({
        ...defaultLeftyConfig,
        coordinates: initialCoordinates,
        direction: Direction.DOWN,
      });

      lefty.move();

      expect(lefty.getCoordinates()).toStrictEqual(expectedCoordinates);
    });
  });
});
