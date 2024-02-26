# @jalik/extend

![GitHub package.json version](https://img.shields.io/github/package-json/v/jalik/js-extend.svg)
![Build Status](https://github.com/jalik/js-extend/actions/workflows/node.js.yml/badge.svg)
![GitHub last commit](https://img.shields.io/github/last-commit/jalik/js-extend.svg)
[![GitHub issues](https://img.shields.io/github/issues/jalik/js-extend.svg)](https://github.com/jalik/js-extend/issues)
![GitHub](https://img.shields.io/github/license/jalik/js-extend.svg)
![npm](https://img.shields.io/npm/dt/@jalik/extend.svg)

A utility to merge flat objects.

**Warning:** 
*This library is doing a "flat merge", so if you need to merge deep objects, use the following library instead: [@jalik/deep-extend](https://www.npmjs.com/package/@jalik/deep-extend)*

## Introduction

Useful to merge several objects into one, for creating a configuration based on default parameters for example.

## Installing

```shell
npm i -P @jalik/extend
```
```shell
yarn add @jalik/extend
```

## Merging objects

In this example, all objects are merged into the first object, so the first object is modified, if you don't want to modify the object, pass en empty object `{}` as the first argument.

Note that objects are merged based on their order, so the 2nd object is merged in the first, then the 3rd is merged in the first, and so on...

```js
import extend from "@jalik/extend";

const coldColors = {
  blue: "#0000FF",
  cyan: "#00FFFF",
  green: "#00FF00"
};

const hotColors = {
  yellow: "#FFFF00",
  orange: "#FFAA00",
  red: "#FF0000"
};

const result = extend({}, coldColors, hotColors);
```

The result:

```json
{
  "blue": "#0000FF",
  "cyan": "#00FFFF",
  "green": "#00FF00",
  "yellow": "#FFFF00",
  "orange": "#FFAA00",
  "red": "#FF0000"
}
```

## Merging arrays

Several arrays can be merged easily. Note that `undefined` values are ignored when merging.

```js
import extend from "@jalik/extend";

const a = [0, 0, 0, 7];
const b = [0, 0, 3];
const c = [1, 3, undefined, undefined];

const result = extend([], a, b, c);
```

The result:

```json
[1, 3, 3, 7]
```

## Merging arrays into object

You can easily convert an array to an object with the extend method.

```js
import extend from "@jalik/extend";

const numbers = [1, 3, 3, 7];
const object = { length: numbers.length };

const result = extend({}, object, numbers);
```

The result:

```json
{
  "length": 4,
  "0": 1,
  "1": 3,
  "2": 3,
  "3": 7
}
```

## Changelog

History of releases is in the [changelog](./CHANGELOG.md).

## License

The code is released under the [MIT License](http://www.opensource.org/licenses/MIT).
