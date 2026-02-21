Vou contar um pouco da trajetória e experiência com a criação do Sharkar. Minha inteção é que isso seja apenas uma leitura leve e que traga bons insigths para você.

> Caso queira conferir o projeto: https://www.sharkar-pv.com

## Início

A ideia do projeto surgiu de forma bem simples na verdade. Eu gosto bastante de carro e, apesar de não ter dinheiro, ficava sempre olhando e analisando preço dos carros. Como uma pessoa essencialmente planejada, comecei a pensar em salvar os carros para ir consultando os preços e quem sabe futuramente comprar o com melhor custo x benefício.

De início, comecei anotando os carros no meu próprio Obsidian, colocando Nome, Marca, Preço, Ano, Tipo de Câmbio, Combustível, etc. Eu comecei a ver que isso era chatão, dava preguiça de ficar fazendo isso. Foi aí que pensei em fazer uma aplicação básica para que eu pudesse fazer isso de maneira mais fácil e intuitiva.

### v1: Embrião

Apesar de achar maneiro, sempre fui um horrível em front-end então eu queria montar algo muito simples como um formulário só para enviar para uma API e ela salvar as informações no banco.

Surge daí a primeira versão do projeto, um formulário "*basicasso*" com vários campos de input enviando esses dados para a api e o banco com uma tabela única armazenando os carros.

Pior que ele atendia o que eu queria, que era uma interface organizada e o armazenamento mais estruturado. O problema é que era horrível de feio, então eu pensei em melhorar a aparência dele. Como eu já tinha visto por cima o funcionamento de React e no trabalho fazia debug de aplicações em Angular, decidi montar um projeto em Angular para ver se eu conseguia deixar aquele projeto minimamente agradável.

### v2: Neném

Como comentei, sou horrível de front-end, então o que eu decidi fazer para conseguir aprender e colocar o projeto legal foi assistir um curso rápido no youtube. Comecei assistindo já colocando os negócios que eu via em prática e o front-end começou a tomar forma. Ao invés do formulário básico fiz usando reative do angular, coloquei bootstrap no prpjeto, etc.

Agora já estava mais agradável. Realmente tinha ficado mais legal. No momento tinham duas páginas: a do formulário e outra para visualizar os carros registrados. 

Vou deixar um registro de como era a página de visualizar (não repara no footer quebrado kkkk, foi consertado antes de partir para a v3):

![Descrição da imagem](/assets/sharkar/sharkar1.png)
O grande problema - e principal - é que a principal funcionalidade a qual eu tinha criado ele, não estava sendo aplicada: facilidade.

Não era nem um pouco fácil e prático ficar indo em cada campo do formulário escrever o nome, preço, marca, etc, de todos os carros. Isso me trouxe a ideia de conectar a API Fipe (que eu já tinha conhecimento, mas antes não queria utilizar) no projeto para facilitar. Com isso vem a terceira versão do projeto.


### v3: Adolescente


Com essa mentalidade de facilitar o processo, eu revitalizei tanto a lógica do projeto quanto o visual dele. Na parte do back-end adicionei toda lógica de consultar a API fipe para apenas precisar selecionar e pesquisar o nome, ano e marca do carro, assim ele puxa o resto das informações automaticamente. 

No front-end, que era meu calcanhar de aquiles, baixei o cursor, conversei bastante com os meus amigos saco fundo, gepeto, cláudio e o germínio, e assim eu melhorei muito também visualmente o projeto. Foi um processo muito difícil de aprendizado, mas foi legal pra caramba também. Nunca imaginei que faria algo daquele jeito, e foi por causa dele que consegui fazer o projeto desse site aqui nesse estilo que eu queria já fazer há bastante tempo.

Essa terceira versão traz essas muitas melhorias, mas também me traz uma vontade maior de fazer esse projeto pensando não só em 1 usuário, mas em vários. Queria ver se eu conseguia projetar um sistema não só para mim, mas para outras pessoas também. É aí que surge a quarta versão do projeto.


### v4: Adulto

Aqui talvez tenha sido a parte mais chatinha, apesar de a mais difícil ter sido a do front-end. Isso é porque eu queria implementar a possibilidade de ter mais usuários e para isso, seria necessário implementar coisas como a autenticação desses usuários, criar mais algumas tabelas e fazer uma relação mais concisa e bem feita das entidades do projeto.

Puxei o Spring Security e o JWT e implementei no projeto a autenticação via token. Queria algo dahora então implementei o hashing da senha e também os Cookies Http-only, para tentar ser o mais seguro que eu conseguiria. De início estava usando o localstorage, mas fiquei com receio de isso não ser legal em termos de segurança, então voltei na api e no front para implementar isso.

Assim ficou bem legal e já deu uma nova cara para o projeto. Agora você tinha seção interna e externa, além de ter as rotas seguras. Além disso, implementei algumas funções básicas de login como "esqueceu senha", troca de username ou email, troca de nome etc, em uma página específica de configurações do usuário.

Dessa forma, terminei a construção dessa quarta versão do projeto, mas a verdade é que eu já tenho outras ideias muito boas e que seriam muito gratificantes, em termos de aprendizado e produto, para implementar.


### v5: Idoso (futuro)


Essa é a versão que projeto ser a mais completa com as funcionalidades que eu considero serem as excelentes para o que eu espero do sistema.

Eu tinha começado a implementar já e tenho até o código comentado no projeto, mas parei para poder lançar a v4 como MVP e pelo menos ver como seria o deploy do projeto. Minha ideia é aplicar essas modificações já com o projeto no ar.

1. Scheduled para rodar todo início de mês e atualizar o valor dos carros e, com essa atualização, fazer um job de envio de email para notificar os usuários de acordo com a diferença de valor dos carros registrados. Será enviada uma planilha com os carros, os valores e diferença dos valores, link para site de venda, etc.

2. Também trarei a geração de imagens dos carros ao estar selecionando os dados dos carros na tela do formulário. Seria uma adição legal para a pessoa quando estar registrando os veículos. Eu cheguei a implementar a lógica de alteração, mas não encontrei nenhuma api que fornecesse fotos dos carros de forma gratuita. Minha principal ideia caso não queira investir nisso é utilizar alguma AI para gerar as fotos - mesmo que não seja precisa e correta, seria legal ter uma noção de visualização com aviso que foi feito por inteligência artificial.

3. A última (que eu penso agora) seria pegar a versão paga da API Fipe para poder fornecer um dashboard mais completo de todo o balanço do valor dos carros, assim eu conseguiria não só notificar e mostrar a diferença de um mês em relação ao anterior, mas sim fornecer um dashboard de, por exemplo, vários meses, trazendo a tendência de valorização e mudança no preço dos carros.

## Deploy

O processo de deploy foi bem interessante, pois eu tinha alguns pensamento e ideias, mas não tinha certeza de nada.

Eu fiz o processo de implantação do blog e do Sharkar na mesma época, então eu tinha em mente que poderia fazer algo bem legal para quem não tem experiência/conhecimento com as ferramentas: **explorar todas**.

De início, meu pensamento era de que como o blog não ia ser muito desafiador, preferi deixar logo ele para uma implantação mais tranquila, sendo assim, utilizei a infraestrutura da **Vercel** mesmo, que é bastante consolidada e torna o processo de deploy bizarramente mais fácil. 

> Você direciona seu repositório do projeto e ele implementa tudo automaticamente, incluindo até um workflow de implantação através dos commits.

Já que o Blog seria com a vercel e eu não teria muitos desafios com isso, decidi que para o Sharkar então seria utilizado os serviços de cloud da AWS.

### Escolha dos services

É bom destacar que durante as conclusões acima eu também estava pesquisando e "conversando" bastante com o Gemini (2.5 Pro) para entender mais e compreender como poderia ser o processo de implantação dos casos. O que eu quero dizer é que usei o agente do Google como um auxiliar a entender qual poderia ser meu escopo de decisão baseado no que eu queria para o momento: aprendizado, experiência e uma implantação realmente boa.

#### Front-end

> [!noted] Colocando o site no ar

Considerei diversas opções como Vercel, Render, S3 e até EC2 (uma VPS). Perguntando para o Gemini e pesquisando diretamente, fui considerando preço (se era free), dificuldade, curva de aprendizado e minha intenção pessoal.

*Pensei no caso de usar uma VPS, que seria de extremo aprendizado, mas também iria ser muito over-engineering, então cheguei a conclusão que talvez fosse melhor usar os serviços da AWS (S3) de forma separada.*

No final das contas observei que uma boa escolha seria o AWS Simple Storage Service (S3), pois era um serviço simples de armazenamento, sem custos (para o que eu queria usar) e com uma opção muito interessante que era a de hospedagem de site estático. Isso era exatamente o que eu queria, hospedar o front-end do Sharkar sabendo que ele não teria nenhuma função muito importante a não ser se comunicar com a API.

Caso você queira ver como fazer esse processo de implantação do site no S3, acesse: https://pvrosendo.vercel.app/article/hospedando-site-s3.

> [!noted] Descobrindo sobre CDN

Depois de fazer a implantação acabei descobrindo e entendendo um pouco sobre [CDN](https://pvrosendo.is-a.dev/blog/content-delivery-network) e percebi que eu precisaria desse cara para o meu site ficar no ar e de fácil acesso para o máximo de pessoas possível. E ele também me ajudaria com a questão da segurança do site (certificado SSL/TSL e HTTPS) - que era algo que eu já tinha noção -, então era ótimo.

Agora precisava entender como eu criava uma distribuição para o meu site e utilizando meu amigão Gemini perguntei para ele qual seria a melhor opção. Ele de prontidão me recomendou aproveitar o CloudFront, já que eu tinha a pretensão de entender o máximo possível da Cloud da AWS. 

Caso você queira ver como fazer esse processo de criação da distribuição no CloudFront: [Hospedando site no S3](https://pvrosendo.is-a.dev/blog/hospedando-site-no-aws-s3)

> [!noted] Criando a pipeline com GitHub Actions

Eu já tinha noção desde o começo que eu iria querer aplicar um workflow dentro de toda a implantação do projeto, eu só não sabia como fazer. Já tinha visto uma pipeline rodando dentro da Cloud da Azure, mas nunca tinha chegado ao ponto de encostar, fazer ou saber como era feito.

Tendo todas as dúvidas em mentes fui dar uma pesquisada sobre como funcionava uma pipeline e quais seriam as opções que eu teria para colocar no meu projeto.

Vi que o GitHub Actions era uma opção bem interessante, então decidi seguir com ela mesmo. Pedi uma ajuda para o amigão Gemini e ele me fortaleceu para montar a pipeline, principalmente na parte da AWS e com as permissões de acesso.

#### Banco de Dados 

A parte do banco talvez fosse a mais complicada, pois hospedar banco de dados é um tema bem delicado pelo alto custo.

*Pensei em armazenar no Render, por ser free, mas havia a limitação da possibilidade apenas de usar banco PostgreSQL (por ser open-source), então a princípio descartei.*

Acabei definindo usar o RDS mesmo (Amazon Relational Databases) da AWS já que eu queria montar o ecossistema todo na cloud deles. 

Os processos para subir o banco eram simples e bem diretos, mas apanhei por conta de alguns erros esquisitos que deram. De qualquer forma foi só seguir a ideia de

1. Criar instância RDS
2. Configurar as credenciais
3. Configurar a segurança
4. Criar o banco dentro da instância para a aplicação conseguir se conectar

e estava pronto.

Para concluir que estava configurado tudo certo e rodando, além de criar o próprio banco, usei o DBeaver para me conectar na instância.

> [!danger] Gastos que eu tive

Algo que eu acabei me ferrando foi no custo desse cara. Eu achava que a configuração que eu tinha setado limitava a apenas consumir exatamente o Free-Tier que a AWS disponibiliza. 

Infelizmente eu estava errado e só descobri isso bem depois (quem nunca? parece que é uma regra isso kkkkk. Sempre via as pessoas comentando sobre isso e mesmo tentando não deixar isso acontecer comigo, não adiantou nada)

**Resumo da ópera**: tomei uma fumada de vários dólares por conta do uso que foi disponibilizado além do free-tier em relação ao consumo. Nos meus vários testes, acabei forçando o uso da instância e o consumo de CPU ultrapassou.

#### API

Aqui era a parte que eu mais receio de usar a AWS. Apesar de ser o ponto que eu mais tinha conhecimento, nos serviços da Amazon eu tinha 0. Dei uma pesquisada e conversei mais com meu amigão Gemini.

Ele me indicou algumas opções e eu escolhir ir pelo caminho da **ECS** com o **Fargate**. Esse seria um caminho mais tranquilo por se usar cluster e containerização, que eu tinha conhecimento, e utilizar o Fargate, que é um mecanismo para rodar containeres sem precisar configurar e provisionar servidores.

A parte de deploy da API foi disparada a que mais gerou problemas, acho que pela quantidade necessária de processos e definições. Além da criação dos serviços na AWS (ECR, ECS, Task Definition, IAM, etc) ainda tinha que criar a pipeline - que usei github actions também.

Depois de MUITO estresse e desgaste com problemas de pipeline, CORS, conexão com banco, variáveis de ambiente entre outros, consegui subir a API.

*Mal sabia eu que teria ainda mais problemas quando fosse implementar o Load Balancer e as mudanças de DNS para o domínio que eu comprei...*

#### Integração final

Tendo tudo montado, falta apenas integrar tudo. O que seria integrar? Seria confirmar que todos os serviços estão se comunicando, ajustar um domínio, verificar o nível de segurança, etc.

De início comprei um domínio porque queria verificar como seria o processo de uso. Usei o serviço próprio da AWS, o Route 53. Com o domínio comprado, fui no serviço ACM para solicitar os certificados para os domínios da api e do front-end.

Foi nesse ponto que pesquisei mais sobre [Load Balancer](https://pvrosendo.is-a.dev/blog/load-balancer) e achei interessante aplicar no projeto para ver sua funcionalidade, aproveitando que eu tinha comprado um domínio.

Decidi usar um application load balancer do ELB (AWS Elastic Load Balancing) e comecei criando um target group - nesse ponto coloquei um health checker na API (usei o spring actuator) - e o ALB.

Depois da implementação, recriei o serviço do ECS para integrar com o ALB e o Target group que eu criei antes.

Com a distribuição e o load balancer criados, agora precisamos direcionar os DNS. Criei dois registros no Route 53, sendo um alias para a distribuição do CloudFront e outro com alias para o ALB.

Agora, finalmente, tenho tudo apontado para os lugares certos e realmente funcionando integralmente.

## Re-deploy

Fiquei muito satisfeito da experiência e dos desafios que eu tive em toda essa jornada de implementação, mas acabei tendo alguns problemas inesperados. Como citei antes na parte da implantação do banco, eu não configurei exatamente certo e tive um gasto legal com o RDS. Juntando a isso tive o gasto da compra do domínio e uns gastos com alguns outros serviços para subir a API. *Esses eram esperados, mas juntando com o vilão (RDS) acabei tomando uma fumada maneira de vários dólares kkkkkkkkkkk.*

De qualquer forma, eu sei que atualmente não tenho tanta experiência nas configurações e fiquei com receio de mais alguns gastos. Minha finalidade com o projeto era deixar mais como um projeto pessoal de portfólio e aprender sobre as etapas em geral, então decidi excluir todos os serviços que estavam rodando na AWS e colocar completamente em IaaS que tinham garantia de ser free.

Sendo assim, o meu front-end foi para a **Vercel** e a API e o banco foram para o **Render**.

Não tive problemas para transferir, como tinha comentado em outros pontos, esses serviços são feitos para dar toda a estrutura para que você se concentre apenas em código. Como eu já tinha essas questões todas prontas, não tive problema.

Único trabalho que tive mais chato foi na configuração do DNS e domínio personalizado na Vercel, mas também nada de outro mundo.

Pode pensar que para configurar o banco seria muito problemático, mas o fato de eu usar o JPA e Hibernate me ajudou. Ativei a opção de ``spring.jpa.hibernate.ddl-auto=update`` e ele criou as tabelas com as configurações corretas automaticamente no PostgreSQL, só precisei adicionar a dependência e o driver.

## Conclusão

Tive MUITOS desafios ao longo desse tempo. É simples vir aqui e falar que fiz tal coisa, mas durante o processo foi bem estressante e meio chato com as coisas que eu não tinha experiência e prática (front-end e cloud, principalmente).

Mesmo com todos os desafios e problemas que deram, a verdade é que isso foi satisfatório e maneiro pra caramba porque aprendi muito. E é isso que importa no final das contas.