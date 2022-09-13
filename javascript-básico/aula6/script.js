/*

string
number
boolean
array
object
undefined
null

*/

let nome = 'Jair'  // string
console.log(nome)

//string - concatenada
let sobreNome = 'de Sousa'

//console.log(nome + ' ' +sobreNome)

//string literal
console.log(`${nome} ${sobreNome}`)

//Number
let idade = 47
console.log(idade)

console.log(idade + 10)


//Number Float
let porcentagem = 10.2

console.log(porcentagem + '%')

//Boolean(true ou false)

let mairdeIdade = true

console.log(mairdeIdade)

let menorDeIdade = false
console.log(menorDeIdade)

//Array

let habilidades = ['JavaScript', 'PHP', 'Python']
console.log(habilidades)

console.log(habilidades.length)

console.log(habilidades[2])
console.log(habilidades[4])

// Object

let pessoa = {
    nome: 'Fulano',
    sobrenome: 'da Silva',
    idade: 25,
    habilidades: ['c++', 'c#', 'python']

}

console.log(pessoa)
console.log(pessoa.sobrenome)

//Undefined

let endereco
console.log(endereco)

//Null
let cidade = null
console.log(cidade)

//JSON (JAVASCRIPT OBJECT NOTATION)
