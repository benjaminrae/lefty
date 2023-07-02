import { MockDrawableCollection } from '../../__mocks__/drawable-collection.mock';
import { MissionMap } from './mission-map';

describe('Given a map', () => {
  describe('When it is created', () => {
    test('Then it should be an object', () => {
      expect(typeof new MissionMap(new MockDrawableCollection())).toBe(
        'object',
      );
    });
  });
});
