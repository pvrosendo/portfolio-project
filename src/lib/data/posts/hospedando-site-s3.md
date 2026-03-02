
Aqui mostrarei um tutorial simplificado de como hospedar um site estático no bucket S3 da AWS.

![Balde/bucket](/assets/hospedando-site-s3/balde.png)

## Implementando o front-end no S3

Inicialmente é válido destacar que a stack de exemplo que estou usando é do meu projeto Sharkar: Angular 17, Node v18.20.8, Java 17 com Spring Boot 3.3.8 e de banco o SQL Server.

Tendo isso em mente, iniciaremos o build do projeto em angular para colocá-lo dentro do Bucket S3 da AWS.

> Caso você esteja utilizando isso como guia, é só ter em mente que para projetos que utilizem outro framework, pode ser que tenha algumas diferenças específicas. De qualquer forma, em geral, a ideia praticada será a mesma.

### Build do Projeto

Gerei o build do projeto com um simples ``ng build`` dentro do projeto, assim, ele vai gerar a pasta `dist`, que é onde os arquivos estáticos gerados do projeto ficarão.

```
ng build
```

![Pasta de build do projeto](/assets/hospedando-site-s3/1.png)

Com os arquivos dentro da pasta, agora podemos nos direcionar ao S3.

### Criando o Bucket

1. Para utilizar qualquer serviço da AWS precisa de um conta, então esse seria o primeiro passo: https://aws.amazon.com/pt/


2. Após isso, partiremos para a seção do S3, acessando a página geral de todos os serviços e vendo ele ali na seção de armazenamento (ou storage).

![Console da AWS com todos os serviços](/assets/hospedando-site-s3/2.png)


3. Ao acessar a página você verá os buckets que possui. Se você nunca usou, vai estar vazio, no meu caso o *Sharkar* já está ativo.

![Seção do S3](/assets/hospedando-site-s3/3.png)

4. Vamos criar o bucket novo clicando no botão destacado.

Na nova página, teremos duas seções que precisamos mudar por agora: nome do bucket e permissões.

No nome do bucket é importante você ter noção de que esse nome vai estar presente no seu site, pelo menos até o caso de você ajustar (comprar) o domínio e personalizar.

**Exemplo**:

Dependendo da região, o S3 pode usar dois formatos de URL:

- s3-website-Region ‐ ``http://nomedobucket.s3-website-Region.amazonaws.com``
- s3-website.Region ‐ ``http://nomedobucket.s3-website.Region.amazonaws.com``

O do sharkar, por exemplo, antes de ajustar o domínio, está assim: 

``http://sharkar.s3-website.us-east-2.amazonaws.com/``

5. Agora com o nome definido vamos aos ajustes de permissão

![Seção de permissões do S3](/assets/hospedando-site-s3/4.png)

Iremos até a seção de acesso e deixaremos a configuração desta forma.

> Por que deixar assim você deve estar se perguntando?

É basicamente para dizer ao S3 que queremos dar permissão ao bucket de acesso ao público, mas não para alteração, apenas para visualização. Afinal, se colocarmos bloqueado, o site não será visível e poderíamos ter um erro desse estilo:

![](/assets/hospedando-site-s3/5.png)

6. Tendo configurado de acordo, clique em criar e depois clique no nome do bucket para acessar ele.

Ao clicar no nome do bucket você vai ver que ele está vazio na seção "Objetos", então é agora que iremos subir os arquivos que geramos lá na fase de build do projeto.

Não tem muito mistério aqui, você irá apertar em carregar e adicionar os arquivos que foram gerados na pasta `/dist/nome-do-projeto/browser/` (geralmente contendo o index.html, style.css etc).

7. Depois de adicionar os arquivos vamos configurar o S3 como uma hospedagem de site estático.

vá para `propriedades => hospedagem de site estático => editar`

![Seção de Hospedagem](/assets/hospedando-site-s3/6.png)

O seu vai estar diferente disso, mas é só na nova página clicar em ativar e deixar a configuração assim:


![Edição da Hospedagem](/assets/hospedando-site-s3/7.png)

*Não tem muito mistério.*

8. Após setar como hospedagem, agora só precisamos criar uma policy na aba permissions, então vá para `Permissões => Política do Bucket => editar`.

Ali você vai alterar o json para setar uma política de acesso. Basta seguir essa linha e mudar apenas para o nome do seu bucket:


```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "AllowPublicAccess",
      "Action": [
        "s3:GetObject"
      ],
      "Effect": "Allow",
      "Resource": "arn:aws:s3:::nome-do-seu-bucket/*",
      "Principal": "*"
    }
  ]
}
```

9. Após isso só dar duas piruetas e três cambalhotas.
10. To gastando. Após isso é só acessar seu site que ele vai estar no ar.



