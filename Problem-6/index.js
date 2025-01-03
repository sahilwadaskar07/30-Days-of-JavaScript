/**
     2634. Filter Elements from Array
    
    Given an integer array arr and a filtering function fn, return a filtered array filteredArr.
 */

    /**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    var newArray = [];
    for(var i=0; i<arr.length; i++){
        if(fn(arr[i],i)){ 
            newArray.push(arr[i])
        }
    }
    return newArray;
};

