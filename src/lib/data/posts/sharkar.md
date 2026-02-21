Vou contar um pouco da trajetória e experiência com a criação do Sharkar. Minha inteção é que isso seja uma jornada legal e um registro fiel de um projeto bacana.

> Caso queira conferir o projeto: https://www.sharkar-pv.com

## Ideia

A ideia do projeto surgiu de forma bem simples na verdade. Eu gosto bastante de carro e, apesar de não ter a condição para comprar um atualmente, ficava sempre olhando e analisando preço dos carros. Como uma pessoa essencialmente planejada, comecei a pensar em salvar os carros para ir consultando os preços e quem sabe futuramente comprar o com melhor *custo x benefício*.

De início, comecei anotando os carros no meu próprio Obsidian - *se você não usa nenhum software para organização e registro de ideias, recomendo extremamente* -, colocando Nome, Marca, Preço, Ano, Tipo de Câmbio, Combustível, etc. 

O óbvio começou a pairar na minha mente, eu comecei a ver que era massivo e chato. Dava preguiça de ficar fazendo isso. Foi aí que pensei em fazer uma aplicação básica para que eu pudesse fazer isso de maneira mais fácil e intuitiva.

## Etapas

Cada etapa da construção do projeto está separada nas fases que fui observando e melhorando/construindo ele.

### v0.0.0 - Embrião: o Protótipo básico

Apesar de achar muito maneiro, sempre fui bem ruim em front-end, então eu queria montar algo muito simples como um formulário só para enviar para uma API e ela salvar as informações no banco.

Surge daí a primeira versão do projeto, um formulário "*basicasso*" com vários campos de input enviando esses dados para a api e o banco com uma tabela única armazenando os carros.

> Infelizmente não tenho registro desse momento, seria épico para colocá-lo aqui. Mas era literalmente um index.html com um form sem nem estar centralizado. Tudo rodando local mesmo.

Pior que ele atendia o que eu queria, que era uma interface básica e o armazenamento um pouco mais estruturado. O problema é que era horrível de feio, então eu pensei em melhorar a aparência dele. 

Como eu já tinha visto por cima o funcionamento de React e no trabalho da época mexia muito em aplicações Angular, decidi montar um projeto em Angular para ver se eu conseguia deixar aquele projeto minimamente agradável.

O back-end era algo tranquilo e simples também, usando Java com Spring Boot e SQL Server de banco. Tudo rodando local.

### v1.0.0 - Início: Angular entra em ação

Como comentei, não sabia nada a fundo de front-end - apesar de gostar e mexer - então o que eu decidi fazer para conseguir aprender minimamente direito e colocar o projeto legal foi assistir alguns cursos e vídeos no youtube - além do meu site favorito de tutoriais (https://www.tutorialspoint.com/tutorialslibrary.htm) como:

- Café com Bug: https://www.youtube.com/playlist?list=PLhna1crYw0SOFqiss05ybqJCc6fvGn6BF
- Loiane Groner: https://www.youtube.com/playlist?list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G
- Matheus Battisti - Hora de Codar: https://www.youtube.com/playlist?list=PLnDvRpP8Bnex2GQEN0768_AxZg_RaIGmw

Comecei assistindo já colocando os negócios que eu via em prática e o front-end começou a tomar forma. Ao invés do formulário básico, fiz usando reactive forms do angular, coloquei bootstrap no projeto, etc.

Agora já estava mais agradável. Realmente tinha ficado mais legal. No momento tinham duas páginas: a do formulário e outra para visualizar os carros registrados.

Vou deixar um registro de como era a página de visualizar (repara no footer quebrado):

![Descrição da imagem](/assets/sharkar/sharkar1.png)

#### Conclusão

O grande problema - e principal - é que funcionalidade que trouxe a motivação de criar ele, não estava sendo aplicada: **facilidade**.

Não era nem um pouco fácil e prático ficar indo em cada campo do formulário escrever o nome, preço, marca, etc, de todos os carros. Isso me trouxe a ideia de conectar a API Fipe (que eu já tinha conhecimento, mas antes não queria utilizar). E Com isso vem a próxima versão do projeto.


### v1.1.0 - Avanço: A lógica toma forma

Com essa mentalidade de facilitar o processo, eu revitalizei tanto a lógica do projeto quanto o visual dele. 

#### Revitalização do Front

No front-end, que era meu calcanhar de aquiles, conversei bastante com os meus amigos gepeto (ChatGPT) e germínio (Gemini) para tirar dúvidas e ter mais ideias, e assim eu melhorei muito também visualmente o projeto. Foi um processo muito difícil de aprendizado, mas foi legal pra caramba também. Nunca imaginei que faria algo daquele jeito, e foi por causa dele que consegui fazer o projeto no estilo que eu queria já fazer há bastante tempo.

![Descrição da imagem](/assets/sharkar/7.png)

#### Utilizando API Fipe

Na parte do back-end adicionei toda lógica de consultar a API fipe para apenas precisar selecionar e pesquisar o nome, ano e marca do carro, assim ele puxaria o resto das informações automaticamente.

![Descrição da imagem](/assets/sharkar/4.png)

#### Conclusão

Essa versão já traz essas muitas melhorias, mas também me traz uma vontade maior de fazer esse projeto pensando não só em 1 usuário, mas em vários. Queria ver se eu conseguia projetar um sistema não só para mim, mas para outras pessoas também. É aí que surge a quarta versão do projeto.


### v2.0.0 - Multiplicação: querer não é poder

Aqui talvez tenha sido a parte mais chatinha, apesar de a mais difícil ter sido a do front-end. Isso é porque eu queria implementar a possibilidade de ter mais usuários e para isso, seria necessário implementar coisas como a autenticação desses usuários, criar mais algumas tabelas e fazer uma relação mais concisa e bem feita das entidades do projeto.

#### Auth

![Descrição da imagem](/assets/sharkar/2.png)

Puxei o Spring Security e o JWT e implementei no projeto a autenticação via token. Queria algo dahora então implementei o hashing da senha e também os Cookies Http-only, para tentar ser o mais seguro que eu conseguiria. De início estava usando o localstorage, mas fiquei com receio de isso não ser legal em termos de segurança, então voltei na api e no front para implementar isso.

![Descrição da imagem](/assets/sharkar/3.png)

Assim ficou bem legal e já deu uma nova cara para o projeto. Agora você tinha seção interna e externa utilizando interceptors nas rotas fazendo as rotas seguras e privadas. 

#### Account-config

Além disso, implementei algumas funções básicas de login como "esqueceu senha", troca de username ou email, troca de nome etc, em uma página específica de configurações do usuário.

|                     |                     |
| ------------------------------------ | ------------------------------------ |
| ![Descrição da imagem](/assets/sharkar/5.png) | ![Descrição da imagem](/assets/sharkar/6.png) |


#### Deploy

Essa foi a primeira versão que eu decidi subir e aproveitar para aprender mais sobre hospedagem em geral. Apesar de eu ter uma noção de como as coisas funcionavam, eu queria ver e relembrar um pouco mais isso na prática. Meu principal objetivo era algo sem custos, pois apesar de pensar em fazer o projeto para comportar mais pessoas, eu não esperava que fosse ter mesmo.

##### Entendendo a situação

O processo de deploy foi bem interessante, pois eu tinha alguns pensamento e ideias, mas não tinha certeza de nada.

Eu fiz o processo de implantação da primeira versão do blog/portfólio e do Sharkar na mesma época, então eu tinha em mente que poderia fazer algo bem legal para quem não tem experiência/conhecimento com as ferramentas: **explorar todas**.

De início, meu pensamento era de que como o blog não ia ser muito desafiador, preferi deixar logo ele para uma implantação mais tranquila, sendo assim, utilizei a infraestrutura da **Vercel** mesmo, que é bastante consolidada e torna o processo de deploy bizarramente mais fácil. 

> Você direciona seu repositório do projeto e ele implementa tudo automaticamente, incluindo até um workflow de implantação através dos commits.

Já que o Blog seria com a vercel e eu não teria muitos desafios com isso, decidi que para o Sharkar então seria utilizado os serviços de cloud da AWS.

##### Escolha dos services

É bom destacar que durante as conclusões acima eu também estava pesquisando muito para entender mais e compreender como poderia ser o processo de implantação dos casos. Eu queria buscar entender qual poderia ser meu escopo de decisão baseado no que eu queria para o momento: aprendizado, experiência e uma implantação realmente boa.

###### Front-end

> [!NOTE]
> Colocando o site no ar

Considerei diversas opções como Vercel, Render, S3 e até EC2 (uma VPS). Pesquisando diretamente, fui considerando preço (se era free), dificuldade, curva de aprendizado e minha intenção pessoal.

*Pensei no caso de usar uma VPS, que seria de extremo aprendizado, mas também iria ser muito over-engineering, então cheguei a conclusão que talvez fosse melhor usar os serviços da AWS (S3) de forma separada.*

No final das contas observei que uma boa escolha seria o AWS Simple Storage Service (S3), pois era um serviço simples de armazenamento, sem custos (para o que eu queria usar) e com uma opção muito interessante que era a de hospedagem de site estático. Isso era exatamente o que eu queria, hospedar o front-end do Sharkar sabendo que ele não teria nenhuma função muito importante a não ser se comunicar com a API.

Caso você queira ver como fazer esse processo de implantação do site no S3, só ver em: [Hospedando site no S3](https://pvrosendo.is-a.dev/blog/hospedando-site-no-aws-s3).

> [!NOTE]
> Descobrindo sobre CDN

Depois de fazer a implantação acabei descobrindo e entendendo um pouco sobre [CDN](https://pvrosendo.is-a.dev/blog/content-delivery-network) e percebi que eu precisaria desse cara para o meu site ficar no ar e de fácil acesso para o máximo de pessoas possível. E ele também me ajudaria com a questão da segurança do site (certificado SSL/TSL e HTTPS) - que era algo que eu já tinha noção -, então era ótimo.

Agora precisava entender como eu criava uma distribuição para o meu site e utilizando meu amigão Gemini perguntei para ele qual seria a melhor opção. Ele de prontidão me recomendou aproveitar o CloudFront, já que eu tinha a pretensão de entender o máximo possível da Cloud da AWS. 

Caso você queira ver como fazer esse processo de criação da distribuição no CloudFront, tem uma seção onde mostro no artigo: [Hospedando site no S3](https://pvrosendo.is-a.dev/blog/hospedando-site-no-aws-s3)

> [!NOTE]
> Criando a pipeline com GitHub Actions

Eu já tinha noção desde o começo que eu iria querer aplicar um workflow dentro de toda a implantação do projeto. Vi que o GitHub Actions era uma opção bem interessante, então decidi seguir com ela mesmo. Fui pesquisando e montei a pipeline, tendo algumas dificuldades principalmente na parte da AWS e com as permissões de acesso.

###### Banco de Dados

A parte do banco talvez fosse a mais complicada, pois hospedar banco de dados é um tema bem delicado pelo alto custo.

*Pensei em armazenar no Render, por ser free, mas havia a limitação da possibilidade apenas de usar banco PostgreSQL (por ser open-source), então a princípio descartei - na época estava em SQL Server e achei que fosse um problema.*

Acabei definindo usar o RDS mesmo (Amazon Relational Databases) da AWS já que eu queria montar o ecossistema todo na cloud deles. 

> [!CAUTION]
> Gastos que eu tive

Algo que eu acabei me ferrando foi no custo, puro erro por falta de atenção. Eu achava que a configuração que eu tinha setado limitava a apenas consumir exatamente o Free-Tier que a AWS disponibiliza. 

Infelizmente eu estava errado e só descobri isso bem depois (quem nunca? Sempre via as pessoas comentando sobre isso e mesmo tentando não deixar isso acontecer comigo, não adiantou nada)

**Resumo da ópera**: Nos meus vários testes e alguns acessos inesperados, acabei forçando o uso da instância e o consumo de CPU ultrapassou.

###### API

Aqui era a parte que eu mais receio de usar a AWS. Apesar de ser o ponto que eu mais tinha conhecimento, nos serviços da Amazon eu tinha 0.

Escolhi ir pelo caminho da **ECS** com o **Fargate**. Esse seria um caminho mais tranquilo por se usar cluster e containerização, que eu tinha conhecimento, e utilizar o Fargate, que é um mecanismo para rodar containeres sem precisar configurar e provisionar servidores.

A parte de deploy da API foi disparada a que mais gerou problemas, acho que pela quantidade necessária de processos e definições. Além da criação dos serviços na AWS (ECR, ECS, Task Definition, IAM, etc) ainda tinha que criar a pipeline - que usei github actions também.

Depois de MUITO estresse e desgaste com problemas de pipeline, CORS, conexão com banco, variáveis de ambiente entre outros, consegui subir a API.

*Mal sabia eu que teria ainda mais problemas quando fosse implementar o Load Balancer e as mudanças de DNS para o domínio que eu comprei...*


###### Integração final

Tendo tudo montado, falta apenas integrar tudo. O que seria integrar? Seria confirmar que todos os serviços estão se comunicando, ajustar um domínio, verificar o nível de segurança, etc.

De início comprei um domínio porque queria verificar como seria o processo de uso. Usei o serviço próprio da AWS, o Route 53. Com o domínio comprado, fui no serviço ACM para solicitar os certificados para os domínios da api e do front-end.

Foi nesse ponto que pesquisei mais sobre [Load Balancer](https://pvrosendo.is-a.dev/blog/load-balancer) e achei interessante aplicar no projeto para ver sua funcionalidade, aproveitando que eu tinha comprado um domínio.

Decidi usar um application load balancer do ELB (AWS Elastic Load Balancing) e comecei criando um target group - nesse ponto coloquei um health checker na API (usei o spring actuator) - e o ALB.

Depois da implementação, recriei o serviço do ECS para integrar com o ALB e o Target group que eu criei antes.

Com a distribuição e o load balancer criados, agora precisamos direcionar os DNS. Criei dois registros no Route 53, sendo um alias para a distribuição do CloudFront e outro com alias para o ALB.

Agora, finalmente, tenho tudo apontado para os lugares certos e realmente funcionando integralmente.

#### Re-deploy

Fiquei muito satisfeito da experiência e dos desafios que eu tive em toda essa jornada de implementação, mas acabei tendo alguns problemas inesperados. Como citei antes na parte da implantação do banco, eu não configurei exatamente certo e tive um gasto legal com o RDS. Juntando a isso tive o gasto da compra do domínio e uns gastos com alguns outros serviços para subir a API.

Minha finalidade com o projeto era deixar mais como um projeto pessoal de portfólio e aprender sobre as etapas em geral, então decidi excluir todos os serviços que estavam rodando na AWS e colocar completamente em IaaS que tinham garantia de ser free. Sendo assim, o meu front-end foi para a **Vercel** e a API e o banco foram para o **Render**.

Não tive problemas para transferir, como tinha comentado em outros pontos, esses serviços são feitos para dar toda a estrutura para que você se concentre apenas em código. Como eu já tinha essas questões todas prontas, não tive problema.

#### Conclusão

Dessa forma, terminei a construção dessa nova versão do projeto e, a principio, definitiva.

A princípio porque, imagino que você saiba, mas de qualquer forma: quanto mais estudamos vemos que não sabemos nada.


### v3.0.0 - Maturidade: o renascimento

> Se você chegou até aqui... nem eu sei explicar o porque, mas ok. Essa é a etapa atual, que estou mexendo com todos os conhecimentos que adquiri nesses últimos tempos.

Essa é a versão que projeto ser a mais completa e otimizada com as funcionalidades que eu considero serem legais para ter.

A verdade é que conforme você vai estudando e adquirindo experiência, vai percebendo algumas bizarrices que tinha feito antes. E nesse projeto, claramente, não é diferente. Eu poderia só deixar ele do jeito que está, mas tenho um carinho legal por ele.

#### Reformulação

Decidi refazer o back-end completamente. Vendo o projeto atualmente dá até felicida, pois significa que aprendi e agora vejo erros que não via antes. Estou fazendo ele do 0 em Go com Echo e toda lógica de pesquisa vai ser feita diferente. Algumas chamadas desnecessárias, lógicas confusas, otimização, etc, são problemas evidentes e estou consertando agora nessa versão.

O banco vai ser mantido o Postgres pela robustez e pelas possibilidades legais que oferece.

O front não vai ser mexido, sinto um carinho pelo projeto e, tirando o que não será mais necessário, a identidade visual dele se manterá. Incluindo a stack de Angular e Bootstrap.

Na parte da Auth vou retirar toda lógica que eu fazia na mão. Delegarei para o Auth0, que fornecesse uma boa implementação de OAuth2 + OIDC. Assim deixo as informações mais seguras e não preciso ter trabalho além do necessário.

#### Novas features

- Scheduled para rodar todo início de mês e atualizar o valor dos carros e, com essa atualização, fazer um job de envio de email para notificar os usuários de acordo com a diferença de valor dos carros registrados. Será enviada uma planilha com os carros, os valores e diferença dos valores, link para site de venda, etc.

- Também trarei a geração de imagens dos carros ao estar selecionando os dados dos carros na tela do formulário. Seria uma adição legal para a pessoa quando estar registrando os veículos. Eu cheguei a implementar a lógica de alteração, mas não encontrei nenhuma api que fornecesse fotos dos carros de forma gratuita. Minha principal ideia caso não queira investir nisso é utilizar alguma AI para gerar as fotos - mesmo que não seja precisa e correta, seria legal ter uma noção de visualização com aviso que foi feito por inteligência artificial.

- A última (que eu penso agora) seria pegar a versão paga da API Fipe para poder fornecer um dashboard mais completo de todo o balanço do valor dos carros, assim eu conseguiria não só notificar e mostrar a diferença de um mês em relação ao anterior, mas sim fornecer um dashboard de, por exemplo, vários meses, trazendo a tendência de valorização e mudança no preço dos carros.

---

Última att.: 2026-02-21