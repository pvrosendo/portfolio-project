# PostgreSQL Indexes: o guia que eu precisava

Índices são uma das ferramentas mais poderosas e mal-compreendidas em bancos de dados relacionais.

## Por que indexes importam?

Uma query sem índice em uma tabela com milhões de registros faz um sequential scan. O banco lê cada linha, uma por uma. Com o índice certo, ele vai direto ao ponto.

## Os tipos principais

- **B-Tree**: o padrão. Funciona para a maioria dos casos (`=`, `<`, `>`, `BETWEEN`, `LIKE` com prefixo).
- **Hash**: apenas para igualdade (`=`). Mais rápido que B-Tree nesse caso específico.
- **GIN**: para arrays, JSONB e full-text search.
- **GiST**: para tipos geométricos e dados geoespaciais.

## Quando NÃO criar um índice

Tabelas pequenas, colunas com baixa cardinalidade e tabelas com muitos writes são casos onde o índice pode fazer mais mal do que bem.

`EXPLAIN ANALYZE` é seu melhor amigo. Sempre. 📊
