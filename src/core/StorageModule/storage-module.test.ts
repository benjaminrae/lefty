import { type Storable } from '../../types';
import { BaseStack, type Stack } from '../Stack';
import { StorageModule } from './storage-module';

describe('Given StorageModule', () => {
  let storage: Stack<Storable>;

  beforeEach(() => {
    storage = new BaseStack<Storable>(10);
  });

  describe('When it is created', () => {
    test('Then it should be an object', () => {
      expect(typeof new StorageModule(storage)).toBe('object');
    });

    test('Then it should have no items in storage', () => {
      expect(new StorageModule(storage).checkItemsInStorage()).toBe(0);
    });
  });

  describe('When it is created and an item is stored', () => {
    test('Then it should have one item in storage', () => {
      const storageModule = new StorageModule(storage);
      const storable: Storable = {
        store() {
          return 'stored';
        },
      };

      storageModule.store(storable);

      expect(storageModule.checkItemsInStorage()).toBe(1);
    });
  });

  describe('When an item is withdrawn', () => {
    test('Then it should return the last item stored', () => {
      const storageModule = new StorageModule(storage);
      const storable: Storable = {
        store() {
          return 'stored';
        },
      };

      storageModule.store(storable);

      expect(storageModule.withdraw()).toBe(storable);
    });
  });
});
