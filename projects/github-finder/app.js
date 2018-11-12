const github = new GitHub();
const ui = new UI();

const searchInput = document.querySelector('#searchUser');

searchInput.addEventListener('keyup', (e) => {
    const userText = e.target.value;

    if(userText != ''){
        github.getUser(userText)
        .then(data => {
            if(data.profile.message === 'Not Found'){
                ui.clearUser();
            }else{
                ui.showProfile(data.profile);               
            }
        })
    } else{
        //clear user
    }
})