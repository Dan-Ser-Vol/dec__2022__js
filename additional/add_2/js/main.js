const users = window.users

// За допомогою циклу вивести всю інформацію про користувачів використовуючи шаблон Template 1.1
//  за допомоги стилів, побудувати сітку по 2 об'єкта в лінію

document.write(` <div class="wrap">`)
for (let i = 0; i < users.length; i++) {
    const user = users[i];
    console.log(user)
    document.write(`<div class="user-block">`)
    document.write(`<h2>ID ${user.id}  NAME ${user.name}  USERNAME ${user.username} </h2>`)
    document.write(`<h3>${user.email}   ${user.phone}</h3>`)

    document.write(`<div class="">
                <p>City - ${user.address['city']}</p>
                <p>Street - ${user.address['street']}</p>
                <p>Suite - ${user.address['suite']}</p>
                <p>${user.address['zipcode']}</p>
            </div>`)
    document.write(`<div class="">
                <p>Name - ${user.company['name']}</p>
                <p>Catch - ${user.company['catchPhrase']}</p>
                <p>Bs - ${user.company['bs']}</p>
            </div>`)
    document.write(` </div>`)
}
document.write(`</div>`)








