const users = window.users
//     /*За допомогою циклу вивести всю інформацію про пости використовуючи шаблон Template 1.1.
//     * ЗА допомоги стилів побудувати структуру "сітки" по 5 об'єктів в лінію

document.write(`<div class="wrap">`)
for (let i = 0; i < users.length; i++) {
    const user = users[i]
    document.write(`
         <div class="post-card">
            <h3>  ID: ${user.id}  TITLE: ${user.title}}</h3>
            <p>${user.body}</p>
         </div>
        `)
}
document.write(`</div>`)



// for (const user of users) {
//     for (const userKey in user) {
//         document.write(`
//          <ul class="post-card">
//             <li> ${userKey}: ${user[userKey]}</li>
//          </ul>
//         `)
//     }
// }


