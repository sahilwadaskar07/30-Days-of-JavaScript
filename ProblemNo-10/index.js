/**
    2666. Allow One Function Call

    Given a function, return a new function that allows the original function to be called only once.
 */

/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let calls = 0;
    
    return function(...args){
        calls++;
        if (calls > 1) return undefined;
        return fn(...args)
    }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
