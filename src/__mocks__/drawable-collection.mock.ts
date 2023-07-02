import { type Collection, type Drawable } from '../types';

export class MockDrawableCollection implements Collection<Drawable> {
  add(item: Drawable): void {
    throw new Error('Method not implemented.');
  }

  remove(item: Drawable): void {
    throw new Error('Method not implemented.');
  }

  getItems(): Drawable[] {
    throw new Error('Method not implemented.');
  }

  count(): number {
    throw new Error('Method not implemented.');
  }
}
