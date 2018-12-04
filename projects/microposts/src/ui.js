class UI {
    constructor(){
        this.post = document.querySelector('.posts');
        this.titleInput = document.querySelector('#title');
        this.bodyInput = document.querySelector('#body');
        this.idInput = document.querySelector('#id');
        this.postSubmit = document.querySelector('.post-submit');
        this.container = document.querySelector('.post-container')
        this.formState = 'add';
    }

    showPosts(posts){
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

    showAlert(message, className){
        this.clearAlerts();

        const div = document.createElement('div');

        div.className = className;
        div.appendChild(document.createTextNode(message));

        this.container.insertBefore(div, this.post);
        
        setTimeout(() => {
            this.clearAlerts();
        }, 3000);
    }

    clearAlerts(){
        const currentAlert = document.querySelector('.alert');

        if(currentAlert){
            currentAlert.remove();
        }
    }

    clearFields(){
        this.titleInput.value = '';
        this.bodyInput.value = '';
    }
}

export const ui = new UI();