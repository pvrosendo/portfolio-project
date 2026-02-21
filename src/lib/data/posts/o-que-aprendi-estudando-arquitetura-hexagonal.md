# O que aprendi estudando Arquitetura Hexagonal

A Arquitetura Hexagonal, também conhecida como Ports & Adapters, foi proposta por Alistair Cockburn com um objetivo claro: isolar o núcleo da aplicação do mundo exterior.

## O problema que ela resolve

Quantas vezes você já se pegou com testes acoplados ao banco de dados, ou com lógica de negócio misturada com detalhes de infraestrutura? Esse é exatamente o problema que a arquitetura hexagonal resolve.

## Ports e Adapters

A ideia central é simples:

- **Ports**: interfaces que definem como o mundo exterior se comunica com o núcleo
- **Adapters**: implementações concretas dessas interfaces

O núcleo da aplicação não sabe se está lidando com um banco PostgreSQL, um mock em memória ou um arquivo CSV. Ele só conhece as abstrações.

## O que mudou no meu código

Depois de adotar esse modelo, meus testes ficaram drasticamente mais rápidos e isolados. A lógica de negócio passou a ser testável sem subir nenhuma infraestrutura.

Compartilhando tudo aquilo que foi compartilhado comigo. 🐺
