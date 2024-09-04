let mainBlock = document.getElementById('mainBlock');

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(usersList => {
        for (const usersInfo of usersList) {
            let infoBlock = document.createElement('div')
            infoBlock.innerText = 'Id: ' + `${usersInfo.id} Name:  ${usersInfo.name}`;
            mainBlock.appendChild(infoBlock);

            let infoButton = document.createElement('button');
            infoButton.innerText = 'Details';
            infoButton.onclick = function (){
                let checkInfo = +localStorage.getItem('id') || 0;
                checkInfo = `${usersInfo.id}`;
                localStorage.setItem('id', checkInfo);
                window.location.href = 'user-details.html';
            }
            infoBlock.appendChild(infoButton);
        }
    })