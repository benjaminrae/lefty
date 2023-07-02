import { MockDrawable } from '../../__mocks__';
import { MapObjectCollection } from './map-object-collection';

describe('Given a map object collection', () => {
  describe('When it is created', () => {
    test('Then it should be an object', () => {
      expect(typeof new MapObjectCollection()).toBe('object');
    });
  });

  describe('When an item is added to an empty collection', () => {
    test('Then it should contain that item', () => {
      const mapObjectCollection = new MapObjectCollection();
      const item = new MockDrawable();

      mapObjectCollection.add(item);

      expect(mapObjectCollection.getItems()).toContain(item);
    });

    test('And then the count should be 1', () => {
      const mapObjectCollection = new MapObjectCollection();
      const item = new MockDrawable();

      mapObjectCollection.add(item);

      expect(mapObjectCollection.count()).toBe(1);
    });
  });

  describe('When an item is added and then removed from a collection', () => {
    test('Then it should not contain that item', () => {
      const mapObjectCollection = new MapObjectCollection();
      const item = new MockDrawable();

      mapObjectCollection.add(item);
      mapObjectCollection.remove(item);

      expect(mapObjectCollection.getItems()).not.toContain(item);
    });

    test('And then the count should be 0', () => {
      const mapObjectCollection = new MapObjectCollection();
      const item = new MockDrawable();

      mapObjectCollection.add(item);
      mapObjectCollection.remove(item);

      expect(mapObjectCollection.count()).toBe(0);
    });
  });
});
