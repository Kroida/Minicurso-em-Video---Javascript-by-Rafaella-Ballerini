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
        // Cria um novo elemento de lista (li) e adiciona na lista de tarefas (ul)
        const listaTarefas = document.getElementById("listaTarefas");
        let novaTarefa = document.createElement("li");
        novaTarefa.textContent = tarefa;
        listaTarefas.appendChild(novaTarefa);

        // Mostra mensagem de sucesso
        let mensagemSucesso = "Tarefa adicionada com sucesso!";
        mensagem.style.color = "#28A745";
        mensagem.textContent = mensagemSucesso;
    }
    // Limpa o input após adicionar a tarefa
    inputTarefa.value = "";

    // style.color é uma propriedade que altera a cor do texto de um elemento HTML.
    // textContent é uma propriedade que permite ler ou alterar o texto de um elemento e de seus filhos.
    // appendChild() adiciona um elemento como o último filho de outro elemento.
    // trim() é um método que remove os espaços em branco do início e do fim de uma string.
}