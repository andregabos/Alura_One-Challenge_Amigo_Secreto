//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = []; // Array para armazenar os nomes

//Implementar uma função para agregar amigos
function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    
    // Limpa o valor digitado de espaços em branco
    const nome = inputAmigo.value.trim();
    
    // Verifica se o nome não está vazio e o adiciona ao array
    if (nome !== '') {
        amigos.push(nome);
        inputAmigo.value = '';
        
        atualizarListaAmigos();

    } else {
        alert('Por favor, insira um nome.');
    }

    console.log(amigos);
}

// Implementar uma função para atualizar a lista de amigos
function atualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    
    // Adiciona cada amigo como um item da lista
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Implementar uma função para sortear os amigos
function sortearAmigo() {
    // Validar se há amigos disponíveis
    if (amigos.length === 0) {
        alert('Adicione pelo menos um amigo antes de sortear!');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    
    // Mostrar o resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>Amigo sorteado: <strong>${amigoSorteado}</strong></li>`;
}