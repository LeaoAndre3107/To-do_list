//sempre dividir os passo nos mais detalhados possiveis, e nas microtarefas.

const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const listaCompleta = document.querySelector('.list-task')




let minhaListaDeItens = []
// areio, Função de armazenamento de dados dentro do JS. podendo assim guardar todas as informações inseridas...



function AdicionarNovaTarefa(){
    if (input.value.trim() !== ''){ //Aqui, o if verifica se o valor do campo de input após aplicar o método trim() (que remove espaços em branco no início e no final da string) é diferente de uma string vazia. Se for diferente, o novo objeto é adicionado à lista, caso contrário, nada acontece.
        minhaListaDeItens.push({tarefa: input.value,
        concluida: false})
    // Aqui é onde o botão vai armazenar as informações inseridas no campo e alimentanto o (let) acima.
    input.value=''
    MostrarTarefas()
} }

function MostrarTarefas(){
    let novaLi= ''
    minhaListaDeItens.forEach((item, index) => {
        novaLi = novaLi + ` 
        <li class="task ${item.concluida && 'done'}"> 
            <img src="imagens/checked.png" alt="check-na-tarefa" onclick="concluirTarefa(${index})">
            <p>${item.tarefa}</p>
            <img src="imagens/trash.png" alt="tafera-para-o-lixo" onclick="deletarItem(${index})">
        </li>
     ` })

     listaCompleta.innerHTML = novaLi

     localStorage.setItem('Lista', JSON.stringify (minhaListaDeItens))
}


function deletarItem(index){
    minhaListaDeItens.splice(index, 1)
    MostrarTarefas()
}

function concluirTarefa(index){
    minhaListaDeItens[index].concluida = !minhaListaDeItens[index].concluida

 MostrarTarefas()
}

function recarregarTarefas(){
    const tarefasDolocalStorage = localStorage.getItem('Lista')
    if (tarefasDolocalStorage){
    minhaListaDeItens = JSON.parse(tarefasDolocalStorage)
    } 
    MostrarTarefas()
}


recarregarTarefas()
button.addEventListener('click' ,AdicionarNovaTarefa)

