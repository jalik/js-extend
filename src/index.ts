/*
 * The MIT License (MIT)
 * Copyright (c) 2021 Karl STEIN
 */

/**
 * Merges two arrays and returns the new one.
 * @param a
 * @param b
 */
function mergeArrays<A, B>(a: A[], b: B[]): Array<A | B> {
  const result = [];

  for (let i = 0; i < a.length; i += 1) {
    if (typeof a !== 'undefined') {
      result[i] = a[i];
    }
  }

  for (let i = 0; i < b.length; i += 1) {
    if (typeof b[i] !== 'undefined') {
      result[i] = b[i];
    }
  }
  return result;
}

/**
 * Merge flat objects.
 * @param args
 */
export function extend(...args: any[]): any {
  let a = args.shift();

  for (let i = 0; i < args.length; i += 1) {
    const b = args[i];

    if (a !== null && b !== null && typeof a !== 'undefined' && typeof b !== 'undefined') {
      // Merge objects
      if (typeof a === 'object' && typeof b === 'object') {
        // Merge arrays
        if (a instanceof Array && b instanceof Array) {
          a = mergeArrays(a, b);
        } else {
          const keys: string[] = Object.keys(b);

          for (let j = 0; j < keys.length; j += 1) {
            const key: string = keys[j];

            // Avoid prototype pollution.
            if (key !== '__proto__') {
              // Ignore undefined value.
              if (typeof b[key] !== 'undefined') {
                if (b[key] instanceof Array) {
                  a[key] = mergeArrays([], b[key]);
                } else {
                  a[key] = b[key];
                }
              }
            }
          }
        }
      }
    } else if (b !== null && typeof b !== 'undefined') {
      if (b instanceof Array) {
        a = mergeArrays([], b);
      } else {
        a = b;
      }
    }
  }
  return a;
}

export default extend;
