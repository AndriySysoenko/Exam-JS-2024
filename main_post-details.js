let allDetailsPost = document.getElementById('allDetailsPost');
let takePostInfo = +localStorage.getItem('postId');
let postComments = document.getElementById('postComments');

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(postsList => {
        let selectPost = postsList.find(value => value.id === takePostInfo);
        for (let characteristicPost in selectPost) {
            let itemPost = document.createElement('p')
            itemPost.innerText = characteristicPost + ': ' + selectPost[characteristicPost];
            allDetailsPost.appendChild(itemPost);
        }
    })

fetch(`https://jsonplaceholder.typicode.com/posts/${takePostInfo}/comments`)
    .then(response => response.json())
    .then(commentsList => {
        for (const commentObject of commentsList) {
            let commentBlock = document.createElement('div');
            let itemComment = document.createElement('p');
            itemComment.innerText = 'Body: ' + `${commentObject.body}`;
            commentBlock.appendChild(itemComment)
            postComments.appendChild(commentBlock);
        }
    })