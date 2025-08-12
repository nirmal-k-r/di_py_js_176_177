//role: ('user','staff','admin')

// function registerEmployee(email, password, fullName, address, phone="0000000", role="user"){ //role is a default parameter (always to the rightmost)
//     console.log("Employee registered successfully!");
//     console.log(`Email: ${email}`);
//     console.log(`Full Name: ${fullName}`);
//     console.log(`Address: ${address}`);
//     console.log(`Phone: ${phone}`);
//     console.log(`Role: ${role}`);
//     console.log("-----------------------------");
// }

// registerEmployee("john.doe@example.com", "password123", "John Doe", "123 Main St");
// registerEmployee("jane.smith@example.com", "password456", "Jane Smith", "456 Elm St", "555-5678");
// registerEmployee("admin@example.com", "adminpass", "Admin User", "789 Oak St", "555-9012");
// registerEmployee("alice.johnson@example.com", "alicepass", "Alice Johnson", "321 Pine St", "555-3456");
// registerEmployee("bob.brown@example.com", "bobpass", "Bob Brown", "654 Cedar St", "555-7890", "staff");



// function login(email, password){
//     uname='admin';
//     pw='12345';
//     if(email===uname && password===pw){
//         console.log("Login successful!");
//         return true;
//     }else{
//         console.log("Invalid email or password.");
//     }
//     return false;
// }


// login('toto','abce');

// login('admin','12345');


library={
    name: 'EYP library',
    location: '123 Library St',
    books: [],
    details: function(){
        console.log(`Library Name: ${this.name} | Location: ${this.location}`);
    },
    addBook: function (bookName){
        this.books.push(bookName);
        console.log(`Book "${bookName}" added to the library.`);
    },
    getBooks: function(){
        console.log("Books available in the library:");
        this.books.forEach(function(book) {
            console.log(`\t - ${book}`);
        });
    }

}

library.details();
library.getBooks();

library.addBook("Harry Potter and the Sorcerer's Stone");
library.addBook("The Hobbit");
library.addBook("1984");

library.getBooks();