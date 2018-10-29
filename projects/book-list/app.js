function Book(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

function UI(){}

UI.prototype.addBookToList = function(book){
    const list = document.querySelector('#book-list');
    const row = document.createElement('tr');

    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X</a></td>
    `;
    list.appendChild(row);    
    
}

UI.prototype.clearFields = function(){
    const title = document.querySelector('#title').value = '';
    const author = document.querySelector('#author').value = '';
    const isbn = document.querySelector('#isbn').value = '';
}


const bookForm = document.querySelector('.book-form');

bookForm.addEventListener('submit', function(e){
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;

    const book = new Book(title, author, isbn);

    const ui = new UI();
    ui.addBookToList(book);
    ui.clearFields();
    
    e.preventDefault();
})