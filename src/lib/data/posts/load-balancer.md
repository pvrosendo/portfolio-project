![Ilustração básica de Load Balancer](/assets/load-balancer/lb.png)

> O load balancer é um dispositivo ou software que vai distribuir o tráfego de rede entre os servidores a fim de não haver sobrecarga.

## Conceito Geral

Pense no gerente de um restaurante, o que ele faz? Se você reparar, ele não atende os clientes, ele administra a carga de acordo com os garçons disponíveis. 

Quando os clientes chegam (**requisições**), o gerente não atende as mesas, ele olha para o salão, vê quais garçons (**servidores**) estão mais livres e direciona os clientes para eles. Se um garçom, por exemplo, passa mal e sai do salão (falha no servidor), o gerente para de mandar clientes para ele e distribui entre os que restaram.

Puxando para um lado um pouco mais técnico, o LB atua como um **Proxy Reverso**. Ele fica entre os clientes (internet) e os servidores de back-end. A função dele principal não só é evitar sobrecarga, mas também dar possibilidade de Alta Disponibilidade (HA - High Availability) e permitir a famosa **Escalabilidade Horizontal** - adicionar mais máquinas lado a lado, ao invés de comprar uma máquina mais potente.

## Atuação

Ele vai atuar como o ponto único inicial para os clientes se comunicarem com os servidores. Sendo assim, ele que direciona para onde a request do cliente deve ser feita.

| sem load balancer                    | com load balancer                    |
| ------------------------------------ | ------------------------------------ |
| ![](/assets/load-balancer/1.png) | ![](/assets/load-balancer/2.png) |


> Você pode se perguntar, já que ele é o ponto único, se ele cair a aplicação quebra? Vejamos abaixo:

Obviamente, assim como para muitas outras coisas na vida real, existe sempre uma possível solução. Para esse não é diferente: Load Balancers nunca trabalham sozinhos. Eles operam em pares (modo Ativo-Passivo ou Ativo-Ativo) para que, se o LB principal falhar, o secundário assuma.


## Tipos de load balancers

Os balanceadores podem ser classificados dependendo da carga que ele verifica. No mercado, quando vemos sobre tipos de load balancers, basicamente estamos falando da camada do Modelo OSI que eles atuam.

> Se quiser saber um pouco mais sobre o Modelo OSI, na seção de referências deixei uns links bem legais.

### Balanceamento de carga de Aplicações

Muitas das aplicações grandes e modernas hoje em dia possuem farms de servidores com vários sendo dedicados a funções específicas da aplicação. Então, o load balancer vai examinar o conteúdo da requisição (como cabeçalho HTTP ou IDs de sessão SSL) para redirecionar o tráfego.

- **Exemplo**: 

> uma aplicação de e-commerce tem serviço de produtos, carrinho e checkout. O load balancer vai enviar as solicitações de produtos para servidores que contêm imagens e vídeos, mas não precisam manter a conexão.
>
> Em contra partida, ele envia as requisições de carrinho para servidores que podem manter várias conexões ao mesmo tempo e salvar dados dos carrinhos por um longo tempo.

Esse atua na **Layer 7**, como ele entende HTTP/HTTPS, ele consegue ler a requisição inteira (cabeçalhos, cookies, rotas da URL). É por isso que ele consegue mandar a requisição do /carrinho para o servidor A e /produtos para o servidor B.

### Balanceamento de carga de Rede (NLB)

Examinam endereços IP e algumas outras informações de rede para direcionar o tráfego. 

Eles rastreiam a origem da aplicação e podem atribuir um IP estático a vários servidores.

Esse cara aqui já é diferente, como pode imaginar, ele atua na camada de Transporte (TCP/UDP). Ele não sabe o que tem dentro da requisição (se é uma foto, um texto ou um vídeo). Ele só olha o IP de origem, IP de destino e a porta. 

Por ser mais "cego", ele é extremamente rápido e lida com volumes absurdos de tráfego.

### Balanceamento de carga Global do Servidor

Os load balancers vão equilibrar as requisições de acordo com os data centers ou servidores disponíveis na região.
Sendo que, as empresas podem ter data centers disponibilizados geograficamente no mundo ou então provedores de nuvem.

### Balanceamento de carga de DNS

Você configura um domínio para um grupo de recursos, então quando uma requisição for feita para ele, o load balancer irá equilibrar para qual irá receber.


## Tipos de tecnologia do Load Balancer

- **Load Balancer de Hardware**: dispositivos físicos que são instalados e mantidos localmente.

- **Load Balancer de Software**: são softwares que são instalados em servidores ou máquinas virtuais privadas ou então entregues como um serviço de nuvem.

A diferença entre os dois é que para hardware você precisa ter um investimento inicial, configuração e manunteção contínua. Ele é bom para casos de uso em que têm pico de tráfego, como um escape.

Os baseados em software são mais flexíveis. Eles custam menos e também podem ser escalados com muita facilidade dado o avanço da computação em nuvem.


## Como funciona

Para evitar que um servidor seja sobrecarregado quando clientes enviam requisição, o load balancer encaminha as solicitações para vários servidores disponíveis ou hospedados em server farms ou data centers.

Quando o servidor escolhido receber a solicitação, ele responde ao cliente por meio do load balancer. Tendo feito isso, o load balancer geralmente encerra a conexão do cliente nele mesmo e abre uma nova conexão com o servidor. Para que o servidor saiba quem é o cliente original, o Load Balancer de camada 7 costuma adicionar um cabeçalho chamado `X-Forwarded-For` com o IP real do cliente.

> O servidor e cliente poderão se comunicar e processar ações até que a sessão seja encerrada.


**Resumindo o fluxo de forma básica**:

- => Cliente envia a requisição para o load balancer;
- => Ele analisa a requisição e encaminha para um servidor disponível (utiliza um algoritmo pré-definido)
- => o servidor processa a requisição e envia a resposta para o cliente.

## Componentes do Balanceamento de Carga

Para a execução da situação acima, temos conceitos e componentes importantes a se ter em mente.

![](/assets/load-balancer/3.png)

O **listener**, por exemplo, é o cara que monitora as requisições em uma determinada porta e protocolo e depois encaminha para um grupo de destino.

Esse **grupo de destino (target group)** é o conjunto de servidores onde o tráfego é distribuído.

Por fim, temos a **verificação de integridade (health check)**, que é o mecanismo que analisa se um servidor está disponível para receber tráfego fazendo chamadas contínuas (pings ou requisições HTTP para uma rota como /health) a cada X segundos. Se o servidor não responder com um status "200 OK" após algumas tentativas, o LB o marca como "Unhealthy" e para de mandar tráfego para ele.

>[!NOTE]
> Os termos Listener, Target Group e Health Check são os nomes dados utilizando como exemplo da AWS (Amazon Web Services) e alguns outros provedores de cloud, mas em outras ferramentas (como NGINX ou HAProxy) os Target Groups podem ser chamados de Upstream ou Backend Pools, por exemplo. Ou seja, as nomenclaturas podem acabar tendo nomes diferentes a depender.

## Vantagens de utilizar um load balancer

- **Disponibilidade**: Se um servidor sofrer algum tipo de problema e resultar em falha, o load balancer irá redirecionar a requisição para outro servidor que está operando normalmente.

- **Desempenho**: Como ele distribui as cargas entre vários servidores, ele consegue evitar gargalos e fazer com que as requisições solicitadas sejam respondidas o mais rápido possível

- **Escalabilidade**: Tendo ele disponível para redirecionar, podemos adicionar quantos servidores queremos sem ter que interromper o serviço de alguma forma.

- **Fácil manunteção**: Assim como dito no tópico anterior, ele redireciona, então isso faz com que também possamos fazer manutenção em qualquer servidor sem ter que impactar no serviço.

- **Segurança**: eles podem incluir criptografia SSL, firewalls de aplicativos web (WAF) e autenticação multifatorial (MFA). Outra coisa bem interessante também, é que ao utilizar um load balancer e ele fazer uma distribuição de carga, evita-se DDoS.


## Algoritmos de Balanceamento de Carga

Quando comentei lá no fluxo básico de funcionamento, citei um tal "algoritmo" que seria responsável por verificar qual servidor está disponível para receber a requisição. Bom, é sobre isso aqui mesmo. Esses caras possuem características especificas para cada caso de uso e necessidade de requisição.

### Balanceamento de carga Estático

Os algoritmos de balanceamento de carga estática seguem padrões e regras fixas sendo independentes do estado atual do servidor.

#### Round-robin

Esse algoritmo usa o DNS (mapeamento nomes <=> IP) para atribuir solicitações a cada servidor. É o mais básico porque só utiliza mesmo os nomes dos servidores para determinar qual vai receber a requisição.

#### Round-robin ponderado

Aqui nesse caso, além do nome, os servidores também agora receberão um "peso". Esse tal peso determina quais servidores devem ter prioridade sobre os outros.

Nesse caso, precisamos de um administrador para setar qual servidor tem prioridade de acordo com a sua capacidade.

#### Hash de IP

O load balancer faz um cálculo chamado hash que simplifica o endereço IP do cliente convertendo em um número. Esse número vai ser mapeado e alocado para os servidores.

Podemos muito ver esse caso em e-commerces, como o exemplo que comentei lá em cima. Temos algo chamado Sticky Session (ou Afinidade de Sessão). Às vezes, o cliente precisa cair sempre no mesmo servidor durante toda a sua navegação (por exemplo, porque o servidor salvou o estado do carrinho na memória local). O Load Balancer usa cookies ou o Hash de IP para "grudar" aquele usuário naquele servidor específico.

### Balanceamento dinâmico de carga

Nesse caso, os algoritmos observam o estado atual do servidor para executar e fazer o balanceamento.

#### Conexão mínima

O nome é intuitivo, ele dá prioridade aos servidores que possuem menos conexões ativas.

#### Conexão mínima ponderada

O algoritmo assume que os servidores podem lidar com mais ou menos conexões de acordo com os pesos pré-definidos.

#### Menor tempo de resposta

Ele combina o menor tempo de conexão com o menor tempo médio de resposta do servidor. O servidor com menos conexões ativas e mais rápido receberá a requisição.

#### Baseado em recursos

O servidor vai ser alocado de acordo com os recursos disponíveis (capacidade de computação e memória). 

Um software chamado **agente** é executado em cada servidor para calcular os recursos do servidor.


## Conclusão

A partir de tudo que deu para ver, podemos concluir que o balanceamento de carga é fundamental para aplicações ou sistemas grandes que processam muitos dados e precisam fornecer dados sem nenhum tipo de perda ou sobrecarga, como por exemplo, um sistema de e-commerce.

---

## Referências

Sobre LB em geral:
- https://www.f5.com/glossary/load-balancer
- https://www.cloudflare.com/learning/performance/what-is-load-balancing/
- https://www.ibm.com/think/topics/load-balancing

Sobre o Modelo OSI:
- https://www.ibm.com/br-pt/think/topics/osi-model
- https://www.fortinet.com/br/resources/cyberglossary/osi-model
- https://www.cloudflare.com/learning/ddos/glossary/open-systems-interconnection-model-osi/