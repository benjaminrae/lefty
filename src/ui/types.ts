import { type Drawable, type Renderable } from '../types';

export interface RenderEngine {
  render(): void;

  drawElement(element: Drawable): void;
}

export interface Component extends Renderable {
  render(): void;
  addListeners(): void;
  addClassNames(classNames: string[]): void;
  removeClassNames(classNames: string[]): void;
  getElement(): HTMLElement;
}

export type ComponentConfig = {
  parentElement: HTMLElement;
  classNames?: string[];
  tagName?: string;
};
