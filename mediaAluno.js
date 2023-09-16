/*
  Solicitar o nome do aluno e as 3 notas
  do bimestre calcular a média daquele aluno.

  A média positiva deverá ser maior que 6

  Se o aluno passou no bimestre, dar os 
  parabéns.

  Se o aluno não passou no bimestre, 
  motivar o aluno a dar seu melhor na prova
  de recuperação.

  Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota
*/

let name = prompt('Nome do aluno')

let notaOne = prompt('Qual a primeira nota do aluno?')
let notaTwo = prompt('Qual a segunda nota do aluno?')
let notaTree = prompt('Qual a terceira nota do aluno?')

notaOne = Number(notaOne)
notaTwo = Number(notaTwo)
notaTree = Number(notaTree)

let mediaAluno = ((notaOne + notaTwo + notaTree) / 3).toFixed(2)


if (mediaAluno >= 6) {
    alert('Parabéns ' + name + ' você passou com a media: ' + mediaAluno)
} else {
    alert('Porra ' + name + ', vai estudar seu tanso, enfia no cu essa media: ' + mediaAluno)
}
