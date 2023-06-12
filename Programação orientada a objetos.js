// const pessoa = {
//     nome: 'João',
//     sobrenome: 'Silva',
//     idade: 20,
//     "altura da pessoa": 1.78,

//     saudacao: function(){
//         console.log('Olá, ' +this.nome+' '+this.sobrenome+'!')
//     }
// }

// console.log(pessoa.nome)
// console.log(pessoa.sobrenome)
// pessoa.saudacao()

// console.log(Object.keys(pessoa))
// console.log(Object.values(pessoa))

// var propriedadeNumerica = Object.values(pessoa).filter(function(valor){
//     return typeof valor === "number"
// })

// console.log(propriedadeNumerica)

// const animal = {
//     tipo: "gato",
//     nome: "Fábio",
//     // sons(){console.log("miau")}
//     sons() {return "miau"}
// }

// console.log(animal.sons())

// const produtos = [
//     {id: 1, nome: "Camiseta", valor: 29.99},
//     {id: 2, nome: "Calça", valor: 89.99},
//     {id: 3, nome: "Tênis", valor: 159.99}
// ]

// var produtoEncontrado = produtos.find(function(produto){
//     return produto.id === 2
// })

// console.log(produtoEncontrado.id+': '+produtoEncontrado.nome+' = '+produtoEncontrado.valor)

const readline = require('readline-sync')

const carro = {}

carro.marca = "Toyota"
carro.placa = "ASD123"

// console.log(carro)

// delete carro.placa

// console.log(carro)

var marcaUsuario = readline.question("Digite a marca do carro: ")
carro.marca = marcaUsuario
console.log(carro)