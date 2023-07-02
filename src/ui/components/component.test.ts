import { type ComponentConfig } from '../types';
import { BaseComponent } from './component';

export class TestComponent extends BaseComponent {
  constructor({ parentElement, classNames, tagName }: ComponentConfig) {
    super({
      parentElement,
      classNames,
      tagName,
    });
  }

  addListeners(): void {
    throw new Error('Method not implemented.');
  }
}

describe('Given a BaseComponent', () => {
  let screen: HTMLElement;

  beforeEach(() => {
    screen = document.createElement('div');
  });

  describe('When it is created', () => {
    test('Then it should be an object', () => {
      expect(
        new TestComponent({
          parentElement: document.createElement('div'),
          classNames: ['test'],
          tagName: 'div',
        }),
      ).toBeInstanceOf(Object);
    });
  });

  describe('When it is rendered with a div tag', () => {
    test('Then it should render a div on the screen', () => {
      const tagName = 'div';
      const component = new TestComponent({
        parentElement: screen,
        tagName,
      });

      component.render();

      const renderedComponent = screen.querySelector(tagName);

      expect(renderedComponent).not.toBeNull();
      expect(component.getElement().tagName.toLowerCase()).toBe(tagName);
    });
  });

  describe("When it is rendered with class name 'test'", () => {
    test("Then it should render a div with class name 'test' on the screen", () => {
      const classNames = ['test'];
      const component = new TestComponent({
        parentElement: screen,
        classNames,
      });

      component.render();

      const renderedComponent = screen.querySelector(`.${classNames[0]}`);

      expect(renderedComponent).not.toBeNull();
      expect(renderedComponent?.tagName).toBe('DIV');
    });
  });

  describe('When it is rendered with a div tag and class name test and then the class name test is removed', () => {
    test("Then it should render a div without class name 'test' on the screen", () => {
      const classNames = ['test'];
      const component = new TestComponent({
        parentElement: screen,
        classNames,
      });

      component.render();
      component.removeClassNames(classNames);

      const renderedComponent = screen.querySelector(`.${classNames[0]}`);

      expect(renderedComponent).toBeNull();
    });
  });
});
