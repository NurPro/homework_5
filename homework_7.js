
// task 7.1     +

const testData = function(data) {
    return Array.isArray(data);
}

console.log(testData("hello"));    // false

// task 7.2    +

const cloneArray = function(arr1) {
    const newArr = [...arr1];
    return newArr
}

let arr1 = [1,2,3];
let arr2 = cloneArray(arr1);
arr2[0] = 5

console.log(arr1, arr2);