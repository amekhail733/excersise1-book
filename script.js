// Book Array
var books = [
    {
    title: 'The Design of EveryDay Things',
    author: 'Don Norman',
    alreadyRead: false
    }, {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: false
    }
];
// Declare what the body is for this next step
var body = document.body;
// Display the books in the innerHTML
for (var x = 0; x < books.length; x++) {
    // Create the Variables
    var bDiv = document.createElement('div');
    var bookTitle = document.createElement('p');
    var bookAuthor = document.createElement('p');
    var bookStatus = document.createElement('p');
    var authNam = document.createTextNode("Author: " + books[x].author);
    var bkTitl = document.createTextNode("Title: " + books[x].title);
    // Add to the InnerHTML
    bookTitle.appendChild(bkTitl);
    bookAuthor.appendChild(authNam);
    bDiv.appendChild(bookTitle);
    bDiv.appendChild(bookAuthor);
    body.appendChild(bDiv);
}