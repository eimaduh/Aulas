//desetruturação em ARRAY
let numeros = [1, 2, 3, 4, 5]

//cada palavra corrresponde a uma posição no array
//primeiro[0], segundo[1] ...
let [primeiro, segundo, terceiro, quarto, quinto] = numeros
console.log(segundo)



//desestruturação em OBJETO LITERAL
let pessoa = {
    nome: 'Maduh',
    idade: 19,
    altura: 1.65,
    peso: 55,
    comidaFav: 'Pizza'
};

//aqui podemos extrair sem seguir possição apenas chamando o objeto
//se ele não existir devolve indefinido
let {nome, altura, peso} = pessoa
console.log(altura)