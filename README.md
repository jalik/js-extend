# js-extend

A utility to merge objects.

## Introduction

Useful when you need to merge two or more objects into one.

**This library is tested with unit tests.**

## Merging objects

In this example, all objects are merged into the first object, so the first object is modified, if you don't want to modify the object, pass en empty object `{}` as the first argument.

Note that objects are merged based on their order, so the 2nd object is merged in the first, then the 3rd is merged in the first, and so on...
Keep in mind that first objects may be overridden by following objects.

```js
import {extend} from "@jalik/extend";

const coldColors = {
    blue: "#0000FF",
    green: "#00FF00"
};

const hotColors = {
    red: "#FF0000",
    yellow: "#FFF000"
};

const customColors = {
    cyan: "#5BF8FF",
    pink: "#FF4CFB"
};

// Merge all colors in a new object
const mixedColors = extend({}, hotColors, coldColors, customColors);
```

## Merging objects recursively

In the previous example, all objects were flat, but it works also with deep objects and nested attributes.

```js
import {extendRecursively} from "@jalik/extend";

const colorSet1 = {
    cold: {
        blue: "#0000FF",
        green: "#00FF00"
    },
    hot: {
        red: "#FF0000",
        yellow: "#FFF000"
    },
    custom: {
      cyan: "#5BF8FF",
      pink: "#FF4CFB"
    }
};

const colorSet2 = {
    cold: {
        blue: "#0011AA",
        green: "#00AA11"
    },
    hot: {
        red: "#AA0011",
        yellow: "#AAA111"
    }
};

// Merge all colors in a new object
const mixedColors = extendRecursively({}, colorSet1, colorSet2);
```

## Changelog

### v1.0.1
- Fixed github repository

### v1.0.0
- First public release

## License

The code is released under the [MIT License](http://www.opensource.org/licenses/MIT).
