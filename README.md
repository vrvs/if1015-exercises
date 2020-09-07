# Exercises - IF1015

### Exercise 1 - Sockets

##### Exercício

1. Semelhante ao exemplo do vídeo acima, crie uma aplicação console que funcionará como chat
ponto a ponto, onde um cliente utiliza socket para se conectar a um Servidor. Tanto no cliente como no servidor será possível digitar mensagens do chat a partir do console.

![Example 1](exercise-01-sockets/1/terminal_example.png)

2. Baseado no exemplo anterior, crie uma nova versão para o chat, desta vez com suporte a conexão simultânea de vários clientes. Agora o servidor não necessita mais receber texto do console. Ele será apenas o mediador das mensagens entre os vários clientes conectados. Alguns requisitos:
     
    a. O servidor deve pedir ao usuário cliente para digitar um nome de modo que as mensagens de cada usuário possam ser identificadas.

    b. As mensagens enviadas por um cliente são replicadas para todos os outros clientes. Exemplo hipotético de conversação:
    
        Alex: Muito bom esse servidor.
        Ze: vsf muito complicado programar com sockets
        Maria: Pra mim foi facinho. Vcs são enrolados.
        Alex: kkkkk
        Ze: LOL

![Example 2](exercise-01-sockets/2/terminal_example.png)

##### Perguntas para discussão
1. Quais as principais dificuldades?
2. Quais as principais diferenças entre a implementação da questão 1 e da questão 2?
3. Como gerenciar as conexões entre clientes na questão 2?
4. Como identificar as mensagens e os remetentes para seguir a formatação do exemplo?
