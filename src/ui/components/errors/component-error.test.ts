import { ComponentError } from './component-error';

describe('Given a component error', () => {
  describe('When it is created', () => {
    test('Then it should be an object', () => {
      expect(typeof new ComponentError('')).toBe('object');
    });
  });

  describe('When it is thrown', () => {
    test('Then the stack strace should include ComponentError', () => {
      try {
        throw new ComponentError('');
      } catch (error) {
        expect((error as Error).stack).toContain('ComponentError');
      }
    });
  });
});
