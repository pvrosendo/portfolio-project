# Docker: do básico ao produção

"Funciona na minha máquina" é o inimigo de todo dev. Docker é a solução.

## O que é um container?

Um container é um processo isolado que carrega tudo que precisa para rodar: código, runtime, bibliotecas e configurações. Sem surpresas no deploy.

## O Dockerfile

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 3000
CMD ["node", "dist/index.js"]
```

## Multi-stage builds

Use multi-stage builds para reduzir o tamanho da imagem final. Separe o ambiente de build do ambiente de produção.

```dockerfile
# Stage 1: build
FROM node:20-alpine AS builder
WORKDIR /app
COPY . .
RUN npm ci && npm run build

# Stage 2: produção
FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY package*.json ./
RUN npm ci --only=production
CMD ["node", "dist/index.js"]
```

## Docker Compose

Para desenvolvimento local, docker-compose é indispensável. Sobe banco, cache, filas e a aplicação com um único comando.

```yaml
services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      DATABASE_URL: postgres://user:pass@db:5432/mydb
    depends_on:
      - db

  db:
    image: postgres:16-alpine
    environment:
      POSTGRES_USER: user
      POSTGRES_PASSWORD: pass
      POSTGRES_DB: mydb
```

Containerize tudo. Você vai me agradecer. 🐋
