class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {
    addBookToList(book) {
        const list = document.querySelector('#book-list');
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="delete"><i class="fa fa-trash"></i></a></td>
        `;
        list.appendChild(row);
    }

    clearFields() {
        const title = document.querySelector('#title').value = '';
        const author = document.querySelector('#author').value = '';
        const isbn = document.querySelector('#isbn').value = '';
    }

    showAlert(message, className) {
        const div = document.createElement('div');
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.querySelector('.book-form');

        container.insertBefore(div, form);

        setTimeout(function () {
            document.querySelector('.alert').remove();
        }, 2000);
    }

    removeBook(target) {
        if(target.classList.contains('fa-trash')){
            target.parentElement.parentElement.parentElement.remove();
        }
    }
}

document.querySelector('.book-form').addEventListener('submit', function (e) {
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;

    const book = new Book(title, author, isbn);

    const ui = new UI();

    if(title === '' || author === '' || isbn === ''){
        ui.showAlert(`Please, fill in all the fields`, 'error');
    }else{
        ui.addBookToList(book);
        ui.showAlert(`Book successfully added!`, 'success')
        ui.clearFields();
    }


    e.preventDefault();
});

document.querySelector('#book-list').addEventListener('click', function(e){
    const ui = new UI();
    ui.removeBook(e.target);
    ui.showAlert(`Book successfully removed!`, 'success');
    e.preventDefault();
});