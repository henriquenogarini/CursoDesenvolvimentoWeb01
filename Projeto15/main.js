
let fruits = ['Banana', 'Abacate', 'Kiwi', 'Maça', 'Berry']
let numberList = document.getElementById('numberList')

for (i = 0; i < 5; i++){
    let listItem =  document.createElement('li')
    listItem.appendChild(document.createTextNode(fruits[i]))
    //listItem.textContent = 'Item ' + i
    numberList.appendChild(listItem)
}