class User {
    firstName;
    lastName;
    hometown;
    borrowedBooks;
    constructor(firstName, lastName, hometown) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.hometown = hometown;
        this.borrowedBooks = [];
    }

    addBooks(book) {
        if (book.canBorrow) {
            this.borrowedBooks.push(book);
        }
    }
}

let userNumber1 = new User('Lior', 'Tahulian', 'Holon')
let userNumber2 = new User('Ben', 'Cohen', 'Netanya');
let userNumber3 = new User('Eli', 'Rotenberg', 'Jerusalem');




class WeeklyReport {
    constructor() {
        this.allTheUsers = [];
    }

    addUserToAllTheUsers(addUser) {
        this.allTheUsers.push(addUser);
    }

    print() {
        this.allTheUsers.forEach(user => {
            console.log("The user " + user.firstName + " " + user.lastName + " from " + user.hometown + " borrowed the following books: ");
            user.borrowedBooks.forEach(book => {
                console.log(book.title);
            });
        })
    }
}

let report1 = new WeeklyReport();
report1.addUserToAllTheUsers(userNumber1);
report1.addUserToAllTheUsers(userNumber2);
report1.addUserToAllTheUsers(userNumber3);




class Book {
    constructor(title, author, canBorrow) {
        this.title = title;
        this.author = author;
        this.canBorrow = canBorrow;
    }
}

let book1 = new Book('Tom Sawyer', 'Mark Twain', true);
let book2 = new Book('Encyclopedia Britannica', '', false);
let book3 = new Book('Harry Potter and the Philosopher\'s Stone', ' J. K. Rowling', true);
let book4 = new Book('Oxford Dictionary of the English Language', '', false);
let book5 = new Book('Adventures of Sherlock Holmes', 'Arthur Conan Doyle', true);
let book6 = new Book('Breaking Bad', 'Vince Gilligan', true);
let book7 = new Book('Dexter', 'Jeffry P. Freundlich', false);
let book8 = new Book('Rick and Morty', 'Daniel James Harmon and Justin Roiland', true);
let book9 = new Book('Gomorra', 'Roberto Saviano', false);
let book10 = new Book('Game of Thrones', ' David Benioff and D. B. Weiss', true);
let book11 = new Book('Prison Break', 'Paul Scheuring', true);
let book12 = new Book('Cobra Kai', ' Robert Mark Kamen', true);

userNumber1.addBooks(book1);
userNumber1.addBooks(book2);
userNumber1.addBooks(book3);
userNumber1.addBooks(book4);
userNumber2.addBooks(book5);
userNumber2.addBooks(book6);
userNumber2.addBooks(book7);
userNumber2.addBooks(book8);
userNumber3.addBooks(book9);
userNumber3.addBooks(book10);
userNumber3.addBooks(book11);
userNumber3.addBooks(book12);


report1.print();