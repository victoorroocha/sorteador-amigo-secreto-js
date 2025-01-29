<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>README - Sistema de Amigo Secreto</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            color: #333;
            margin: 0;
            padding: 0;
        }

        header {
            background-color: #4B69FD;
            color: white;
            padding: 20px;
            text-align: center;
        }

        section {
            padding: 20px;
        }

        h1 {
            font-size: 2.5rem;
        }

        h2 {
            font-size: 1.5rem;
            margin-top: 20px;
        }

        p {
            font-size: 1rem;
            line-height: 1.6;
            margin-bottom: 10px;
        }

        code {
            background-color: #f1f1f1;
            padding: 5px;
            border-radius: 3px;
            font-family: "Courier New", monospace;
        }

        pre {
            background-color: #f1f1f1;
            padding: 10px;
            border-radius: 3px;
            font-family: "Courier New", monospace;
            overflow-x: auto;
        }

        ul {
            margin-left: 20px;
        }
    </style>
</head>
<body>
    <header>
        <h1>README - Sistema de Amigo Secreto</h1>
    </header>

    <section>
        <h2>Visão Geral</h2>
        <p>O sistema de Amigo Secreto permite que você adicione participantes e realize sorteios para determinar quem vai tirar quem no amigo secreto. É possível escolher entre realizar o sorteio de forma individual (um participante por vez) ou em massa (todos de uma vez).</p>

        <h2>Funcionalidades</h2>

        <ul>
            <li><strong>Adicionar Participante</strong>: Permite cadastrar amigos, fornecendo nome e telefone. A validação do telefone é feita com a máscara (XX) XXXXX-XXXX.</li>
            <li><strong>Remover Participante</strong>: Você pode remover qualquer participante da lista a qualquer momento.</li>
            <li><strong>Seleção de Sorteador</strong>: Em sorteios individuais, é possível selecionar um sorteador específico.</li>
            <li><strong>Sorteio Individual</strong>: Ao realizar o sorteio de um amigo secreto individual, o sistema sorteia um participante aleatório para cada sorteador.</li>
            <li><strong>Sorteio em Massa</strong>: Realiza o sorteio para todos os participantes de uma vez, evitando autossorteio e duplicatas.</li>
            <li><strong>Envio de Resultados via WhatsApp</strong>: Após a conclusão do sorteio, o sistema envia mensagens via WhatsApp com o resultado para cada participante (A função está configurada para integração com a API do Twilio, mas não está implementada diretamente).</li>
        </ul>

        <h2>Como Funciona</h2>

        <p>O sistema conta com uma interface de fácil uso para gerenciar os participantes e realizar os sorteios. Aqui está o passo a passo para usar:</p>
        <ol>
            <li>Digite o nome e telefone dos amigos que participarão do sorteio.</li>
            <li>Adicione-os à lista clicando no botão "Adicionar".</li>
            <li>Escolha o tipo de sorteio: individual ou em massa.</li>
            <li>Clique no botão correspondente para iniciar o sorteio.</li>
            <li>Os resultados serão exibidos na tela e, se configurado, enviados via WhatsApp.</li>
        </ol>

        <h2>Funções Importantes</h2>
        <h3>Função de Adicionar Participante</h3>
        <p>Adiciona um amigo à lista de participantes. Valida o telefone e gera um ID único para cada participante.</p>
        <pre><code>function adicionarAmigo() { ... }</code></pre>

        <h3>Função de Sorteio Individual</h3>
        <p>Realiza o sorteio de um único participante e determina seu amigo secreto.</p>
        <pre><code>function sortearAmigo() { ... }</code></pre>

        <h3>Função de Sorteio em Massa</h3>
        <p>Realiza o sorteio para todos os participantes, garantindo que ninguém se sorteie e que não haja duplicações.</p>
        <pre><code>function sortearEmMassa() { ... }</code></pre>

        <h3>Envio de Resultados</h3>
        <p>Após o sorteio, envia uma mensagem via WhatsApp para cada participante com o nome do seu amigo secreto.</p>
        <pre><code>function enviarResultadosSorteio(participantes) { ... }</code></pre>

        <h2>Requisitos</h2>
        <ul>
            <li>JavaScript (para a funcionalidade do sistema)</li>
            <li>Integração com a API do Twilio para envio de mensagens via WhatsApp (opcional)</li>
        </ul>

        <h2>Exemplo de Implementação</h2>
        <p>Ao carregar a página, o sistema estará pronto para adicionar participantes, realizar sorteios e enviar resultados.</p>

        <h2>Conclusão</h2>
        <p>Esse sistema é uma forma prática e divertida de realizar sorteios de amigo secreto, seja de forma individual ou em massa. Ele também oferece a possibilidade de enviar os resultados via WhatsApp, tornando o processo ainda mais dinâmico e interativo.</p>
    </section>
</body>
</html>
