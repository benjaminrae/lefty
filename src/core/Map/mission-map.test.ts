import { MissionMap } from './mission-map';

describe('Given a map', () => {
  describe('When it is created', () => {
    test('Then it should be an object', () => {
      expect(typeof new MissionMap()).toBe('object');
    });
  });
});
