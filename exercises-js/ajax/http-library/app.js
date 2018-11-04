const http = new easyHTTP();

/*http.get('https://jsonplaceholder.typicode.com/posts/5', (err, posts) => {
    if(err){
        console.log(err);
    }else{
        console.log(posts);
    }
});*/

const data = {
    title: 'Custom New Post',
    body: 'Lorem ipsum is the new fun'
}

/*http.post('https://jsonplaceholder.typicode.com/posts', data, (err, post) => {
    if(err){
        console.log(err);
    } else {
        console.log(post);   
    }
})*/

/*http.put('https://jsonplaceholder.typicode.com/posts/5', data, (err, post) => {
    if(err){
        console.log(err);
    } else {
        console.log(post);   
    }
})*/

http.delete('https://jsonplaceholder.typicode.com/posts/5', (err, response) => {
    if(err){
        console.log(err);
    }else{
        console.log(response);
    }
});

