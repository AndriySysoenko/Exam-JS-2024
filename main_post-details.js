let detailsPostBlock = document.getElementById('detailsPostBlock');
let takePostInfo = +localStorage.getItem('postId');

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(usersList => {
        let selectPost = usersList.find(value => value.id === takePostInfo);
        for (let characteristicPost in selectPost) {
            let itemPost = document.createElement('p')
            itemPost.innerText = characteristicPost + ': ' + selectPost[characteristicPost];
            detailsPostBlock.appendChild(itemPost);
        }
    })

let commentBlock = document.getElementById('commentBlock');
fetch(`https://jsonplaceholder.typicode.com/posts/${takePostInfo}/comments`)
    .then(response => response.json())
    .then(commentList => {
        for (const commentObject of commentList) {
            for (const commentObjectLine in commentObject) {
                let itemComment = document.createElement('p');
                itemComment.innerText = commentObjectLine + ': ' + commentObject[commentObjectLine];
                commentBlock.appendChild(itemComment);
            }
        }
    })