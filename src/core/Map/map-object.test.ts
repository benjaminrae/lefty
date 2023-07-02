import { mockCoordinates } from '../../__mocks__/coordinates.mock';
import { MapObject } from './map-object';

describe('Given a map object', () => {
  describe('When it is created', () => {
    test('Then it should be an object', () => {
      expect(typeof new MapObject(mockCoordinates)).toBe('object');
    });
  });

  describe('When it is created with coordinates', () => {
    test('Then it should have the received coordinates', () => {
      const mapObject = new MapObject({ x: 0, y: 0 });

      expect(mapObject.getCoordinates()).toStrictEqual({ x: 0, y: 0 });
    });
  });
});
