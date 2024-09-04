let generalBlock = document.getElementById('generalBlock');
let takeInfo = +localStorage.getItem('id');

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(usersList => {
        let selectUser = usersList.find(value => value.id === takeInfo);

        let allUserInfoBlock = document.createElement('div');
        generalBlock.appendChild(allUserInfoBlock);
            for (let characteristicUser in selectUser) {
                let characteristic = document.createElement('p')
                    if (typeof selectUser[characteristicUser] !== 'object')
                        characteristic.innerText = characteristicUser + ': ' + selectUser[characteristicUser];
                    else characteristic.innerText = characteristicUser;
                allUserInfoBlock.appendChild(characteristic);

                if (typeof selectUser[characteristicUser] === 'object') {
                    let listCharacteristic = document.createElement('ul');
                    characteristic.appendChild(listCharacteristic);
                        for (const point in selectUser[characteristicUser]) {
                            let listCharacteristicPoint = document.createElement('li');
                                if (typeof selectUser[characteristicUser][point] !== 'object')
                                    listCharacteristicPoint.innerText = point + ': ' + selectUser[characteristicUser][point];
                                else listCharacteristicPoint.innerText = point;
                            listCharacteristic.appendChild(listCharacteristicPoint);

                        if (typeof selectUser[characteristicUser][point] === 'object') {
                            let additionlistCharacteristic = document.createElement('ul');
                            listCharacteristic.appendChild(additionlistCharacteristic);
                                for (const item in selectUser[characteristicUser][point]) {
                                    let listCharacteristicItem = document.createElement('li');
                                        if (typeof selectUser[characteristicUser][item] !== 'object')
                                            listCharacteristicItem.innerText = item + ': ' + selectUser[characteristicUser][point][item];
                                        else listCharacteristicPoint.innerText = item;
                                    additionlistCharacteristic.appendChild(listCharacteristicItem);
                            }
                        }
                    }
                }
            }
   })

let postInfoButton = document.getElementById('postInfoButton');
let postInfoBlock = document.getElementById('postInfoBlock');

postInfoButton.onclick = function () {
    fetch(`https://jsonplaceholder.typicode.com/users/${takeInfo}/posts`)
        .then(response => response.json())
        .then(postList => {
            for (const postListObject of postList) {
                let postBlock = document.createElement('div');
                postBlock.innerText = 'Title' + ": " + postListObject.title;
                let postId = postListObject.id;

                    let detailsPostButton = document.createElement('button');
                        detailsPostButton.innerText = 'Post Details';
                        postInfoBlock.append(detailsPostButton, postBlock);

                        detailsPostButton.onclick = function (){
                            localStorage.setItem('postId', postId);
                            window.location.href = 'post-details.html';
                    }
            }
        })
    }


