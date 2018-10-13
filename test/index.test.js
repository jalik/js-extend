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
  const a = null;
  const b = null;
  const result = null;
  expect(extend(a, b)).toEqual(result);
});

it('extend(null, {a: true}) should return an object', () => {
  const a = null;
  const b = { a: true };
  const result = { a: true };
  expect(extend(a, b)).toEqual(result);
});

it('extend(undefined, {a: true}) should return an object', () => {
  const a = undefined;
  const b = { a: true };
  const result = { a: true };
  expect(extend(a, b)).toEqual(result);
});

it('extend({a: true}, null) should return an object', () => {
  const a = { a: true };
  const b = null;
  const result = { a: true };
  expect(extend(a, b)).toEqual(result);
});

it('extend({ a: 0 }, undefined, { b: 1 }) should return { a: 0, b: 1 }', () => {
  const a = { a: 0 };
  const b = undefined;
  const c = { b: 1 };
  const result = { a: 0, b: 1 };
  expect(extend(a, b, c)).toEqual(result);
});

it('extend({a: true}, {a: false}) should merge objects', () => {
  const a = { a: true };
  const b = { a: false, b: true };
  const result = { a: false, b: true };
  expect(extend(a, b)).toEqual(result);
});

it('extend({a: true}, {b: {c: false}}) should merge objects non recursively', () => {
  const a = { a: true, b: { d: 0 } };
  const b = { b: { c: false } };
  const result = { a: true, b: { c: false } };
  expect(extend(a, b)).toEqual(result);
});

it('extend([0, 1], [undefined, 7]) should return [0, 7]', () => {
  const a = [0, 1];
  const b = [undefined, 7];
  const result = [0, 7];
  expect(extend(a, b)).toEqual(result);
});

it('extend([0, 1], [undefined, 7]) should return [0, 7]', () => {
  const a = [2, 4, null, 6];
  const b = [1, 3, 5, undefined];
  const result = [1, 3, 5, 6];
  expect(extend(a, b)).toEqual(result);
});

it('extend({}, [10, 20]) should return { 0: 10, 1: 20 }', () => {
  const a = {};
  const b = [10, 20];
  const result = { 0: 10, 1: 20 };
  expect(extend(a, b)).toEqual(result);
});

it('extend(null, [1], undefined, [2]) should return [2]', () => {
  const a = null;
  const b = [1];
  const c = undefined;
  const d = [2];
  const result = [2];
  expect(extend(a, b, c, d)).toEqual(result);
});

it('extend({ length: numbers.length }, [1, 3, 3, 7]) should return { length, ...numbers }', () => {
  const numbers = [1, 3, 3, 7];
  const a = { length: numbers.length };
  const b = [1, 3, 3, 7];
  const result = {
    length: numbers.length,
    0: 1,
    1: 3,
    2: 3,
    3: 7,
  };
  expect(extend(a, b)).toEqual(result);
});
