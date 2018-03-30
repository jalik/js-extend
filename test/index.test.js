/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2018 Karl STEIN
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import { extend, extendRecursively } from '../src';

describe('extend()', () => {
  it('extend(null, null) should return null', () => {
    expect(extend(null, null)).toEqual(null);
  });

  it('extend(null, {a: true}) should return an object', () => {
    expect(extend(null, { a: true })).toEqual({ a: true });
  });

  it('extend({a: true}, null) should return an object', () => {
    expect(extend({ a: true }, null)).toEqual({ a: true });
  });

  it('extend({a: true}, {a: false}) should merge objects', () => {
    expect(extend({ a: true }, { a: false })).toEqual({ a: false });
    expect(extend({ a: true }, { b: false })).toEqual({ a: true, b: false });
  });

  it('extend({a: true}, {b: {c: false}}) should merge objects non recursively', () => {
    const obj1 = { a: true, b: { d: 0 } };
    const obj2 = { b: { c: false } };
    expect(extend(obj1, obj2)).toEqual({ a: true, b: { c: false } });
  });
});

describe('extendRecursively()', () => {
  it('extendRecursively(null, null) should return null', () => {
    expect(extendRecursively(null, null)).toEqual(null);
  });

  it('extendRecursively(null, {a: true}) should return an object', () => {
    expect(extendRecursively(null, { a: true })).toEqual({ a: true });
  });

  it('extendRecursively({a: true}, null) should return an object', () => {
    expect(extendRecursively({ a: true }, null)).toEqual({ a: true });
  });

  it('extendRecursively({a: true}, {a: false}) should merge objects', () => {
    expect(extendRecursively({ a: true }, { a: false })).toEqual({ a: false });
    expect(extendRecursively({ a: true }, { b: false })).toEqual({ a: true, b: false });
  });

  it('extendRecursively({a: true}, {b: {c: false}}) should merge objects recursively', () => {
    expect(extendRecursively({ a: true, b: { d: 0 } }, { b: { c: false } })).toEqual({
      a: true,
      b: { d: 0, c: false },
    });
  });
});
