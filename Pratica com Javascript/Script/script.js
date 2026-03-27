let titulo = document.getElementById("titulo");
let tarefas = [];
titulo.innerHTML = "Lista Dinâmica com JavaScript";

function atualizaContador() {
    let contador = document.getElementById("contador");
    contador.innerHTML = "Tarefas: " + tarefas.length;
}

function adicionarTarefa() {
    let input = document.getElementById("inputTarefa");

    if(input.value === "") {
        alert("Digite uma tarefa válida");
        return;
    }
    tarefas.push(input.value);
    input.value = "";

    renderizarLista();
    atualizaContador();
}

function limparTarefas() {
    tarefas = [];
    renderizarLista();
    atualizaContador();
}

function renderizarLista() {
    let lista = document.getElementById("listaTarefas");
    lista.innerHTML = "";

    for (let i = 0; i < tarefas.length; i++) {
        let item = document.createElement("li");
        item.innerHTML = tarefas[i];

        item.onclick = function() {
            tarefas.splice(i, 1);
            renderizarLista();
        }

        lista.appendChild(item);
    }
}

