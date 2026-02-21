
<img src="/assets/articles/mensageria/mensageria.png" width="500" alt="mensageriabase">

## Entendendo a problemática

Primeiro comecemos imaginando um problema específico e em como poderíamos resolver:

> [!NOTED] Problema
> 1. Temos um sistema de vendas online e nele, possuímos um serviço no back-end que armazena produtos em um banco de dados e que precisa integrar informações de preço e quantidade junto ao front-end;
> 2. O outro serviço que temos é a aplicação front-end, que simplificadamente, mostrará produtos com valores e informações atualizados e também enviará para o back-end informações de venda;
> 3. O sistema realiza operações constantemente, resultando num fluxo grande de informações diversas.


Ilustrando a questão de forma bem básica, ficaria assim:

<img src="/assets/articles/mensageria/mensageria1.png" width="500" alt="mensageriabase">

Se pararmos e pensarmos rapidamente, parece um problema bem simples, basta montar um controller para realizar as requisições entre o front-end e o back-end junto a persistência dos dados no banco.

O grande ponto vem se começarmos a analisar pontos de possíveis problemas, pois podemos identificar um de extrema importância:

> 1. *E se algum dos serviços ficarem indisponíveis, como seria o tratamento dos dados?*
> 2. *Em caso do back-end ficar indisponível, como as informações vindas do front-end seriam persistidas no banco? Perderíamos todas as informações e consultas de venda?*

Existem diversas possibilidades de problemáticas para esse caso. E claro, você pode pensar em diversas resoluções também, mas aqui nós focaremos na utilização da mensageria.

Voltando ao ponto: algumas das possibilidades que poderíamos abordar o problema são:
1. Analisar o retorno do status code [[HTTP]] e fazer uma tratativa em cima disso
2. Tentar utilizar algum framework de [[Retry]] para continuar realizando tentativas

> Mas por que não agimos antes do problema acontecer, ao invés de esperar ele acontecer para realizar uma ação?

E é aí que podemos começar a pensar na mensageria, pois ela nos permitiria criar um sistema baseado em eventos, dando a oportunidade de troca de informações assíncronas e garantindo mais resiliência do sistema.

## Introdução à Mensageria

Olhe o seguinte diagrama sem eu lhe dar nenhuma informação a mais:

<img src="/assets/articles/mensageria/mensageria2.png" width="500" alt="mensageriabase">

*Alguma coisa faz sentido? O que seria esse "Message Broker" que está entre os dois serviços? Que tipo de informação é essa de "Event"?*

Para responder essas perguntas, pensemos: Já que temos por base o pensamento de que é melhor resolver o problema antecipando ele ao invés de esperar ele acontecer, caímos na questão de: 

- é melhor  seguir uma linha de `coisa X só acontece com garantia da coisa Y ter acontecido` do que
- ``coisa X e Y acontecem e, caso surja algum problema, é realizado o tratamento``;

E para isso surge a ideia do que estamos falando aqui. O objetivo principal é ter uma forma em que eu consiga garantir que a coisa X não dependa diretamente do que a coisa Y tenha feito. 

Mesmo que seja bem claro, quando me refiro a "coisa X" ou "coisa Y", estou falando dos serviços.

> [!question] Questionamento
> *Ué, mas os serviços não se comunicam? Eles não devem depender diretamente um do outro?*

Sim e não. Eles se comunicam, mas **eles não precisam necessariamente serem síncronos**. Eles não precisam estar trocando informações exatamente a todo momento para que funcione corretamente. Na verdade isso poderia resultar facilmente em problema de perda de dados e informações - que é exatamente o que estamos querendo tratar aqui.


### Paradigma orientado a eventos

Para isso então, surge o paradigma orientado a eventos, onde nós preparamos nosso sistema para que funcione a partir de determinadas situações acontecerem. Ou seja, segue um exemplo:

- Quando nosso front-end registra uma venda, ele aciona um evento de venda
- Só a partir daí nosso back-end irá buscar essa informação para tratar e persistir no banco, ao invés de ficar a todo momento buscando.

> Ok, compreendi, mas como isso funcionaria na prática?

## Entendendo o sistema

Agora que entendemos a base da questão, precisamos montar o sistema para tal. Nós precisamos fazer com que os nossos serviços tenham funcionalidades que possam acionar o evento.

É daí que surge o nosso amigo ali: `Message Broker`.

### Message Broker

O message broker é um servidor de mensagens. É o cara que vai guardar as mensagens que os serviços irão enviar, ou seja, isso permitirá que serviços *produzam* e também *consumam* essas mensagens.

- A partir disso descobrimos mais outros dois caras: **Producer** e **Consumer**.

### Producer e Consumer

Depois da explicação acima pode ser que você já tenha até entendido o que eles fazem, mas para garantir, segue:

**Producer**: o cara que envia a mensagem para o message broker, ou seja, a aplicação que lança na queue.

**Consumer**: o cara que vai ao message broker e verifica se existe alguma mensagem para que ele consuma e execute alguma ação.


Uma visualização mais bem elaborada pode ser vista abaixo:

<img src="/assets/articles/mensageria/mensageria3.png" width="500" alt="mensageriabase">


## Avançando na problemática

Voltando, nosso diagrama na verdade ficaria mais condizente com algo assim:

<img src="/assets/articles/mensageria/mensageria4.png" width="500" alt="mensageriabase">


Vamos esclarecer agora o fluxo para tentar deixar compreensível o máximo possível.

Os serviços agora se comunicam via mensagem, ou seja, quando um dos serviços executa uma ação o *Producer* desse serviço envia a mensagem para a fila no Message Broker. Enquanto isso, o *Consumer* do outro serviço sempre estará atento olhando na fila, então quando uma mensagem for identificada ele utilizará a mensagem para executar uma outra ação pré-determinada.

> Uma mensagem pode conter uma requisição, uma resposta ou um evento.

### Exemplo

Trazendo para um exemplo prático:

- Imagine que uma venda foi realizada e o estoque de um produto deve ser alterado no banco, mas o nosso serviço back-end ficou fora do ar. Num cenário clássico teríamos nossa informação possivelmente sendo perdida ou até teríamos que montar tratamentos para isso.
- Com nosso sistema implementado, essa informação de alteração do estoque ficaria na fila até que o serviço de back-end voltasse ao normal. Quando voltasse ao normal, buscaria ele busca a informação na fila e executa normalmente o procedimento.

### Desacoplamento

O grande ensinamento que podemos colher disso é que as aplicações não precisam saber se a outra está ativa ou não, e isso é a mágica, pois é aí que vem o famoso **desacoplamento**.

Ele é bem importante, pois para contextos onde temos grandes equipes ou até sistemas mais complexos que exigem mais resiliência, ele vem para distribuir as responsabilidades de trabalho. Assim, podemos nos destinar a apenas um serviço específico ao invés de trabalhar com vários.

Você pode descobrir mais sobre entendendo o conceito de [[Microsserviços]].

## Conclusão


A Mensageria vem como uma solução robusta para problemas entre comunicações de serviços. Ela pode ser extremamente útil se você precisa de mais resiliência na arquitetura do seu sistema, pois garante mais estabilidade e escalabilidade - com o desacoplamento.

Entretanto, é bom sempre observar se realmente o seu sistema precisa necessariamente da implantação de Mensageria, já que nem sempre é a melhor opção.

Existem casos em que o sistema não é tão complexo, então não há necessidade de desacoplar nem de implantar uma solução tão elaborada. Apenas explorando opções mais simples como as que comentamos no início, podem ser suficientes. Ou seja, depende da sua situação.



## Referência

- [#01 — Mensageria. Mensageria? Message Broker? O que é… | by Thiago Brito | Medium](https://medium.com/@devbrito91/mensageria-1330c6032049)
- [rabbitmq - Message broker vs. database and monitoring - Stack Overflow](https://stackoverflow.com/questions/48099098/message-broker-vs-database-and-monitoring)
- [O que é mensageria e o que eu ganho com isso? | Sensedia](https://www.sensedia.com.br/post/o-que-e-mensageria-tudo-o-que-voce-precisa-saber)


