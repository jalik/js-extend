# Changelog

## v2.1.8
- Upgrades dependencies

## v2.1.7
- Upgrades dependencies

## v2.1.6
- Fixes merging of arrays by cloning them in the extended object
- Upgrades dependencies

## v2.1.5
- Upgrades dependencies

## v2.1.4
- Upgrades dependencies

## v2.1.3
- Upgrades dependencies

## v2.1.2
- Upgrades dependencies

## v2.1.0
- Lib available in ES6+ syntax (see `src` folder) to enable auto-completion in IDEs
- Upgrades dependencies

## v2.0.2
- Upgrades dependencies

## v2.0.1
- Fixes merging of arrays, so values are replaced instead of being concatened

## v2.0.0
- Adds support for merging arrays
- Fixes merging of objects when the first argument is `undefined`

**BREAKING CHANGES:**
- Exports method `extend()` using ES6 default export, it means that you must import the package with `import extend from '@jalik/extend'` instead of `import { extend } from '@jalik/extend'`
- Removes method `extendRecursively()`, because it has moved to its own package `@jalik/deep-extend`

## v1.0.3
- Upgrades devDependencies

## v1.0.2
- Upgrades devDependencies

## v1.0.1
- Fixes github repository

## v1.0.0
- First public release
