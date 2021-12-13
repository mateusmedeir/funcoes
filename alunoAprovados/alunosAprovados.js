const alunos = [
    {
        nome: 'Clara',
        nota: 7,
        turma: '1A'
    },
    {
        nome: 'João',
        nota: 5,
        turma: '1A'
    },
    {
        nome: 'Roberto',
        nota: 8,
        turma: '2B'
    },
    {
        nome: 'Ana',
        nota: 3,
        turma: '2B'
    }
]

function alunosAprovados(alunos, media){
    let aprovados = []
    for(let i in alunos){
        const {nota, nome} = alunos[i]
        if(nota >= media){
            aprovados.push(nome)
        }
    }
    return aprovados
}

console.log(alunosAprovados(alunos, 7))