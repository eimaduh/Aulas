function nomeCompleto(nome, sobrenome){
return nome + ' ' +sobrenome;
}

function saudar(nome, sobrenome, callback){
return 'Olá ' +callback(nome, sobrenome) +'!';
}

console.log(saudar('João', 'Neves', nomeCompleto));
//modificação
