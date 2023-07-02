import { type Collection, type Drawable } from '../../types';

export class MapObjectCollection implements Collection<Drawable> {
  #items: Drawable[] = [];

  add(item: Drawable): void {
    this.#items.push(item);
  }

  remove(item: Drawable): void {
    this.#items = this.#items.filter(collectionItem => collectionItem !== item);
  }

  getItems(): Drawable[] {
    return this.#items;
  }

  count(): number {
    return this.#items.length;
  }
}
