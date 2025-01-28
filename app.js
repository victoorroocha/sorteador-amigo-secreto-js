let participantes = [];
let sorteios = []; // Lista para armazenar os sorteios realizados

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const nome = document.getElementById('amigo').value.trim();
    const telefone = document.getElementById('telefone').value.trim();

    // Validações
    if (nome === "" || telefone === "" || !validarTelefone(telefone)) {
        alert("Por favor, insira um nome e telefone válidos.");
        return;
    }

    // Cria o participante
    const participante = { nome, telefone, sorteado: false }; // Adicionando sorteado: false ao participante

    // Adiciona o participante à lista
    participantes.push(participante);

    // Limpa os sorteios anteriores caso houver.
    limparSorteiosEParticipantes();

    // Atualiza a tabela de participantes
    atualizarTabela();

    // Limpa a lista de sorteios exibida
    exibirSorteios();

    // Limpa os campos de input
    document.getElementById('amigo').value = '';
    document.getElementById('telefone').value = '';
}

// Função para validar o formato do telefone (XX) XXXXX-XXXX
function validarTelefone(telefone) {
    const regex = /^\(\d{2}\) \d{5}-\d{4}$/;
    return regex.test(telefone);
}

// Função para atualizar a tabela de participantes
function atualizarTabela() {
    const tabela = document.getElementById('listaParticipantes');
    tabela.innerHTML = '';

    participantes.forEach((participante, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${participante.nome}</td>
            <td>${participante.telefone}</td>
            <td><button onclick="removerParticipante(${index})">Remover</button></td>
        `;
        tabela.appendChild(row);
    });

    atualizarDropdown();
}

// Função para remover um participante da lista
function removerParticipante(index) {
    participantes.splice(index, 1); // Remove o participante

    // limpa o sorteio e reseta os participantes para um novo sorteio.
    limparSorteiosEParticipantes();
    
    atualizarTabela(); // Atualiza a tabela
}

// Função para atualizar o dropdown de sorteadores
function atualizarDropdown() {
    const dropdown = document.getElementById('sorteador');
    dropdown.innerHTML = '<option value="" disabled selected>Escolha o sorteador</option>';

    participantes.forEach(participante => {
        const option = document.createElement('option');
        option.value = participante.nome;
        option.textContent = participante.nome;
        dropdown.appendChild(option);
    });
}

// Função para sortear o amigo secreto
function sortearAmigo() {
    const sorteador = document.getElementById('sorteador').value;

    if (!sorteador) {
        alert("Por favor, selecione um participante para sortear.");
        return;
    }

    // Filtra os participantes que não são o sorteador e os já sorteados
    const participantesDisponiveis = participantes.filter(participante => participante.nome !== sorteador && !participante.sorteado);

    if (participantesDisponiveis.length < 1) {
        alert("Não há participantes disponíveis para sortear.");
        return;
    }

    // Sorteia um participante da lista de disponíveis
    const sorteado = participantesDisponiveis[Math.floor(Math.random() * participantesDisponiveis.length)];

    // Marca o participante como sorteado para evitar que seja sorteado novamente
    const participanteIndex = participantes.findIndex(participante => participante.nome === sorteado.nome);
    participantes[participanteIndex].sorteado = true;

    // Exibe o resultado do sorteio
    const resultadoElemento = document.getElementById('resultado');
    resultadoElemento.textContent = `${sorteador} sorteou: ${sorteado.nome}`;

    // Adiciona o sorteio à lista de sorteios
    sorteios.push(`${sorteador} saiu com ${sorteado.nome}`);
    exibirSorteios();

    // Remove o participante sorteador do dropdown
    const dropdown = document.getElementById('sorteador');
    const options = Array.from(dropdown.options);
    options.forEach(option => {
        if (option.value === sorteador) {
            option.remove();
        }
    });

    // Limpa o resultado após 5 segundos
    setTimeout(() => {
        resultadoElemento.textContent = '';
    }, 5000);
}

// Função para sorteio em massa com verificação de duplicatas e autossorteio
function sortearEmMassa() {
    // Filtra os participantes que ainda não foram sorteados
    let participantesDisponiveis = participantes.filter(participante => !participante.sorteado);

    if (participantesDisponiveis.length < 2) {
        alert("Não há participantes suficientes para realizar o sorteio em massa.");
        return;
    }

    // Embaralha a lista de participantes disponíveis
    participantesDisponiveis = participantesDisponiveis.sort(() => Math.random() - 0.5);

    // Lista para armazenar os sorteios e verificar se há nomes duplicados
    const sorteiosRealizados = [];

    // Realiza o sorteio para cada participante
    participantesDisponiveis.forEach(participante => {
        // Filtra os participantes para que ninguém se sorteie
        const participantesDisponiveisParaSorteio = participantesDisponiveis.filter(p => p !== participante && !sorteiosRealizados.includes(p.nome));

        if (participantesDisponiveisParaSorteio.length === 0) {
            alert("Ocorreu um erro no sorteio. Tente novamente.");
            return;
        }

        // Sorteia um participante de forma aleatória
        const sorteado = participantesDisponiveisParaSorteio[Math.floor(Math.random() * participantesDisponiveisParaSorteio.length)];

        // Registra o sorteio
        sorteiosRealizados.push(sorteado.nome);
        sorteios.push(`${participante.nome} saiu com ${sorteado.nome}`);

        // Marca o participante e o sorteado como sorteados
        participante.sorteado = true;
        sorteado.sorteado = true;
    });

    // Exibe os resultados do sorteio
    exibirSorteios();
}


// Função para exibir a lista de sorteios
function exibirSorteios() {
    const sorteiosList = document.getElementById('sorteiosList');
    sorteiosList.innerHTML = ''; // Limpa a lista antes de adicionar novos itens

    sorteios.forEach(sorteio => {
        const li = document.createElement('li');
        li.textContent = sorteio;
        sorteiosList.appendChild(li);
    });
}

// Função para aplicar a máscara de telefone em tempo real
function aplicarMascaraTelefone(input) {
    let telefone = input.value.replace(/\D/g, ''); // Remove tudo que não for número
    if (telefone.length <= 2) {
        telefone = telefone.replace(/(\d{2})/, '($1');
    } else if (telefone.length <= 7) {
        telefone = telefone.replace(/(\d{2})(\d{5})/, '($1) $2');
    } else {
        telefone = telefone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    }
    input.value = telefone;
}

// Função para alternar entre o sorteio em massa e 1 a 1
function toggleSorteioTipo() {
    const tipoSorteio = document.getElementById('tipoSorteio').checked;
    const dropdownWrapper = document.getElementById('dropdownWrapper');
    const sorteioIndividualButton = document.getElementById('sorteioIndividualButton');
    const sorteioMassaButton = document.getElementById('sorteioMassaButton');

    // Limpar os sorteios e resetar os participantes pois se trocar decidir trocar a opção para sorteio individual, deve-se realizar todo sorteio novamente.
    limparSorteiosEParticipantes();

    // Esconde o dropdown se o sorteio em massa for selecionado
    if (tipoSorteio) {
        dropdownWrapper.style.display = "none"; // Esconde o dropdown
        sorteioIndividualButton.style.display = "none"; // Esconde o botão de sorteio individual
        sorteioMassaButton.style.display = "block"; // Exibe o botão de sorteio em massa
    } else {
        dropdownWrapper.style.display = "block"; // Mostra o dropdown
        sorteioIndividualButton.style.display = "block"; // Exibe o botão de sorteio individual
        sorteioMassaButton.style.display = "none"; // Esconde o botão de sorteio em massa
    }
}

// Função para garantir que o estado inicial da interface esteja correto
window.onload = function() {
    toggleSorteioTipo(); // Chama a função ao carregar a página para garantir que o estado inicial esteja correto
};



function limparSorteiosEParticipantes() {
    // Verificar se há sorteios realizados
    if (sorteios.length > 0) {
        // Limpar a lista de sorteios
        sorteios = [];
        
        // Resetar o status "sorteado" de todos os participantes
        participantes.forEach(participante => {
            participante.sorteado = false;
        });

        // Exibir a lista de sorteios novamente (vai ficar vazia)
        exibirSorteios();
    }
}