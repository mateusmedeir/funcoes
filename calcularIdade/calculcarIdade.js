function calcularIdade(anos){
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade`
}

const pessoa1 = {
    nome: 'João',
    idade: 20,
}
const pessoa2 = {
    nome: 'Ana',
    idade: 25,
}
const Animal = {
    nome: 'Paçoca',
    idade: 5,
    raça: 'Shih Tzu',
}

console.log(calcularIdade.apply(pessoa1, [5]))