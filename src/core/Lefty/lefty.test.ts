import { MockCollectable } from '../../__mocks__/mock-collectable';
import { Direction } from '../../enums';
import { type Coordinates } from '../../types';
import { BaseStack } from '../Stack';
import { StorageModule } from '../StorageModule/storage-module';
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

  describe('When it picks up an item', () => {
    test("Then it should be stored in lefty's storage", () => {
      const lefty = new Lefty({
        ...defaultLeftyConfig,
        storage: new StorageModule(new BaseStack(5)),
      });

      lefty.pickUp(new MockCollectable());

      expect(lefty.checkCollectedItems()).toBe(1);
    });
  });

  describe('When it places an item', () => {
    test("Then it should be removed from lefty's storage", () => {
      const lefty = new Lefty({
        ...defaultLeftyConfig,
        storage: new StorageModule(new BaseStack(5)),
      });

      lefty.pickUp(new MockCollectable());
      lefty.place();

      expect(lefty.checkCollectedItems()).toBe(0);
    });
  });

  describe("When it is rotated -90 degrees from it's default direction", () => {
    test('Then it should be facing up', () => {
      const lefty = new Lefty({
        ...defaultLeftyConfig,
      });

      lefty.turn();

      expect(lefty.getOrientation()).toBe(Direction.UP);
    });
  });
});
