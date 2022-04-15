const alunos = ['Igor', 'Joma'] // Lista 1
const nota = [10, 7] // Lista 2

let lista = [alunos, nota] //Lista que será acessada por meio do console.log(), lembrando que você pode usar qualquer 1 das 3 variáveis que o JS disponibiliza para criá-la(const, let ou var).

console.log(`${lista[0][1]} sua nota é ${lista[1][1]}`) // Aqui você entrará na lista let criada e por meio do index da mesma você manipulará oque será apresentado ao rodar o progarma.