//dictionaries - key -value pairs
person={
    name: "Nirmal",
    age: 30,
    isStudent: false,
    hobbies: ["reading", "travelling", "coding"],
    address:{
        street: "123 Main St",
        city: "London",
        country: "UK"
    }
}

console.log(person['age']); // Accessing a value using key
console.log(person.name); // Accessing a value using dot notation -> object property


console.log(person);

person['isStudent']=true; // updating a value using key
console.log(person); // Accessing the updated value

console.log(person['hobbies']);
console.log(person['hobbies'][1]);


console.log(person['address']['city']); // Accessing nested object values
console.log(person.address.city); // Accessing nested object values using dot notation


// Adding a new key-value pair
person['email'] = 'test@example.com';
console.log(person); // Accessing the new key-value pair

console.log(Object.keys(person)); // Getting all keys of the object
console.log(Object.values(person)); // Getting all values of the object
console.log(Object.entries(person)); // Getting all key-value pairs of the object


//define empty dict
data={};
data['a']=10;
data['b']=20;
data['c']=30;
console.log(data); // Accessing the dictionary with key-value pairs

delete data['b']; // Deleting a key-value pair
console.log(data); // Accessing the dictionary after deletion

data.c=50;
console.log(data); // Accessing the dictionary after updating a value



library={
    name: "City Library",
    location: "Downtown",
    books: [
        { title: "Book 1", author: "Author 1", year: 2020 },
        { title: "Book 2", author: "Author 2", year: 2021 },
        { title: "Book 3", author: "Author 3", year: 2022 }
    ],
    isOpen: true,
    getbooks: function (){
        console.log(this.books);
    }
}

console.log(library.name); // Accessing a value using dot notation
library.getbooks(); // Calling a method of the object
