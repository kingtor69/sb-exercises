// ES5 code and last function instructions + const d & s definitions copied/pasted from Springboard
// http://curric.rithmschool.com/springboard/exercises/js-object-enhancements/
// 2021 February 16 2226mst

function createInstructor(firstName, lastName){
    return {
      firstName: firstName,
      lastName: lastName
    }
  }
  /* Write an ES2015 Version */

const createInstructorTor = (firstName, lastName) => {
  return {
    firstName,
    lastName
  }
} 

  var favoriteNumber = 42;

  var instructor = {
    firstName: "Colt"
  }
  
  instructor[favoriteNumber] = "That is my favorite!"

  console.log('---start test 1---');
  console.log(instructor);
  /* Write an ES2015 Version */
const favNum = 42;
const instr = {
  firstName: "Colt",
  [favNum]: "That is my favorite!"
};
console.log('expect the same above and below');
console.log(instr);

  var instructor = {
    firstName: "Colt",
    sayHi: function(){
      return "Hi!";
    },
    sayBye: function(){
      return this.firstName + " says bye!";
    }
  }

console.log('---start test 2---');
console.log(instructor.sayHi());
console.log(instructor.sayBye());

  /* Write an ES2015 Version */
instructorSpeaks = {
  firstName: "Colt",
  sayHi(){
    return "Hi!";
  },
  sayBye(){
    return this.firstName + " says bye!"
  }
}

console.log('expect the same above and below');
console.log(instructorSpeaks.sayHi());
console.log(instructorSpeaks.sayBye());
  
  
/* Write a function which generates an animal object. The function should accepts 3 arguments:

        species: the species of animal (‘cat’, ‘dog’)
        verb: a string used to name a function (‘bark’, ‘bleet’)
        noise: a string to be printed when above function is called (‘woof’, ‘baaa’)
    Use one or more of the object enhancements we’ve covered.
*/

const d = createAnimal("dog", "bark", "Woooof!")
// {species: "dog", bark: ƒ}
d.bark()  //"Woooof!"

const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
// {species: "sheep", bleet: ƒ}
s.bleet() //"BAAAAaaaa"

// Tor's code:
function createAnimal(animal, callback, voice) {
  return {
    [animal]: animal,
    [callback]: function() {
      return voice;
    }    
  }
}