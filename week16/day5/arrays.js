// array methods
nums=[1,2,3,4,5,6,7]

// nums.forEach((num) => {
//     console.log(num*10);
// });

//find out whether there are any odd numbers
// let hasOdd = false;
// nums.forEach((num) => {
//     if (num % 2 !== 0) {
//         hasOdd = true;
//     }
// });
// console.log(hasOdd);

nums=[1,3,5,7,9]
function even(num){
    if (num % 2 ==0){
        return true;
    }
    return false;
}

//some to check whether at leats one element matches condition
// let x= nums.some(even); //true
// console.log(x);
nums=[2,4,6,8,10]
let y=nums.every(even); //false
console.log(y);


nums=[1,3,5,7];

if (nums.includes(3)){ //check if array contains element
    console.log("Found 3!");
}

//replace only works for strings
nums=[1,2,3,4,5];
nums=nums.join(",");
nums=nums.replace("5","50");
console.log(nums);
nums=nums.split(",");
console.log(nums);



name="tom";
name=name.padEnd(47,'.');
console.log(name);

name2="    Tom "
console.log(name2);
name2=name2.trim();
console.log(name2);


names=[[12,13,14],[21,22,23],[33,34,45]];
console.log(names.flat());