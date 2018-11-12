const github = new GitHub();

const searchInput = document.querySelector('#searchUser');

searchInput.addEventListener('keyup', (e) => {
    const userText = e.target.value;

    if(userText != ''){
        github.getUser(userText)
        .then(data => {
            if(data.profile.message === 'Not Found'){
                console.log('User not found');
            }else{
                console.log(data.profile.name);
            }
        })
    } else{
        //clear user
    }
})