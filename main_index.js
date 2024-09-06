let mainBlock = document.getElementById('mainBlock');

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(usersList => {
        for (const userInfo of usersList) {
            let infoBlock = document.createElement('div')
            let infoId = document.createElement('p');
            let infoName = document.createElement('p');
            infoId.innerText = 'Id: ' + `${userInfo.id}`;
            infoName.innerText = 'Name: ' + `${userInfo.name}`;
            infoBlock.append(infoId, infoName);
            mainBlock.appendChild(infoBlock);

            let infoButton = document.createElement('button');
            infoButton.innerText = 'Details';
            infoButton.onclick = function (){
                let checkInfo = +localStorage.getItem('id') || 0;
                checkInfo = `${userInfo.id}`;
                localStorage.setItem('id', checkInfo);
                window.location.href = 'user-details.html';
            }
            infoBlock.append(infoButton);

        }
    })