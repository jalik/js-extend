# Changelog

## v2.1.2
- Updates dependencies

## v2.1.0
- Lib available in ES6+ syntax (see `src` folder) to enable auto-completion in IDEs
- Updates dependencies

## v2.0.2
- Updates dependencies

## v2.0.1
- Fixes merging of arrays, so values are replaced instead of being concatened

## v2.0.0
- Adds support for merging arrays
- Fixes merging of objects when the first argument is `undefined`

**BREAKING CHANGES:**
- Exports method `extend()` using ES6 default export, it means that you must import the package with `import extend from '@jalik/extend'` instead of `import { extend } from '@jalik/extend'`
- Removes method `extendRecursively()`, because it has moved to its own package `@jalik/deep-extend`

## v1.0.3
- Updates devDependencies

## v1.0.2
- Updates devDependencies

## v1.0.1
- Fixed github repository

## v1.0.0
- First public release
