![Descrição da imagem](/assets/load-balancer/lb.png)

> O load balancer é um dispositivo ou software que vai distribuir o tráfego de rede entre os servidores a fim de não haver sobrecarga.

Ele vai atuar como o ponto único inicial para os clientes se comunicarem com os servidores. Sendo assim, ele que direciona para onde a request do cliente deve ser feita.

| sem load balancer                    | com load balancer                    |
| ------------------------------------ | ------------------------------------ |
| ![Descrição da imagem](/assets/load-balancer/1.png) | ![Descrição da imagem](/assets/load-balancer/2.png) |

## Tipos de load balancers

Os balanceadores podem ser classificados dependendo da carga que ele verifica.

### Balanceamento de carga de aplicações

Muitas das aplicações grandes e modernas hoje em dia possuem farms de servidores com vários sendo dedicados a funções específicas da aplicação. Sendo assim, o load balancer vai examinar o conteúdo da requisição (como cabeçalho [[HTTP]] ou IDs de sessão SSL) para redirecionar o tráfego.

Exemplo: uma aplicação de e-commerce tem serviço de produtos, carrinho e checkout. O load balancer vai enviar as solicitações de produtos para servidores que contêm imagens e vídeos, mas não precisam manter a conexão.

Em contra partida, ele envia as requisições de carrinho para servidores que podem manter várias conexões ao mesmo tempo e salvar dados dos carrinhos por um longo tempo.

### Balanceamento de carga de rede (NLB)

Examinam endereços IP e algumas outras informações de rede para direcionar o tráfego. Eles rastreiam a origem da aplicação e podem atribuir um IP estático a vários servidores.

### Balanceamento de carga global do servidor

Os load balancers vão equilibrar as requisições de acordo com os data centers ou servidores disponíveis na região.

As empresas podem ter data centers disponibilizados geograficamente no mundo ou então provedores de nuvem.

### Balanceamento de carga de DNS

Você configura um domínio para um grupo de recursos, então quando uma requisição for feita para ele, o load balancer irá equilibrar para qual irá receber.


## Tipos de tecnologia do Load Balancer

**Load Balancer de Hardware**: dispositivos físicos que são instalados e mantidos localmente.

**Load Balancer de Software**: softwares que são instalados em servidores ou máquinas virtuais privadas ou então entregues como um serviço de nuvem.

A diferença entre os dois é que para hardware você precisa ter um investimento inicial, configuração e manunteção contínua. Ele é bom para casos de uso em que têm pico de tráfego, como um escape.

Os baseado em software são mais flexíveis. Eles custam menos e também podem ser escalados com muita facilidade dado o avanço da computação em nuvem.


## Como funciona

Para evitar que um servidor seja sobrecarregado quando clientes enviam requisição, o load balancer encaminha as solicitações para vários servidores disponíveis ou hospedados em server farms ou data centers.

Quando o servidor escolhido receber a solicitação, ele responde ao cliente por meio do load balancer. Tendo feito isso, o load balancer conclui a conexão servidor-cliente, combinando o IP do cliente com o do servidor selecionado.

> O servidor e cliente poderão se comunicar e processar ações até que a sessão seja encerrada.


**Resumindo o fluxo de forma básica**:

- => Cliente envia a requisição para o load balancer;
- => Ele analisa a requisição e encaminha para um servidor disponível (utiliza um algoritmo pré-definido)
- => o servidor processa a requisição e envia a resposta para o cliente.

## Componentes do Balanceamento de Carga

Para a execução da situação acima, temos conceitos e componentes importantes a se ter em mente.

![Descrição da imagem](/assets/load-balancer/3.png)

O **listener**, por exemplo, é o cara que monitora as requisições em uma determinada porta e protocolo e depois encaminha para um grupo de destino.

Esse **grupo de destino** é o conjunto de servidores onde o tráfego é distribuído.

Por fim, temos a **verificação de integridade**, que é o mecanismo que analisa se um servidor está disponível para receber tráfego.

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

