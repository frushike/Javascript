const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}

console.log(person.firstName, person.lastName) //You can print a value of the object

const {firstName, lastName} = person; //this is destructuring. taking the values in the object and placing them in seperate values

console.log(person);
console.log(firstName);

const {address : {city}} = person;

console.log(city);

person.email = "test@gmail.com";

console.log(person);

//A lot of time you deal with arrays of objects

const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 1,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 1,
        text: 'Dentist appt',
        isCompleted: false
    }

];

console.log(todos[1].text);


//JSON is a data format when you're sending data to an api
//There are online converter that allow you to convert your array in JSON format


const todoJSON = JSON.stringify(todos); // This converts the array in JSON format that can be sent to the server


//LOOPS

//For
for (let i = 0; i < 10; i++){
    console.log(i);
}

//While - the iterative variable is set outside of the loop

let i = 0;

while(i<10){
    console.log(`while loop ${i}`);
    i++;
}

//Looping through the array

//Option 1 - Not the best option because it's not readable
for (let i = 0; i < todos.length; i++){
    console.log(todos[i].text);
}

//Option 2 - Better readability - todo is the iterative value

for (let todo of todos){
    console.log(todo.text);
}


//High order array methods. Allow to do iteration with arrays
//They take in as paramater a callback function
//The first parameter is the variable you want to use as each item
//forEach, map, filter


todos.forEach(function(todo){
    console.log(todo.text);
});

//Map returns an array
const todoText = todos.map(function(todo){
    return todo.text;
});

//Filter returns what is filtered

const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted == true;
}).map(function(todo){
    return todo.text;
});

console.log (todoCompleted);


//Conditionals

const x = 4;

const y = 10;
//double equal does not check the data type, just the value
if (x == 10){
    console.log('x is 10');
}

//triple equal checks the data type as well
if (x === 10){
    console.log('x is NOT 10');
} else if (x > 10 ){
    console.log('x is greater than 10');
} else {
    console.log ('x is less than 10'); 
}

//There is the option of using or and && as well. It can be better than nesting

if (x > 5 || y > 10){
    console.log ('it is in between')
}

//turnary operator

const color = x > 10 ? 'red' : 'blue';


//switch

switch (color) {

}
