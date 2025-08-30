function test(){
    var y=10; //local
    // var x=1; //local variable - function scope
    test2();
    console.log(y);
}

function test2(){
    let a=true;
    if (a){
        var y=10;
    }
    y=5;
    console.log(y);
}

//main program
var y=0; //global variable
test();
console.log(y);

