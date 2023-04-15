# Changelog

## v2.2.1 (2023-04-14)

- Added missing dev dependency (rimraf)

## v2.2.0 (2023-04-14)

- Added TypeScript declaration files

## v2.1.13

- Upgraded dependencies

## v2.1.12

- Fixed potential prototype pollution while merging
- Upgraded dependencies

## v2.1.11

- Upgraded dependencies

## v2.1.10

- Added `esnext` and `sideEffects` in package.json
- Renamed extend.js to index.js
- Upgraded dependencies

## v2.1.9 (deprecated)

**This version has been published by error, and deprecated just after.**

## v2.1.8

- Upgraded dependencies

## v2.1.7

- Upgraded dependencies

## v2.1.6

- Fixes merging of arrays by cloning them in the extended object
- Upgraded dependencies

## v2.1.5

- Upgraded dependencies

## v2.1.4

- Upgraded dependencies

## v2.1.3

- Upgraded dependencies

## v2.1.2

- Upgraded dependencies

## v2.1.0

- Lib available in ES6+ syntax (see `src` folder) to enable auto-completion in IDEs
- Upgraded dependencies

## v2.0.2

- Upgraded dependencies

## v2.0.1

- Fixes merging of arrays, so values are replaced instead of being concatened

## v2.0.0

- Adds support for merging arrays
- Fixes merging of objects when the first argument is `undefined`

**BREAKING CHANGES:**

- Exports method `extend()` using ES6 default export, it means that you must import the package
  with `import extend from '@jalik/extend'` instead of `import { extend } from '@jalik/extend'`
- Removes method `extendRecursively()`, because it has moved to its own package `@jalik/deep-extend`

## v1.0.3

- Upgraded devDependencies

## v1.0.2

- Upgraded devDependencies

## v1.0.1

- Fixes github repository

## v1.0.0

- First public release
