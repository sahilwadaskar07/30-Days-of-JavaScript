/**
 2623. Memoize
Implement a function memoize that takes a function as an argument and returns a memoized function. The memoized function should cache the results of the function that was passed in and return the cached result when the same input occurs again.
 */

/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const cache = {};

    return function (...args) {
        const key = JSON.stringify(args);

        if (key in cache) {
            return cache[key];
        }

        const result = fn.apply(this, args);
        cache[key] = result;

        return result;
    };
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */