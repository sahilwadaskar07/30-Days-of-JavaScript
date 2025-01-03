/**
    2626. Array Reduce Transformation

    Given an integer array nums, a function fn, and an initial value init, apply the function fn to each element in the array and return the final value.
 
 */

/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    var res = init;
    for (var i=0; i<nums.length; i++){
        res = fn(res , nums[i])
    }
    return res;
};