
// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули


const url = new URL(location.href)
const data = url.searchParams.get('data')
const user = {...JSON.parse(data)}
console.log(user);

const divDetail = document.createElement('div')
const divInfo = document.querySelector('.info');
const btnPosts = document.querySelector('.btn_posts');
divDetail.innerText = ''

const urlPosts = `https://jsonplaceholder.typicode.com/users/${user.id}/posts`
const getPosts = async () => {
    return await fetch(urlPosts).then(res => res.json())
}

getPosts().then((data)=> console.log(data))


function renderObject(obj) {
    const divUserInfo = document.createElement('div');

    for (const key in obj) {
        const value = obj[key];
        let divItem;
        divItem = document.createElement('div');
        divItem.classList.add('item')
        if (typeof value === 'object') {
            divItem.textContent = key;
            divItem.appendChild(renderObject(value));
        } else {
            divItem.addEventListener('click', ()=> showDetail(key, value))
            divItem.textContent = `${key}:  ${value}`;
        }
        divUserInfo.appendChild(divItem);
    }
    return divUserInfo;
}

const resultDiv = renderObject(user);
divInfo.appendChild(resultDiv);


function showDetail (key, value) {
    let info =  `${key}:  ${value}`
    divDetail.classList.add('detail')
    divDetail.innerText = info
    divInfo.appendChild(divDetail)
}



// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//     6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.
//
//     На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
//
// Стилизація проєкта -
// index.html - всі блоки з user - по 2 в рядок. кнопки/аосилвння розташувати під інформацією про user.
//     user-details.html - блок з інфою про user зверху сторінки. Кнопка нижчє, на 90% ширини сторінки, по центру.
//     блоки з короткою іфною про post - в ряд по 5 .
//     post-details.html - блок з інфою про пост зверху. Коментарі - по 4 в ряд.
//     Всі елементи котрі характеризують users, posts, comments візуалізувати, так, щоб було видно що це блоки (дати фон. марджини і тд)
