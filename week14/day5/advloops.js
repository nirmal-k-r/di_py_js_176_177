names=['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
// console.log(names[0]);
// console.log(names[1]);
// console.log(names[2]);
// console.log(names[3]);
// console.log(names[4]);


// for (name of names){
//     console.log(`Name of student: ${name}`);
// }


// marks=[85, 90, 78, 92, 88, 95, 80, 89, 91, 87];
// total=0;
// avg=0;

// for (mark of marks){
//     total=total + mark;
// }

// avg=total/marks.length;
// console.log(`Total marks: ${total}`);
// console.log(`Average marks: ${avg}`);



// cities=['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'];

// for (city in cities){
//     //console.log(`City: ${city}`); //in gives you the index of the array
//     console.log(`City: ${cities[city]}`); //in gives you the index of the array
// }


performance={
    John: 85,
    Alice: 90,
    Bob: 78,
    Charlie: 92,
    David: 88,
    Eve: 95
}

// for (name in performance){
//     console.log(name); //get the keys
//     console.log(performance[name]); //get the values
// }

// for (name of Object.keys(performance)){
//     console.log(name); //get the keys
//     console.log(performance[name]); //get the values
// }

// for (mark of Object.values(performance)){
//     console.log(mark); //get the values
// }

for (data of Object.entries(performance)){
    console.log(data);
}


for ([name, mark] of Object.entries(performance)){
    console.log(`${name} scored ${mark} marks`);
}