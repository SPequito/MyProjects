/**
 * Determine the location of an item in the array
 */
exports.indexOf = function(arr, item) {
};

/**
 * Sum the items of an array
 */
exports.sum = function(arr) {
};

/**
 * Remove all instances of an item from an array
 */
exports.remove = function(arr, item) {
};

/**
 * Remove all instances of an item from an array by mutating original array
 */
exports.removeWithoutCopy = function(arr, item) {
 
    let i = 0
    while (i < arr.length) {
        if (arr[i] === item) {
            arr.splice(i, 1)
        } else {
            ++i
        }
    }
    return arr


};

/**
 * Add an item to the end of the array
 */
exports.append = function(arr, item) {
};

/**
 * Remove the last item of an array
 */
exports.truncate = function(arr) {
};

/**
 * Add an item to the beginning of an array
 */
exports.prepend = function(arr, item) {
};

/**
 * Remove the first item of an array
 */
exports.curtail = function(arr) {
};

/**
 * Join two arrays together
 */
exports.concat = function(arr1, arr2) {
};

/**
 * Add an item to an array in the specified position
 */
exports.insert = function(arr, item, index) {
};

/**
 * Count the number of occurrences of an item in an array
 */
exports.count = function(arr, item) {
    
    let counter = 0;
   
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] == item) {
            counter++;
        }
       
    }
    return counter;
};

/**
 * Find all items which container multiple occurrences in the array
 */
exports.duplicates = function(arr) {
   
    const seen = new Set();
    
    const duplicates = arr.filter(n => seen.size === seen.add(n).size);
    
    return duplicates;

};
   


/**
 * Square each number in the array
 */
exports.square = function(arr) {

    let n = arr.length;
 
   
    for (let i = 0; i < n; i++)
        arr[i] = arr[i] * arr[i];

        return arr;


};

/**
 * Find all occurrences of an item in an array
 */
exports.findAllOccurrences = function(arr, target) {
   const stuff = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
          stuff.push(i);
        }
      }
return stuff;
};
