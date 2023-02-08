
const users = window.users
//     /*За допомогою циклу вивести всю інформацію про пости використовуючи шаблон Template 1.1.
//     * ЗА допомоги стилів побудувати структуру "сітки" по 5 об'єктів в лінію
//     * */

// <!--template 1.1-->
// <div class="wrap">
//     <div class="post-card">
//         <h3>ID - TITLE</h3>
//         <p>BODY</p>
//     </div>
//
//     <!--
//     ...
//     ...
//     ...
//     other posts
//     -->
//
// </div>

document.write(`<div class="wrap">`)
for (const user of users) {
    for (const userKey in user) {
        document.write(`
         <div class="post-card">
       <h3> user ID${user[userKey]} - user TITLE  ${user[userKey]}}</h3>
         <p>BODY</p>
     </div>
        `)
    }

}
document.write(`</div>`)


