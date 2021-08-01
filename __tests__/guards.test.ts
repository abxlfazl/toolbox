import { isFunction, isIterable, isString } from '../src/guards';

describe('guards', () => {
  describe('isString', () => {
    it('should return false for undefined', () => {
      expect(isString(undefined)).toBe(false);
    });

    it('should return false for null', () => {
      expect(isString(null)).toBe(false);
    });

    it('should return false for number', () => {
      expect(isString(1)).toBe(false);
    });

    it('should return false for array', () => {
      expect(isString(['1'])).toBe(false);
    });

    it('should return true for string', () => {
      expect(isString('1')).toBe(true);
    });
  });

  describe('isIterable', () => {
    it('should return false for undefined', () => {
      expect(isIterable(undefined)).toBe(false);
    });

    it('should return true for array', () => {
      expect(isIterable([])).toBe(true);
    });

    it('should return true for Map', () => {
      expect(isIterable(new Map())).toBe(true);
    });

    it('should return true for user-defined iterables', () => {
      expect(
        isIterable({
          *[Symbol.iterator]() {
            yield 'foo';
          },
        }),
      ).toBe(true);
    });

    it('should return true for string', () => {
      expect(isIterable('some')).toBe(true);
    });

    it('should return false for object', () => {
      expect(isIterable({})).toBe(false);
    });
  });

  describe('isFunction', () => {
    it('should return false for undefined', () => {
      expect(isFunction(undefined)).toBe(false);
    });

    it('should return false for boolean', () => {
      expect(isFunction(true)).toBe(false);
    });

    it('should return false for string', () => {
      expect(isFunction('string')).toBe(false);
    });

    it('should return true for function', () => {
      expect(isFunction(() => 1)).toBe(true);
    });
  });
});