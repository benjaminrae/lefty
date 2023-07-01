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
});
