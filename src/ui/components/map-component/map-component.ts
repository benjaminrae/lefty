import { type Renderable } from '../../../types.js';
import { BaseComponent } from '../component.js';
import { ComponentError } from '../errors/component-error.js';

export class MapComponent extends BaseComponent {
  #context: CanvasRenderingContext2D;
  #map: Renderable;
  #canvas: HTMLCanvasElement;

  constructor(parentElement: HTMLElement, map: Renderable) {
    super({ parentElement, classNames: ['mission-map'], tagName: 'canvas' });
    this.#map = map;
    this.#canvas = this.getElement() as HTMLCanvasElement;
    const context = this.#canvas.getContext('2d');

    if (context === null) {
      throw new ComponentError('Canvas element not found');
    }

    this.#context = context;
  }

  addListeners(): void {
    throw new Error('Method not implemented.');
  }

  #drawMapObjects(): void {
    this.#map.render();
  }
}
