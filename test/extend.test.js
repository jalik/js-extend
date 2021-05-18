/*
 * The MIT License (MIT)
 * Copyright (c) 2021 Karl STEIN
 */

import extend from '../src/extend';

describe('extend(null, null)', () => {
  it('should return null', () => {
    expect(extend(null, null)).toEqual(null);
  });
});

describe('extend(undefined, undefined)', () => {
  it('should return undefined', () => {
    expect(extend(undefined, undefined)).toEqual(undefined);
  });
});

// Objects

describe('extend(null, object)', () => {
  it('should return an object', () => {
    const b = { a: 1 };
    expect(extend(null, b)).toEqual(b);
  });
});

describe('extend(undefined, object)', () => {
  it('should return an object', () => {
    const b = { a: 1 };
    expect(extend(undefined, b)).toEqual(b);
  });
});

describe('extend(object, null)', () => {
  it('should return an object', () => {
    const a = { a: 1 };
    expect(extend(a, null)).toEqual(a);
  });
});

describe('extend(object, undefined)', () => {
  it('should return an object', () => {
    const a = { a: 1 };
    expect(extend(a, undefined)).toEqual(a);
  });
});

describe('extend(object, object)', () => {
  it('should replace existing attributes', () => {
    const a = { a: 1 };
    const b = { a: 2 };
    expect(extend(a, b)).toEqual(b);
  });
});

describe('extend(object, object)', () => {
  it('should merge new attributes', () => {
    const a = { a: 1 };
    const b = { b: 2 };
    const r = { a: 1, b: 2 };
    expect(extend(a, b)).toEqual(r);
  });
});

describe('extend(object, object)', () => {
  it('should merge objects non recursively', () => {
    const a = { a: { b: 1, c: 3 }, d: 4 };
    const b = { a: { b: 2 } };
    const r = { a: { b: 2 }, d: 4 };
    expect(extend(a, b)).toEqual(r);
  });
});

describe('extend(object, object)', () => {
  it('should not modify input array', () => {
    const a = { array: null };
    const b = { array: [1, 2, 3] };
    expect(extend(a, b).array).not.toBe(b.array);
  });
});

// Arrays

describe('extend(array, array)', () => {
  it('should merge arrays by replacing index value', () => {
    const a = [0, 1];
    const b = [0, 2];
    expect(extend(a, b)).toStrictEqual(b);
  });
});

describe('extend(array, array)', () => {
  it('should ignore undefined values when merging arrays', () => {
    const a = [0, 1];
    const b = [0, undefined];
    const r = [0, 1];
    expect(extend(a, b)).toStrictEqual(r);
  });
});

describe('extend(array, array)', () => {
  it('should not ignore null values when merging arrays', () => {
    const a = [0, 1];
    const b = [0, null];
    const r = [0, null];
    expect(extend(a, b)).toStrictEqual(r);
  });
});

describe('extend(array, array)', () => {
  it('should merge arrays non recursively', () => {
    const a = [1, [2, [3]]];
    const b = [undefined, [4, [undefined, 5], 6], 7];
    const r = [1, [4, [undefined, 5], 6], 7];
    expect(extend(a, b)).toStrictEqual(r);
  });
});

describe('extend(any, array)', () => {
  it('should not modify input array', () => {
    const a = null;
    const b = [1, 2, 3];
    expect(extend(a, b)).not.toBe(b);
  });
});

// Arrays to Object

describe('extend(object, array)', () => {
  it('should merge array into object', () => {
    const a = {};
    const b = [1];
    const r = { 0: 1 };
    expect(extend(a, b)).toEqual(r);
  });
});

describe('extend({}, { __proto__: { polluted: "polluted" } })', () => {
  it('should not pollute prototype', () => {
    const a = {};
    const b = JSON.parse('{"__proto__": {"polluted": "polluted"}}');
    const result = extend(a, b);
    expect(result).toStrictEqual({});
    expect({}.polluted).toBeUndefined();
  });
});
