import { http } from './http';
import { ui } from './ui';

document.addEventListener('DOMContentLoaded', getPosts);
document.querySelector('.post-submit').addEventListener('click', submitPost);
document.querySelector('.posts').addEventListener('click', removePost);

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
    const data = {
        title,
        body
    }

    http.post('http://localhost:3000/posts', data)
        .then(data => {
            ui.showAlert('Post added!', 'alert alert-success');
            ui.clearFields();
            getPosts();
        })
        .catch(error => {
            console.log(error)
        })
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