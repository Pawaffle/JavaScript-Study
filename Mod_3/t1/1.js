let target = document.querySelector('#target')
let newItem = `\t<li>First item</li>\n\t<li>Second item</li>\n\t<li>Third item</li>\n`
target.innerHTML = newItem
target.className = 'my-list'

console.log(target.outerHTML)