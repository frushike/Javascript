console.error('This is an error');
console.warn('This is a warning'); //warning


///var, let, const

//let
let Abbyage = 18;
Abbyage = 19;

console.log (Abbyage);


//const
const Jade_age = 18;

console.log(Jade_age);

//Data types

//Primitive data types: strings, numbers, boolean, null, symbol

const jade = 'John';
const age = 20;
const rating = 4.5; //decimal. there is no decimal type it's just as a number
const isCool = true;
const x = null //it means it's just empty. it's a variable that has nothing in it. this is like an error
const y = undefined; //if we don't want to add anything in the variable

console.log(typeof x);

//Strings

//Concatenation - Adding a variable into a sentence

console.log ('my name is' + jade + 'and I am ' + age); //This works but it's hard if it's a long line

// Template String - use back ticks - can be assigned to a variable

let temp =  `My name is ${jade} and I am ${age}` ;
console.log(temp);
 

//String properties and methods
//A method is function associated with an object

const s = 'Hello World' 

console.log(s.length) // this is a property because it doesn't have parentheses
console.log(s.toUpperCase()); //all caps
console.log(s.toLowerCase()); //all lowercase
console.log(s.substring(0,5)); //takes part of the string. Takes the beginning and the end
console.log(s.substring(0,5).toUpperCase());

console.log(s.split(' ')); //comes in handy if you want to take words in a string and put them in an array



//Arrays - Variables that hold multiple values

const numbers = new Array (1,2,3,4); //this is using a constructor

const fruits = ['apples', 'tangerine', '1']; //You can just institiante right away without a constructor. We can also put different data types in one array. Some language don't allow that

console.log (numbers);
console.log (numbers[1]); //Remember arrays are 0 based

numbers[3] = 'pears'; //You can manipulate. This isn't necessarily the best way because you might not know how many values are there

numbers.push('apples');
console.log(numbers);

numbers.pop(); //removes the last element of the array

console.log (numbers.indexOf('pears'));

//Object literals - key value pair







 