function adicionarTarefa() {
    let mensagem = "Tarefa adicionada com sucesso!";
    document.getElementById("mensagem").textContent = mensagem;

    let inputTarefa = document.getElementById("inputTarefa"); // Isso é o campo de entrada
    let tarefa = inputTarefa.value; // Isso é o valor do campo de entrada

    let listaTarefas = document.getElementById("listaTarefas"); // Isso é a lista de tarefas
    let novaTarefa = document.createElement("li"); // Isso cria um novo elemento de lista

    novaTarefa.textContent = tarefa;

    listaTarefas.appendChild(novaTarefa); // Isso adiciona a nova tarefa à lista de tarefas

    inputTarefa.value = ""; // Isso limpa o campo de entrada após adicionar uma tarefa
}