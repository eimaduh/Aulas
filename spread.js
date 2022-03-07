//SPREAD OPERATOR

//ARAY criar dois arrays
let frutas = ['maçã', 'banana', 'melão', 'morango'];
let verduras = ['couve', 'alface', 'brócolis'];
// juntalos com [...] em outra variavél
let listaCompleta = [...frutas, ...verduras];

console.log(listaCompleta)

//OBJ LITERAL podem ser quantos quiser
let filme = {
 nome: 'Baby Drive',
 ano: 2016,
 ator: 'Ensel Elgort'
}
//colocar [...] dentro do objeto ao qual adicionar
let dorama = {
 titulo: 'Vicenzo',
 lancamento: 2020,
 duracacao: '16 ep',
 ...filme
}

console.log(dorama)

//FUNÇÃO
//colocamos qualquer informação desejada e quantas quisermos!
function letras(...parametro){
    console.log(parametro)
}

letras('a', 'f', 'h', 'z')

