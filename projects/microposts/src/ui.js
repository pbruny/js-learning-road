class UI {
    constructor() {
        this.post = document.querySelector('.posts');
        this.titleInput = document.querySelector('#title');
        this.bodyInput = document.querySelector('#body');
        this.idInput = document.querySelector('#id');
        this.postSubmit = document.querySelector('.post-submit');
        this.container = document.querySelector('.post-container');
        this.formEnd = document.querySelector('.form-end');
        this.card = document.querySelector('.card');
        this.formState = 'add';
    }

    showPosts(posts) {
        let output = '';

        posts.forEach((post) => {
            output += `
                <div class="card mb-3">
                    <div class="card-body">
                        <h4 class="card-title">${post.title}</h4>
                        <p class="card-text">${post.body}</p>

                        <a href="#" class="edit card-link" data-id="${post.id}">
                            <i class="fa fa-pencil"></i>
                        </a>
                        <a href="#" class="remove card-link" data-id="${post.id}">
                            <i class="fa fa-remove"></i>
                        </a>
                    </div>
                </div>
            `;
        })
        this.post.innerHTML = output;
    }

    showAlert(message, className) {
        this.clearAlerts();

        const div = document.createElement('div');

        div.className = className;
        div.appendChild(document.createTextNode(message));

        this.container.insertBefore(div, this.post);

        setTimeout(() => {
            this.clearAlerts();
        }, 3000);
    }

    clearAlerts() {
        const currentAlert = document.querySelector('.alert');

        if (currentAlert) {
            currentAlert.remove();
        }
    }

    clearFields() {
        this.titleInput.value = '';
        this.bodyInput.value = '';
    }

    clearIdInput(){
        this.idInput.value = '';
    }

    fillForm(data) {
        this.titleInput.value = data.title;
        this.bodyInput.value = data.body;
        this.idInput.value = data.id;
        this.changeFormState('edit');
    }

    changeFormState(type) {
        if (type === 'edit') {
            this.postSubmit.className = 'post-submit btn btn-warning btn-block';
            this.postSubmit.textContent = 'Update Post';

            const cancelBtn = document.createElement('a');
            cancelBtn.className = 'post-cancel btn btn-light btn-block';
            cancelBtn.appendChild(document.createTextNode('Cancel Edit'));

            this.card.insertBefore(cancelBtn, this.formEnd);
        } else {
            this.postSubmit.className = 'post-submit btn btn-primary btn-block';
            this.postSubmit.textContent = 'Add Post';

            if(document.querySelector('.post-cancel')){
                document.querySelector('.post-cancel').remove();
            }
            this.clearIdInput();
            this.clearFields();
        }

    }
}

export const ui = new UI();