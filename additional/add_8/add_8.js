// написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль
const attributes = {
    id: [],
    classes: []
}
const explorer = (htmlElem) => {
    if (htmlElem.getAttribute('id')) {
        attributes.id.push(htmlElem.getAttribute('id'))
    }
    if (htmlElem.getAttribute('class')) {
        attributes.classes.push(htmlElem.getAttribute('class'))
    }
    let children = htmlElem.children
    if (children.length !== 0) {
        for (const child of children) {
            explorer(child)
        }
    }
}
explorer(
    document.body
)
console.log(attributes);