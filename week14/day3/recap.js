//this is a comment 

var x = 5; // this is a variable declaration - global scope
let y=10; // this is a block-scoped variable declaration - block scope

let z= x+y;

console.log("test");

console.log(z);

// name=prompt("Enter your name: "); // this is a prompt to get user input
name="Tom";
age=20;


console.log("Hello " + name + ", you are " + age + " years old.");
console.log(`Hello ${name}. You are ${age} years old.`);

//converting a string to a number
age="20";
age=parseInt(age);
//check the type of age
console.log(typeof age); // should be number

//convert back to string
age=age.toString();
console.log(typeof age); // should be string

//comver tto float
age=parseFloat(age);
console.log(typeof age); // should be number

//convert to boolean
x=1;
x=Boolean(x);
console.log(typeof x); // should be boolean


//array
names=[]; // this is an empty array
names=["Tom", "Jerry", "Spike"]; // this is an array with 3 elements

//accessing array elements
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);

//negative indexing - doesnt work in js
console.log(names[-1]); // undefined, negative indexing is not supported in JavaScript

//length of an array
console.log(names.length); // should be 3

//array sliving
marks=[10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log(marks.slice(0,5))


marks=[]; //LIFO principle
marks.push(10);
marks.push(20);
marks.push(30);
console.log(marks); // should be [10, 20, 30]

marks.pop(); // removes the last element
console.log(marks); // should be [10, 20]

//delete an elemnent
delete marks[0]; // removes the first element but leaves an undefined hole
console.log(marks); // should be [undefined, 20]

names=["Tom", "Jerry", "Spike"];
to_be_deleted = "Jerry";
index=names.indexOf(to_be_deleted); // find the index of the element to be deleted
console.log(index); // should be 1
delete names[index]; // delete the element at the index
console.log(names); // should be ["Tom", undefined, "Spike"]

