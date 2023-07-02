import { type Collection, type Drawable, type Renderable } from '../../types';

export class MissionMap implements Renderable {
  #mapObjects: Collection<Drawable>;

  constructor(mapObjectCollection: Collection<Drawable>) {
    this.#mapObjects = mapObjectCollection;
  }

  render(): void {
    throw new Error('Method not implemented.');
  }

  drawAll(): void {
    throw new Error('Method not implemented.');
  }
}
