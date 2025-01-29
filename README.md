Amigo Secreto - Sistema de Sorteio Online
Este é um sistema de Amigo Secreto desenvolvido em HTML, CSS e JavaScript. Ele permite que você organize um sorteio de amigo secreto de forma prática e dinâmica, com a opção de adicionar participantes, realizar sorteios individuais ou em massa, e enviar os resultados via WhatsApp.

Funcionalidades
1. Adicionar Participantes
O sistema permite que você adicione participantes com nome e número de telefone. Cada participante será identificado de forma única através de um ID gerado automaticamente.
2. Realizar Sorteio
Sorteio Individual: Você pode escolher um participante para realizar o sorteio, e o sistema irá sorteá-lo para um outro participante ainda não sorteado.
Sorteio em Massa: O sistema pode realizar o sorteio para todos os participantes de uma vez, garantindo que ninguém se sorteie com si mesmo.
3. Gerenciamento de Participantes
Você pode adicionar e remover participantes da lista.
O sistema impede que o mesmo participante seja sorteado mais de uma vez.
4. Exibição dos Resultados
O sistema exibe uma lista com os resultados dos sorteios realizados.
A lista é atualizada dinamicamente conforme o sorteio é feito.
5. Envio de Resultados via WhatsApp
Ao final do sorteio, o sistema envia automaticamente uma mensagem via WhatsApp para cada participante, informando quem é seu amigo secreto.
Para isso, a funcionalidade de Twilio API está preparada (embora comentada) para enviar as mensagens.
6. Máscara de Telefone
A máscara de telefone é aplicada automaticamente no campo de entrada de telefone para garantir que os números sejam inseridos no formato correto.
Como Usar
1. Clonar o Repositório
Clone este repositório para o seu computador:

bash
Copiar
git clone https://github.com/seu-usuario/amigo-secreto.git
2. Instalar Dependências
Este projeto não requer dependências externas além das já inclusas no código (como a API do Twilio, caso queira enviar as mensagens pelo WhatsApp).
3. Abrir o Projeto
Abra o arquivo index.html no seu navegador para começar a usar o sistema.
4. Adicionando Participantes
Preencha o campo "Nome" e "Telefone" e clique em "Adicionar". O participante será adicionado à lista.
5. Realizando o Sorteio
Sorteio Individual: Selecione um sorteador e clique no botão "Sortear Amigo".
Sorteio em Massa: Marque a opção "Sorteio em massa" e clique em "Sortear Todos".
6. Visualizando os Resultados
A lista de sorteios será exibida abaixo dos botões de sorteio, mostrando quem foi sorteado por quem.
7. Enviando os Resultados via WhatsApp
Caso queira enviar os resultados para os participantes via WhatsApp, você pode configurar a API do Twilio (código comentado). Nota: Para isso, você precisa de uma conta no Twilio.
8. Remover Participantes
Caso deseje remover um participante da lista, clique no botão "Remover" na tabela de participantes.
Estrutura de Arquivos
index.html: O arquivo principal HTML que contém a interface do usuário.
style.css: O arquivo de estilos CSS para o layout da página.
app.js: O arquivo JavaScript que contém toda a lógica do sistema.
assets/: Pasta contendo imagens e outros recursos estáticos, como a imagem de cabeçalho.
Tecnologias Usadas
HTML5: Estrutura da página e elementos básicos.
CSS3: Estilização responsiva e interatividade da página.
JavaScript: Lógica para adicionar, remover participantes, realizar sorteios e exibir os resultados.
API Twilio (comentada): Para envio de mensagens via WhatsApp (necessário configurar o Twilio).
Contribuições
Sinta-se à vontade para contribuir com melhorias ou correções. Se você encontrou um bug ou tem uma sugestão, abra uma issue ou faça um pull request.
