// Declara um array vazio para armazenar as tarefas
let tarefas = [];

function adicionarTarefa() {
    // Recebe o valor do input e verifica se ele não está vazio
    const inputTarefa = document.getElementById("inputTarefa");
    let tarefa = inputTarefa.value.trim(); // trim() remove espaços em branco no início e no final de strings, o que é útil para evitar entradas vazias.
    const mensagem = document.getElementById("mensagem"); // Apenas para evitar repetir o mesmo código

    if (tarefa == "") {
        // Mostra mensagem de erro se o input estiver vazio
        let mensagemErro = "Digite uma tarefa para adicioná-la a sua lista!";
        mensagem.style.color = "#A34743";
        mensagem.textContent = mensagemErro;
    } else {
        // Mostra mensagem de sucesso
        let mensagemSucesso = "Tarefa adicionada com sucesso!";
        mensagem.style.color = "#28A745";
        mensagem.textContent = mensagemSucesso;

        // Adiciona a tarefa ao array de tarefas
        tarefas.push(tarefa);

        // Limpa a lista de tarefas antes de adicionar as novas tarefas
        renderizarTarefas()
    }
    // Limpa o input após adicionar a tarefa
    inputTarefa.value = "";

    // style.color é uma propriedade que altera a cor do texto de um elemento HTML.
    // textContent é uma propriedade que permite ler ou alterar o texto de um elemento e de seus filhos.
    // appendChild() adiciona um elemento como o último filho de outro elemento.
    // trim() é um método que remove os espaços em branco do início e do fim de uma string.
}

function renderizarTarefas() {
    // Cria um novo elemento de lista (li) e adiciona na lista de tarefas (ul)
    const listaTarefas = document.getElementById("listaTarefas");
    // Limpa a lista de tarefas antes de renderizar novamente
    listaTarefas.innerHTML = "";

    for (let i = 0; i < tarefas.length; i++) {
        let novaTarefa = document.createElement("li");
        novaTarefa.textContent = tarefas[i]; // Adiciona o texto da tarefa ao elemento li

        let botaoRemover = document.createElement("button");
        botaoRemover.className = "remover"; // Adiciona a classe "remover" ao botão
        botaoRemover.textContent = "Remover";
        botaoRemover.onclick = () => removerTarefa(i) // O arrow function é basicamente uma função resumida. Colocando o i aqui ele não perde o valor, pois a função é chamada quando o botão é clicado, note também que o i será armazenado na função de callback, ou seja, o valor de i será o mesmo quando a função for chamada.

        let botaoEditar = document.createElement("button");
        botaoEditar.className = "editar";
        botaoEditar.textContent = "Editar";
        botaoEditar.onclick = () => editarTarefa(i)

        novaTarefa.appendChild(botaoRemover);
        novaTarefa.appendChild(botaoEditar);
        listaTarefas.appendChild(novaTarefa);
    }
}

function removerTarefa(i) {
    tarefas.splice(i, 1); // Remove a tarefa do array de tarefas
    renderizarTarefas();
}

function editarTarefa(i) {
    let tarefaEditada = prompt("Edite a tarefa:")

    if (tarefaEditada.trim() != "") {
        tarefas[i] = tarefaEditada; // Atualiza a tarefa no array de tarefas
        renderizarTarefas();
    }
}

function limparLista() {
    tarefas.length = 0; // Limpa o array de tarefas
    renderizarTarefas(); // Renderiza a lista de tarefas novamente
    mensagem.textContent = "Lista limpa com sucesso!";
}