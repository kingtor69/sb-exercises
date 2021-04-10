// starter code (instructions and function names) downloaded from Springboard
// http://curric.rithmschool.com/springboard/exercises/js-array-find-findindex.zip
// 2021 February 14, 1555mst
// function internal logic written by Tor Kingdon

/* 
Write a function called `findUserByUsername` which accepts an array of objects, each with a key of username, and a string. The function should return the first object with the key of username that matches the string passed to the function. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

findUserByUsername(users, 'mlewis') // {username: 'mlewis'}
findUserByUsername(users, 'taco') // undefined
*/


function findUserByUsername(usersArray, username) {
    return usersArray.find((obj)=>{
      return obj.username === username;
    })
}

/*
Write a function called `removeUser` which accepts an array of objects, each with a key of username, and a string. The function should remove the object from the array. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

removeUser(users, 'akagen') // {username: 'akagen'}
removeUser(users, 'akagen') // undefined
*/

function removeUser(usersArray, username) {
  const removeIndex = usersArray.findIndex((obj)=>{
    return obj.username === username;
  });
  if (removeIndex === -1) return undefined;
  const removeUser = usersArray[removeIndex];
  usersArray.splice(removeIndex,1);
  return removeUser;
}