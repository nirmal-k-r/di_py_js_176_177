
// if (condition) {
    //block of code to be executed if condition is satiesfied (true)
// }

// if (condition) {
    //block of code to be executed if condition is satiesfied (true)
// }else{
    //block of code to be executed if condition is not satiesfied (false)
//}


var temp=27;
// if (temp >= 25){
//     console.log("Turning on the AC");
// }

// if (temp >= 25){
//     console.log("Turning on the AC");
// }else{
//     console.log("Turning off the AC");
// }

// balance=10000;
// withdraw=5000;
// if (withdraw <= balance) {
//     console.log("Withdrawal successful");
// } else {
//     console.log("Insufficient funds");
// }

// total=6000;

// if (total>=10000){
//     console.log("You are eligible for a 10% discount");
// }else if (total>=5000){
//     console.log("You are eligible for a 5% discount");
// }else if (total>=2000){
//     console.log("You are eligible for a 1% discount");
// }else{
//     console.log("You are not eligible for any discount");
// }


temp=27;
humidity=60;

if (temp >=25 && humidity >= 50) {
    console.log("Turning on the AC");
}else{
    console.log("Turning off the AC");
}

// if (temp >=25 || humidity >= 50) {
//     console.log("Turning on the AC");
// }else{
//     console.log("Turning off the AC");
// }

// rainfall=7;
// ph=5;
// if ((temp >=25 && humidity >= 50) && (rainfall <= 10 || ph==5)){
//     console.log("Turning on the AC");
// }else{
//     console.log("Turning off the AC");
// }

sunny=true;

// if (sunny){
//     console.log("It's a sunny day");
// }else{
//     console.log("It's a cloudy day");
// }

// if (!sunny){
//     console.log("It's a sunny day");
// }else{
//     console.log("It's a cloudy day");
// }

// role="admin";
// if (role != "admin") {
//     console.log("You are not allowed to access this page");
// }else{
//     console.log("Welcome to the admin page");
// }

let color="blue";
switch (color){
    case "red":
        console.log("You chose red");
        break;
    case "green":
        console.log("You chose green");
        break;
    case "blue":
        console.log("You chose blue");
        break;
    default:
        console.log("Color not recognized");
}