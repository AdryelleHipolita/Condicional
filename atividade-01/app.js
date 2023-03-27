const nomeAluno = document.getElementById('nomeAluno')
const inNota1 = document.getElementById('inNota1')
const inNota2 = document.getElementById('inNota2')
const outMediaAluno = document.getElementById('outMediaAluno')
const outSituacaoAluno = document.getElementById('outSituacaoAluno')
const outMediaTurma = document.getElementById('outSituacaoAluno')

const mediaTurma = []

const btnCalcularMedia = document.getElementById('btnCalcularMedia')
btnCalcularMedia.addEventListener('click', () => {
    let nome = nomeAluno.value
    let nota1 = Number(inNota1.value)
    let nota2 = Number(inNota2.value)

    if(nota1 > 10 || isNaN(nota1) || nota2 > 10 || isNaN(nota2)){
        alert('Digite um número válido')
    } else {

        let media = (nota1 + nota2) / 2
        console.log(media)
        mediaTurma.push(media)
        console.log(mediaTurma)
        outMediaAluno.textContent = `Média do Aluno ${media.toFixed}`

        outMediaAluno.textContent = `Média das Notas ${media.toFixed(2)}`

        if(media >= 7 && media <= 10){
            outSituacaoAluno.textContent = `Parabéns ${nome}! Você foi Aprovado`
            outSituacaoAluno.style.color = `blue`
        } else if(media >= 3 && media < 3){
            outSituacaoAluno.textContent = `Atenção ${nome}! Você ficou em recuperação`
            outSituacaoAluno.style.color = `green`
        } else if(media >= 3 && media < 3){
            outSituacaoAluno.textContent = `Ops ${nome}! Você foi Reprovado`
            outSituacaoAluno.style.color = `red`
        }

    }
})

const btnCalcularMediaTurma = document.getElementById('btnCalcularMediaTurma')
btnCalcularMedia.addEventListener('click', () => {
    let notas = 0 

    for(let i = 0; i < mediaTurma.length; i++){
        notas = notas = mediaTurma[i]
    }

    outMediaTurma.textContent = `A média da Turma ${(notas/mediaTurma.length).toFixed(2)}`

})


