console.log("welcome to the debug example");

let age = prompt("Enter your age: "); // this is a prompt to get user input
let name = "Tom";

age= parseInt(age); // converting string to number
age=age+1;


console.log(`Hello ${name}. You are ${age} years old.`);

alert(`Hello ${name}. You are ${age} years old.`);