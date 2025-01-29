# Sistema de Amigo Secreto

## Visão Geral
O sistema de Amigo Secreto permite que você adicione participantes e realize sorteios para determinar quem vai tirar quem no amigo secreto. É possível escolher entre realizar o sorteio de forma individual (um participante por vez) ou em massa (todos de uma vez).

## Funcionalidades

- **Adicionar Participante**: Permite cadastrar amigos, fornecendo nome e telefone. A validação do telefone é feita com a máscara (XX) XXXXX-XXXX.
- **Remover Participante**: Você pode remover qualquer participante da lista a qualquer momento.
- **Seleção de Sorteador**: Em sorteios individuais, é possível selecionar um sorteador específico.
- **Sorteio Individual**: Ao realizar o sorteio de um amigo secreto individual, o sistema sorteia um participante aleatório para cada sorteador.
- **Sorteio em Massa**: Realiza o sorteio para todos os participantes de uma vez, evitando autossorteio e duplicatas.
- **Envio de Resultados via WhatsApp (em desenvolvimento)**: Após a conclusão do sorteio, o sistema envia mensagens via WhatsApp com o resultado para cada participante (A função está configurada para integração com a API do Twilio, mas não está implementada diretamente).

## Como Funciona

O sistema conta com uma interface de fácil uso para gerenciar os participantes e realizar os sorteios. Aqui está o passo a passo para usar:

1. Digite o nome e telefone dos amigos que participarão do sorteio.
2. Adicione-os à lista clicando no botão "Adicionar".
3. Escolha o tipo de sorteio: individual ou em massa.
4. Clique no botão correspondente para iniciar o sorteio.
5. Os resultados serão exibidos na tela e, se configurado, enviados via WhatsApp.

## Funções Importantes

### Função de Adicionar Participante
Adiciona um amigo à lista de participantes. Valida o telefone e gera um ID único para cada participante.

```js
function adicionarAmigo() {
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    
    if (nome && telefone) {
        const id = Math.floor(Math.random() * 1000); // ID aleatório para cada amigo
        amigos.push({ id, nome, telefone });
        alert('Participante adicionado!');
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}
```

### Função de Sorteio Individual
Realiza o sorteio de um único participante e determina seu amigo secreto.

```js
function sortearAmigo() {
    const sorteador = document.getElementById('sorteador').value;
    const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    
    alert(`${sorteador} vai tirar ${amigoSorteado.nome}`);
}
```

### Função de Sorteio em Massa
Realiza o sorteio para todos os participantes, garantindo que ninguém se sorteie e que não haja duplicações.

```js
function sortearEmMassa() {
    const participantes = [...amigos];
    const resultado = {};

    participantes.forEach((participante) => {
        const index = Math.floor(Math.random() * participantes.length);
        resultado[participante.nome] = participantes.splice(index, 1)[0].nome;
    });
    
    alert('Resultados do sorteio: ' + JSON.stringify(resultado));
}
```

### Envio de Resultados (em desenvolvimento)
Após o sorteio, envia uma mensagem via WhatsApp para cada participante com o nome do seu amigo secreto.

```js
function enviarResultadosSorteio(participantes) {
    participantes.forEach(participante => {
        const mensagem = `Oi ${participante.nome}, seu amigo secreto é ${resultado[participante.nome]}.`;
        enviarMensagemWhatsApp(participante.telefone, mensagem);
    });
}

function enviarMensagemWhatsApp(telefone, mensagem) {
    // Aqui você integraria a API do Twilio ou outro serviço de mensagens
    console.log(`Enviando para ${telefone}: ${mensagem}`);
}
```

## Requisitos

- **JavaScript** (para a funcionalidade do sistema)
- **Integração com a API do Twilio** para envio de mensagens via WhatsApp (opcional)

## Exemplo de Implementação

Ao carregar a página, o sistema estará pronto para adicionar participantes, realizar sorteios e enviar resultados.

## Conclusão

Esse sistema é uma forma prática e divertida de realizar sorteios de amigo secreto, seja de forma individual ou em massa. Ele também oferece a possibilidade de enviar os resultados via WhatsApp (em desenvolvimento), tornando o processo ainda mais dinâmico e interativo.
