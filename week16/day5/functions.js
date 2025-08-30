//ordinary functions
// function greet(name){
//     console.log(`Hello, ${name}!`);
// }
// greet('Tom');

//arrow function -> for asynchronous programming
// const greet = (name) => {
//     console.log(`Hello, ${name}!`);
// }
// greet('Tom');

//asynchronous functions
// async function greet(name){
//     console.log(`Hello, ${name}!`);
// }
// await greet('Tom');


//self invoked functions - function is called after declaration
(
    function greet (name){
        console.log(`Hello, ${name}!`);
    }
)('Tom');


//anonymous functions
let greet = function (name){
    console.log(`Hello, ${name}!`);
}

greet('Tom');