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

    let i = 0;
    for (i; i < tarefas.length; i++) {
        let novaTarefa = document.createElement("li");
        novaTarefa.textContent = tarefas[i]; // Adiciona o texto da tarefa ao elemento li
        listaTarefas.appendChild(novaTarefa);
    }
}