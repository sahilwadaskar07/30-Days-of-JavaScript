/**
    2703. Return Length of Arguments Passed
    Create a function that returns the length of arguments passed to it.
 */

    /**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function(...args) {
    return args.length;
    
};

/**
 * argumentsLength(1, 2, 3); // 3
 */