import { mockCoordinates } from '../../__mocks__';
import { Rock } from './rock';

describe('Given a rock', () => {
  describe('When it is created', () => {
    test('Then it should be an object', () => {
      expect(
        typeof new Rock({
          coordinates: mockCoordinates,
          isPlaced: false,
          isStored: false,
        }),
      ).toBe('object');
    });
  });

  describe('When it is created with coordinates', () => {
    test('Then it should have the received coordinates', () => {
      const rock = new Rock({
        coordinates: { x: 0, y: 0 },
        isPlaced: false,
        isStored: false,
      });

      expect(rock.getCoordinates()).toStrictEqual({
        x: 0,
        y: 0,
      });
    });
  });

  describe('When it is placed', () => {
    test('Then it should be placed in the given coordinates', () => {
      const rock = new Rock({
        coordinates: { x: 0, y: 0 },
        isPlaced: false,
        isStored: false,
      });
      const coordinates = { x: 1, y: 1 };

      rock.place(coordinates);

      expect(rock.getCoordinates()).toStrictEqual(coordinates);
    });
  });
});
