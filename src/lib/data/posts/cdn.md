![Descrição da imagem](/assets/cdn/cdn.png)

## O que é uma CDN?

> É uma rede de distribuição de conteúdo com uma rede de servidores espalhados para que a entrega de um conteúdo *estático* ou *dinâmico* seja entregue mais rapidamente. 

Basicamente os servidores armazenam em cache e entregam para os usuários finais que estejam mais próximos de cada um.

## Como funciona

Esses servidores comentados anteriormente são interligados, então se tem uma rede gigantesca se conectando.

As CDNs colocam servidores em pontos estratégicos chamados de **pontos de tráfego entre redes diferentes**.

Esses PTTs são locais onde diversos provedores de internet se conectam para acessos em redes diferentes.

Então, por ter acesso a esses locais que tem uma interconexão muito forte, o provedor CDN reduz muito os custos por ter acesso direto a várias redes diferentes, entregando os dados em alta velocidade.

Além disso, as CDNs também trazem otimizações nas transferências de dados padrão e possuem data centers em locais bem selecionados no mundo inteiro com muita segurança e projetados para sobreviver a falhas e congestionamentos.

## CDN x Hospedagem

CDN não hospeda conteúdo, ela ajuda a armazenar os dados em cache e na borda de rede - mais perto do usuário do que do host -, o que aprimora o desempenho do site.

Com essa mesma ideia de armazenar em cache, ainda é reduzida a largura de banda da hospedagem diminuindo as interrupções do serviço e também aumentando a segurança.

## Vantagens de usar uma CDN

Pode variar muito a depender dos dados que estão sendo tratados, mas em geral o que mais se destaca é:

1. **Tempo de carregamento do site**: por utilizar servidores bem espalhados e contemplando um espaço maior, a abrangência de usuários finais é maior também. Com o cache, a entrega desses dados é muito mais rápida a esses usuários.
2. **Custo de largura de banda**: também por utilizar o cache e outras otimizações específicas, as CDNs conseguem reduzir bastante a quantidade do que o servidor de origem precisa fornecer para disponibilização do site.
3. **Disponibilidade e redundância**: muita coisa pode interromper o funcionamento do site, mas com a lógica distribuída conseguem lidar com um alto tráfego e ter mais resiliência às falhas.
4. **Segurança**: fornece uma certa mitigação de DDoS, aprimora os certificados de segurança e traz ainda mais otimizações.

### Tempo de carregamento reduzido

Como já comentado anteriormente, o fato de termos servidores espalhados geograficamente e estrategicamente postos é o que facilita os usuários mais próximos se comunicarem diretamente com os datacenters.

Pode ser que esteja ainda bem abstrato essa ideia, então peguemos por exemplo:

> [!NOTE]
> Esquema: Você quer hospedar o seu portfólio e já pensou em utilizar o AWS S3 para armazenar os arquivos da build do seu projeto.

A ideia é boa e realmente muito utilizada, a grande questão é que esse bucket que você está utilizando é de um servidor físico em algum lugar específico que a amazon disponibilizou.

Supondo que ele foi armazenado no *aws-us-east-1*, então se um usuário que estiver no Reino Unido precisar acessar o seu site ele vai receber a resposta com mais demora do que alguém que, por exemplo, está nos Estados Unidos.

- **Papel da CDN**

A CDN vem com o papel de pegar esses arquivos que estão no S3 e disponibilizar para todos os servidores que eles espalharam em varios países, então a lógica nova utilizando uma CDN (**CloudFront**, que também é da aws, por exemplo) ficaria:

- => A CDN pega os arquivos do seu Bucket S3 e disponibiliza em cache para todos os servidores de borda dela espalhados pelo mundo 
- => quando um usuário do Reino Unido precisar acessar, ele não vai precisar ir nos EUA buscar no seu bucket;
- => ele vai, por exemplo, ir no datacenter da CDN lá no Reino Unido pegar os arquivos que estão armazenados em cache.


É importante ressaltar que não é apenas isso que faz ela ser rápida, temos também:

- otimizações a nível de hardware e software para fazer um balanceamento de carga, 
- a utilização de táticas de minificação para reduzir e compactar arquivos e melhorar a transferência
- e por fim, temos também a aceleração dos sites que utilizam certificado TLS/SSL otimizando a conexão.


### Disponibilidade e resiliência

Uma queda do sistema pode ser muito prejudicial, então é crucial que o esquema de distribuição seja capaz de resistir e ser resiliente a diversos tipos de falhas.

- Tendo um balanceamento de carga, o tráfego é distribuido entre diversos servidores, o que facilita em casos de alto tráfego do sistema;
- Com o chamado failover, caso algum servidor da CDN fique off-line, ele consegue redistribuir para outros permitindo assim que o sistema não pare;
- Caso um datacenter inteiro esteja com problemas, existem casos de roteamento para que seja transferido tudo para outro datacenter disponível, garantindo que nenhum usuário fique sem acesso.


### Segurança

As CDNs provém certificados TLS/SSL renovados automaticamente que garante autenticação, criptografia e integridade.


### Custo da largura de banda

Basicamente, por ficar entre o servidor de origem/hospedagem e o usuário, a CDN reduz o tráfego entre os servidores e o resto da internet.

Justamente por fornecer em cache, não há uma necessidade de se comunicar a todo momento com o servidor de origem, e como estes cobram pelos dados que são transferidos isso acaba sendo muito reduzido.


## Quando não usar uma CDN

Comentei bastante sobre os casos de uso e vantagem de se ter uma cdn administrando a distribuição do seu site, mas assim como tudo, nem sempre é realmente necessário aplicar esse web service.

> [!NOTE]
> Vamos com um caso: Imagina que uma escola pretende usar um site para que seus alunos possam conferir as suas respectivas notas e atualizações sobre a escola.

Nesse caso nós não precisamos ter uma CDN, pois a escola já sabe que apenas os alunos acessarão aquele site e eles são a prioridade. Então, com certeza eles receberão com mais velocidade e qualidade.


## Algumas CDNs

- IBM CDN
- Cloudflare
- CloudFront


## Conclusão

Para diversos cenários utilizar uma CDN é crucial para seu site, então é bom sempre considerar. Em geral vale mais a pena o custo de uma CDN do que o custo geral de distribuir geograficamente servidores em diversos locais.

