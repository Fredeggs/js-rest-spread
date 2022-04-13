const filterOutOdds = (...nums) => nums.filter((num)=> num % 2 === 0);

const findMin = (...nums) => nums.reduce((min, num) => num < min ? min = num : min);

const mergeObjects = (obj1, obj2) => {
    return {...obj1, ...obj2}
};

const doubleAndReturnArgs = (numArr, ...nums) => {
    return [...numArr, ...nums.map(num => num*2)];
}

/** remove a random element in the items array
and return a new array without that item. */

const removeRandom = (items) => {
    randomNum = Math.floor(Math.random() * items.length)
    return [...(items.slice(0, randomNum)), ...(items.slice(randomNum + 1))];
}

/** Return a new array with every item in array1 and array2. */
const arr1 = [12,3];
const arr2 = [4,5];

const extend = (array1, array2) => [...array1, ...array2];

/** Return a new object with all the keys and values
from obj and a new key/value pair */
const anObj = {
    name: 'bob',
    age: 23
}
const addKeyVal = (obj, key, val) => {
    return {...obj, [key] : val};
}


/** Return a new object with a key removed. */

const removeKey = (obj, key) => {
    let newObj = {...obj};
    delete newObj[key];
    return newObj;
}


/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => {
    return {...obj1, ...obj2};
}


/** Return a new object with a modified key and value. */

const update = (obj, key, val) => {
    return {...obj, [key]: val}; 
}