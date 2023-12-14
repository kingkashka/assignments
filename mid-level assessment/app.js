function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.getDetails = function() {
        return this.title + this.author + this.year
    }
}

const book1 = new Book("The Great Gatsby ", "F. Scott Fitzgerald ", 1925);
const book2 = new Book("To Kill a Mockingbird ", "Harper Lee ", 1960);
// book1.getDetails = "The Great Gatsby", "F. Scott Fitzgerald, 1925"
// book2.getDetails = "To Kill a Mockingbird", "Harper Lee, 1960"
console.log(book1.getDetails());
console.log(book2.getDetails());