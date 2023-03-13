
// На странице post-details.html:
// Вивести всю, без виключення, інформацію про об'єкт post на який клікнули
// Нижчє інформаці про пост, вивести всі коментарі поточного поста
// (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

const url = new URL(location.href)
const data = url.searchParams.get('data')
const post = {...JSON.parse(data)}

const urlPosts = `https://jsonplaceholder.typicode.com/posts/${post.id}/comments`

let status = false
const getComments = async () => {
    return await fetch(urlPosts).then(res => res.json())
        .then(comments => {
            const commentsDiv = document.querySelector('.comments')
            commentsDiv.innerText = ''

            if (status) {
                status = false
                commentsDiv.innerText = ''
                btnComments.innerText = 'VIEW COMMENTS'
            } else {
                commentsDiv.innerHTML = comments.map(comment => `
                     <div class="wrapper_comment">
                     <div class="postInfoItem">Name: ${comment.name}</div>
                     <div class="postInfoItem">Email: ${comment.email}</div>
                     <div class="postInfoItem">Body: ${comment.body}</div>
                     </div>
                    `).join('')

                status = true
                btnComments.innerText = 'HIDE COMMENTS'
            }
        })
}

const divPosts = document.querySelector('.posts')
divPosts.innerHTML = `
     <div class="postInfoItem">User Id: ${post.userId}</div>
     <div class="postInfoItem">Id: ${post.id}</div>
     <div class="postInfoItem">Title: ${post.title}</div>
     <div class="postInfoItem">Body: ${post.body}</div>
     `

const btnComments = document.createElement('button')
btnComments.classList.add('btn_comments')
btnComments.innerText = 'VIEW COMMENTS'
btnComments.addEventListener('click', getComments)
divPosts.append(btnComments)

