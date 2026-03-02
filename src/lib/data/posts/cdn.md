![Mapa ilustrativo do esquema de CDN](/assets/cdn/cdn.png)

## O que é uma CDN?

> É uma rede de distribuição de conteúdo com uma rede de servidores espalhados para que a entrega de um conteúdo *estático* ou *dinâmico* seja entregue mais rapidamente. 

De forma direta, os servidores armazenam em cache e entregam para os usuários finais que estejam mais próximos de cada um.

## Como funciona

Esses servidores comentados anteriormente são interligados, então se tem uma rede gigantesca se conectando.

As provedoras colocam servidores em pontos estratégicos chamados de **pontos de tráfego entre redes diferentes** e esses PTTs são locais onde diversos provedores de internet se conectam para acessos em redes diferentes.

No ecossistema das CDNs, esses locais estratégicos espalhados pelo mundo recebem um nome específico: **PoPs (Points of Presence)**. Um PoP é basicamente um data center local (por exemplo, um em São Paulo, outro em Londres, outro em Tóquio).

Dentro de cada PoP, existem os chamados **Edge Servers (Servidores de Borda)**. O termo "borda" é usado porque eles ficam na extremidade da rede, o mais perto possível do usuário final. Quando falamos que a CDN "entregou na borda", significa que a requisição do usuário nem precisou viajar pela internet até o seu servidor original; ela foi resolvida ali mesmo, no Edge Server da cidade dele.

Então, por ter acesso a esses locais que tem uma interconexão muito forte, o provedor reduz muito os custos por ter acesso direto a várias redes diferentes, entregando os dados em alta velocidade.

Além disso, as CDNs também trazem otimizações nas transferências de dados padrão e possuem data centers em locais bem selecionados no mundo inteiro. A ideia é ter muita segurança e centros projetados para sobreviver a falhas e congestionamentos em diversos tipos.

## CDN x Hospedagem

Algo que me confundiu bastante e talvez seja a dúvida de outros é a relação com hospedagem em si, mas na verdade a CDN não hospeda conteúdo, ela ajuda a armazenar os dados em cache e na borda de rede - mais perto do usuário do que do host -, o que aprimora o desempenho do site si.

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

- otimizações a nível de hardware e software para fazer um [load balancer](https://pvrosendo.is-a.dev/blog/load-balancer), 
- a utilização de táticas de minificação para reduzir e compactar arquivos e melhorar a transferência
- e por fim, temos também a aceleração dos sites que utilizam certificado TLS/SSL otimizando a conexão.

Comentei muito sobre o exemplo do site, ou seja, conteúdo estático. Mas e como a CDN ajuda com Conteúdo Dinâmico (APIs)?

Entendemos como o cache resolve arquivos estáticos, mas requisições dinâmicas (como um POST de login ou uma busca no banco de dados) não podem ser cacheadas, pois a resposta muda a cada usuário. Como a CDN ajuda nesse caso?

1. **Roteamento Anycast**: As CDNs usam um protocolo de rede onde múltiplos servidores ao redor do mundo compartilham o mesmo endereço de IP. A rede global automaticamente roteia o usuário para o servidor mais próximo em milissegundos.

2. **Otimização de Rota (Backbone Privado)**: Ao invés da requisição do usuário "pular" por dezenas de provedores de internet públicos, lerdos e congestionados até chegar no seu servidor, a requisição entra no Edge Server da CDN mais próximo e viaja até a origem através de uma "via expressa" privada e super rápida da própria CDN.

3. **Terminação TLS na Borda**: A negociação pesada de segurança (o aperto de mão do HTTPS) acontece pertinho do usuário, no Edge Server, poupando tempo. A partir dali, a conexão entre a CDN e a origem já fica pré-estabelecida e aberta.

### Disponibilidade e resiliência

Uma queda do sistema pode ser muito prejudicial, então é crucial que o esquema de distribuição seja capaz de resistir e ser resiliente a diversos tipos de falhas.

- Tendo um balanceamento de carga, o tráfego é distribuido entre diversos servidores, o que facilita em casos de alto tráfego do sistema;
- Com o chamado *failover*, caso algum servidor da CDN fique off, ele consegue redistribuir para outros permitindo assim que o sistema não pare;
- Caso um datacenter inteiro esteja com problemas, existem casos de roteamento para que seja transferido tudo para outro datacenter disponível, garantindo que nenhum usuário fique sem acesso.


### Segurança

As CDNs provém certificados TLS/SSL renovados automaticamente que garante autenticação, criptografia e integridade.

### Custo da largura de banda

Basicamente, por ficar entre o servidor de origem/hospedagem e o usuário, a CDN reduz o tráfego entre os servidores e o resto da internet.

Justamente por fornecer em cache, não há uma necessidade de se comunicar a todo momento com o servidor de origem, e como estes cobram pelos dados que são transferidos isso acaba sendo muito reduzido.

## O Desafio do Cache: TTL e Invalidação

Depois de tudo que falamos ficou muito na cabeça que o cache é ótimo para a velocidade, mas traz um desafio clássico: "Atualizei meu site, mas a alteração não aparece!". Isso acontece porque a CDN ainda está entregando a cópia antiga (arquivos *stale* ou obsoletos) que está salva nos Edge Servers.

Para lidar com isso, são utilizados dois conceitos fundamentais:

- **TTL (Time to Live)**: É tipo um "prazo de validade" do cache. Você configura que um arquivo de imagem pode ficar no cache por 7 dias, mas um arquivo HTML deve expirar a cada 1 hora. Quando o TTL acaba, a CDN é obrigada a ir no Servidor de Origem buscar a versão mais recente.

- **Invalidação de Cache (Cache Invalidation)**: Se você fez um deploy crítico e não pode esperar o TTL expirar, você pode acionar a CDN (geralmente via painel ou API) e forçar uma "Invalidação". Isso dá uma ordem para a CDN apagar aquele arquivo específico de todos os PoPs pelo mundo imediatamente, forçando-a a buscar a nova versão na próxima requisição.

## Quando não usar uma CDN

Comentei bastante sobre os casos de uso e vantagem de se ter uma cdn administrando a distribuição do seu site, mas assim como tudo, nem sempre é realmente necessário aplicar.

> [!NOTE]
> Vamos com um caso: Imagina que uma escola pretende usar um site para que seus alunos possam conferir as suas respectivas notas e atualizações sobre a escola.

Nesse caso nós não precisamos ter uma CDN, pois a escola já sabe que apenas os alunos acessarão aquele site, e eles são a prioridade. Então, eles já receberão com velocidade e qualidade.


## Algumas CDNs

- IBM CDN
- Cloudflare
- CloudFront


## Conclusão

Para diversos cenários utilizar uma CDN é crucial, então é bom sempre considerar. Em geral, principalmente para meros seres humanos, vale mais a pena o custo de uma CDN do que o custo geral de distribuir geograficamente servidores em diversos locais.
