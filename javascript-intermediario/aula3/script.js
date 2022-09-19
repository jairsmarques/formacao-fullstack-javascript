
//Seletor po ID
document.querySelector('#titulo').innerHTML = '<em>Exemplo</em>'

//Seletor por tag
document.querySelector('a').innerText = '<b>teste ancora</b>'// não funciona a tag

//Seleciona todos os elementos
document.querySelectorAll('a')


//Selecinando mais de 1 item por tag

let ancoras = document.querySelectorAll ('a')

ancoras.forEach(function(elemento){//Função aninoma / calback
    elemento.innerHTML = 'teste'
})

//Selecinando mais de 1 item por classe
let boxes = document.querySelectorAll('.box')

boxes.forEach(function(box, index){
    box.innerHTML = 'box ' + index
})