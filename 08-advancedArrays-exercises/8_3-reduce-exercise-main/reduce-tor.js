/*
Write a function called extractValue which accepts an array of objects and a key and returns a new array with the value of each object at the key.

Examples:
    const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]
    extractValue(arr,'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

function extractValue(arr, key) {
    const firstObj = arr[0];
    const returnArray = [firstObj[key]];
    arr.reduce((accumObj, nextObj)=>{
        returnArray.push(nextObj[key]);
    });
    return returnArray;
}

/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/

function vowelCount(str) {
    const arr = str.split('');
    const returnObj = {};
    const vowels = 'aeiou';
    const firstLtr = arr[0];
    if (vowels.includes(firstLtr)) {
        returnObj[firstLtr] = 1;
    }
    arr.reduce((accLtr, nextLtr)=>{
        if (vowels.includes(nextLtr)) {
            (returnObj[nextLtr] > 0) ? returnObj[nextLtr] ++ : returnObj[nextLtr] = 1;
        }
    })
    return returnObj;
}

/*
Write a function called addKeyAndValue which accepts an array of objects and returns the array of objects passed to it with each object now including the key and value passed to the function.

Examples:
    const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];
    
    addKeyAndValue(arr, 'title', 'Instructor') // 
      [
        {title: 'Instructor', name: 'Elie'}, 
        {title: 'Instructor', name: 'Tim'}, 
        {title: 'Instructor', name: 'Matt'}, 
        {title: 'Instructor', name: 'Colt'}
       ]
*/

// take 1:
// function addKeyAndValue(arr, key, value) {
//     let firstObj = arr[0];
//     firstObj[key]=value;
//     return arr.reduce((accObj, nxtOjb) => {
//         return nxtOjb[key] = value;
//     });
// }

// take 2:
// function addKeyAndValue(arr, key, value) {
    // const addedObj = {};
    // addedObj[key] = value;
    // const firstObj = arr[0];
    // const accArr = [addedObj];
    // const returnArr = []
    // // for (let firstKey in firstObj) {
    // //     returnArr = [firstObj]
    // // }
    // return arr.reduce((accArr, nxtObj) => {
        
    //     accArr.push(addedObj);
        
    // })
//     });

// take 3: 
function addKeyAndValue(arr, key, value) {
    const arrNew = [];
    for (let i = 0; i < arr.length; i++) {
        const objDuCircuit = arr[i];
        const newObjDuCircuit = {};
        newObjDuCircuit[key] = value;
        for (let keyDuCircuit in objDuCircuit) {
            newObjDuCircuit[keyDuCircuit] = objDuCircuit[keyDuCircuit];
        }
        arrNew[i] = newObjDuCircuit;
    }
    return arrNew;
}

// well, take 3 works, but without any advanced array methods... 


/*
Write a function called partition which accepts an array and a callback and returns an array with two arrays inside of it. The partition function should run the callback function on each value in the array and if the result of the callback function at that specific value is true, the value should be placed in the first subarray. If the result of the callback function at that specific value is false, the value should be placed in the second subarray. 

Examples:
    
    function isEven(val){
        return val % 2 === 0;
    }
    
    const arr = [1,2,3,4,5,6,7,8];
    
    partition(arr, isEven) // [[2,4,6,8], [1,3,5,7]];
    
    function isLongerThanThreeCharacters(val){
        return val.length > 3;
    }
    
    const names = ['Elie', 'Colt', 'Tim', 'Matt'];
    
    partition(names, isLongerThanThreeCharacters) // [['Elie', 'Colt', 'Matt'], ['Tim']]
*/

function partitionOldSchool(arr, callback) {
    const passArray = [];
    const failArray = [];
    const passFail = [];
    for (f = 0; f < arr.length; f++) {
        passFail.push(callback(arr[f]));
    }
    for (i = 0; i < arr.length; i++) {
        passFail[i] ? passArray.push(arr[i]) : failArray.push(arr[i]); 
    }
    return [passArray, failArray];
}

// once again, found a way to do it without any of these callback methods....
// can I translate that to using one? 
function partition(arr, callback) {
    const passArray = arr.filter((val) => {
        return callback(val);
    });
    const failArray = arr.filter((val) => {
        return !callback(val);
    });
    return [passArray, failArray];
}

// OK, but can I do it with reduce?
// function partition(arr, callback) {
//     const passArray = [];
//     const failArray = [];
//     callback(arr[0]) ? passArray.push(arr[0]) : failArray.push(arr[0]);
//     arr.reduce((acc, nextItem) => {
//         passArray.push(callback(nextItem));
//         failArray.push(!callback(nextItem));
//     })
//     return [passArray, failArray];
// }
// seems like maybe not....