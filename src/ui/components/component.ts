import { type Component, type ComponentConfig } from '../types';

export abstract class BaseComponent implements Component {
  #parentElement: HTMLElement;
  #domElement: HTMLElement;

  constructor({
    parentElement,
    classNames = [],
    tagName = 'div',
  }: ComponentConfig) {
    this.#parentElement = parentElement;
    this.#domElement = this.#createElement(tagName);
    this.addClassNames(classNames);
  }

  getElement(): HTMLElement {
    return this.#domElement;
  }

  removeClassNames(classNames: string[]): void {
    classNames.forEach(className => {
      this.#domElement.classList.remove(className);
    });
  }

  render(): void {
    this.#parentElement.appendChild(this.#domElement);
  }

  addClassNames(classNames: string[]): void {
    classNames.forEach(className => {
      this.#domElement.classList.add(className);
    });
  }

  abstract addListeners(): void;

  #createElement(tagName: string): HTMLElement {
    return document.createElement(tagName);
  }
}
