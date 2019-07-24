# @jalik/extend
![GitHub package.json version](https://img.shields.io/github/package-json/v/jalik/js-extend.svg)
[![Build Status](https://travis-ci.com/jalik/js-extend.svg?branch=master)](https://travis-ci.com/jalik/js-extend)
![GitHub](https://img.shields.io/github/license/jalik/js-extend.svg)
![GitHub last commit](https://img.shields.io/github/last-commit/jalik/js-extend.svg)
[![GitHub issues](https://img.shields.io/github/issues/jalik/js-extend.svg)](https://github.com/jalik/js-extend/issues)
![npm](https://img.shields.io/npm/dt/@jalik/extend.svg)

A utility to merge flat objects.

**Warning:** 
*This library is doing a "flat merge", so if you need to merge deep objects, use the following library instead: [@jalik/deep-extend](https://www.npmjs.com/package/@jalik/deep-extend)*

## Introduction

Useful to merge several objects into one, for creating a configuration based on default parameters for example.

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

// Merge all colors to create a rainbow
const rainbow = extend({}, coldColors, hotColors);
```

## Merging arrays

Of course you can use the new Javascript syntax `Array.concat(...arrays)`, but the extend method works in a way that `null` and `undefined` are ignored, which can be useful sometimes.

```js
import extend from "@jalik/extend";

const a = [2, 4, null, 6];
const b = [1, 3, 5, undefined];
const c = extend([], a, b);

// c would result to [1, 3, 5, 6]
```

## Merging arrays into object

You can easily convert an array to an object with the extend method.

```js
import extend from "@jalik/extend";

const numbers = [1, 3, 3, 7];
const Numbers = extend({length: numbers.length}, numbers);

// Numbers would result to:
// {
//   length: 4, 
//   0: 1,
//   1: 3, 
//   2: 3, 
//   3: 7 
// }
```

## Changelog

History of releases is in the [changelog](./CHANGELOG.md).

## License

The code is released under the [MIT License](http://www.opensource.org/licenses/MIT).
