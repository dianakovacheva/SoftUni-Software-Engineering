class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
    }
    addBook(bookName, bookAuthor) {
        if (this.capacity === 0) {
            throw new Error('Not enough space in the collection.');
        } else {
            this.books.push({
                bookName,
                bookAuthor,
                payed: false,
            });
            this.capacity--;
        }
        return `The ${bookName}, with an author ${bookAuthor}, collect.`;
    }
    payBook(bookName) {
        const currentBook = this.books.find(book => book.bookName === bookName);
        if (!currentBook) {
            throw new Error(`${bookName} is not in the collection.`);
        };
        if (currentBook.payed) {
            throw new Error(`${bookName} has already been paid.`);
        } else {
            currentBook.payed = true;
            return `${bookName} has been successfully paid.`;
        }
    }
    removeBook(bookName) {
        const currentBook = this.books.find(book => book.bookName === bookName);
        if (!currentBook) {
            throw new Error('The book, you\'re looking for, is not found.');
        }
        if (!currentBook.payed) {
            throw new Error(`${bookName} need to be paid before removing from the collection.`);
        } else {
            this.books = this.books.slice(currentBook, 1);
            this.capacity++;
        }
        return `${bookName} remove from the collection.`;
    }
    getStatistics(bookAuthor) {
        if (bookAuthor === undefined) {
            let result = `The book collection has ${this.capacity} empty spots left.\n`;
            let sortedBooks = this.books.sort((a, b) => a.bookName.localeCompare(b.bookName));
            for (const info of sortedBooks) {
                let status = '';
                if (info.payed) {
                    status = 'Has Paid';
                } else {
                    status = 'Not Paid';
                }
                result += `${info.bookName} == ${info.bookAuthor} - ${status}.\n`;
            }
            return result.trim();
        } else {
            let book = this.books.find(author => author.bookAuthor === bookAuthor);
            if (!book) {
                throw new Error(`${bookAuthor} is not in the collection.`);
            }
            let status = '';
            if (book.payed) {
                status = 'Has Paid';
            } else {
                status = 'Not Paid';
            }
            return `${book.bookName} == ${bookAuthor} - ${status}.`;
        };
    }
}

const library = new LibraryCollection(5)
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Ulysses', 'James Joyce');
console.log(library.getStatistics('Ivan Vazov'));

