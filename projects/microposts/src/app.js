import { http } from './http';
import { ui } from './ui';

document.addEventListener('DOMContentLoaded', getPosts);
document.querySelector('.post-submit').addEventListener('click', submitPost);
document.querySelector('.posts').addEventListener('click', removePost);
document.querySelector('.posts').addEventListener('click', enableEditPost);
document.querySelector('.card-form').addEventListener('click', cancelEdit);

function getPosts() {
    http.get('http://localhost:3000/posts')
        .then(data => {
            ui.showPosts(data);
        })
        .catch(error => {
            console.log(error);
        })
}

function submitPost() {
    const title = document.querySelector('#title').value;
    const body = document.querySelector('#body').value;
    const id = document.querySelector('#id').value;
    const data = {
        title,
        body
    }

    if(title === '' || body === ''){
        ui.showAlert('Please, fill in all the fields', 'alert alert-danger');
    } else {
        if(id === ''){
            http.post('http://localhost:3000/posts/', data)
            .then(data => {
                ui.showAlert('Post added!', 'alert alert-success');
                ui.clearFields();
                getPosts();
            })
            .catch(error => {
                console.log(error)
            });
        } else {
            http.put(`http://localhost:3000/posts/${id}`, data)
            .then(data => {
                ui.showAlert('Post edited!', 'alert alert-success');
                ui.changeFormState('add');
                getPosts();
            })
            .catch(error => console.log(error));
        }
    }
}

function removePost(e) {
    e.preventDefault();
    if (e.target.parentElement.classList.contains('remove')) {
        const id = e.target.parentElement.dataset.id;
        http.delete(`http://localhost:3000/posts/${id}`)
        .then(data => {
            ui.showAlert('Post Deleted!', 'alert alert-success');
            setTimeout(() => {
                getPosts();
            }, 100)
        })
        .catch(error => console.log(error));
    }
}

function enableEditPost(e){

    if(e.target.parentElement.classList.contains('edit')){
        const id = e.target.parentElement.dataset.id;
        const title = e.target.parentElement.previousElementSibling.previousElementSibling.textContent;
        const body = e.target.parentElement.previousElementSibling.textContent;

        const data = {
            id,
            title,
            body
        }
        console.log(id)
        ui.fillForm(data);
    }

    e.preventDefault();
}

function cancelEdit(e){
    if(e.target.classList.contains('post-cancel')){
        ui.changeFormState('add');
    }
}