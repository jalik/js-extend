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

import extend from '../src';

it('extend(null, null) should return null', () => {
  expect(extend(null, null)).toEqual(null);
});

it('extend(null, {a: true}) should return an object', () => {
  expect(extend(null, { a: true })).toEqual({ a: true });
});

it('extend(undefined, {a: true}) should return an object', () => {
  expect(extend(undefined, { a: true })).toEqual({ a: true });
});

it('extend({a: true}, null) should return an object', () => {
  expect(extend({ a: true }, null)).toEqual({ a: true });
});

it('extend({ a: 0 }, undefined, { b: 1 }) should return { a: 0, b: 1 }', () => {
  expect(extend({ a: 0 }, undefined, { b: 1 })).toEqual({ a: 0, b: 1 });
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

it('extend([0, 1], [6, 7]) should return [0, 1, 6, 7]', () => {
  expect(extend([0, 1], [6, 7])).toEqual([0, 1, 6, 7]);
});

it('extend({}, [10, 20]) should return { 0: 10, 1: 20 }', () => {
  expect(extend({}, [10, 20])).toEqual({ 0: 10, 1: 20 });
});

it('extend(null, [1], undefined, [2]) should return [1, 2]', () => {
  expect(extend(null, [1], undefined, [2])).toEqual([1, 2]);
});

it('extend(null, [1], undefined, [2]) should return [1, 2]', () => {
  const numbers = [1, 3, 3, 7];
  expect(extend({ length: numbers.length }, numbers)).toEqual({
    length: numbers.length,
    0: 1,
    1: 3,
    2: 3,
    3: 7,
  });
});
