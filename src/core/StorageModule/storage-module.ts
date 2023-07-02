import { type Storable, type Storage } from '../../types';
import { type Stack } from '../Stack';

export class StorageModule implements Storage {
  #storage: Stack<Storable>;

  constructor(storage: Stack<Storable>) {
    this.#storage = storage;
  }

  store(item: Storable): void {
    this.#storage.push(item);
  }

  withdraw(): Storable {
    return this.#storage.pop();
  }

  checkItemsInStorage(): number {
    return this.#storage.size();
  }
}
