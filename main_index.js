let generalInfoBlock = document.getElementById('generalInfoBlock');

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(usersList => {
        for (const usersInfo of usersList) {
            let infoBlock = document.createElement('div')
            let infoId = document.createElement('p');
            let infoName = document.createElement('p');
            infoId.innerText = 'Id: ' + `${usersInfo.id}`;
            infoName.innerText = 'Name: ' + `${usersInfo.name}`;
            infoBlock.append(infoId, infoName);
            generalInfoBlock.appendChild(infoBlock);

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