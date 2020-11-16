
// Criar uma lista de frutas;

// 1. Alterar o valor do posição 1
let item2 =document.querySelectorAll('.list-item')[1];
item2.textContent = 'XUXU';

// 2. Alterar o html da posição 5, adicionar um span
let item4 = document.querySelectorAll('.list-item')[5];
item4.innerHTML = '<span>span</span>'

// 3. Alterar o CSS da posição 0 e adicionar background-color
let item0 = document.querySelectorAll('.list-item')[0];
item0.style.backgroundColor = 'yellow';

// 4. Remover o item da posição 0
item0.remove()

