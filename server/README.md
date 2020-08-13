# PROFFY - Back-end

## Sobre o projeto

O back-end do projeto **Proffy** foi desenvolvido utilizando **NodeJS** com **Typescript**.
Para criar os **testes automatizados** foi utilizado o **Jest** com a técnica de desenvolvimento **TDD (Test Driven Development)**.

### Feito Com

Abaixo segue o que foi utilizado na criação do back-end:

- [Typescript](https://github.com/microsoft/TypeScript) - É uma ferramenta que adiciona tipagem ao Javascript, permitindo uma maior inteligência por parte da IDE.
- [TS Dev Node](https://github.com/whitecolor/ts-node-dev#readme) - Utilizado no ambiente de desenvolvimento com TS para compilar o código e restartar o servidor sempre que um arquivo é modificado.
- [Cors](https://github.com/expressjs/cors) - É uma ferramenta que permite controlar o acesso de terceiros a recursos do servidor.
- [Express](https://github.com/expressjs/express) - É um framework para aplicativos NodeJS que fornece um conjunto robusto de recursos para aplicativos web e mobile.
<!-- - [Multer](https://github.com/expressjs/multer#readme) - É um middleware utilizado para upload de arquivos. -->
- [Knex](https://github.com/knex/knex) - É um construtor de consultas SQL para Postgres, MSSQL, MySQL, MariaDB, SQLite3, Oracle e Amazon Redshift, projetado para ser flexível e portátil.
- [SQLite3](https://github.com/mapbox/node-sqlite3) - É um driver para utilização do SQLite no NodeJS.
<!-- - [Celebrate](https://github.com/arb/celebrate) - É um middleware que utiliza o [Joi](https://github.com/sideway/joi) para validação de requisições. -->

## Como executar

Para conseguir executar e utilizar o back-end siga os passos abaixo.

### Pré-requisitos

Para executar o back-end é necessário que você tenha o NodeJS e o NPM instalados na sua máquina, acesse o [site oficial no NodeJS](https://nodejs.org/en/download/) para saber como instalá-los.

### Instalação do projeto

1. Copie ou clone os arquivos deste repositório para uma pasta local.

2. Acesse a pasta `server` local do projeto através de um terminal e faça a instalação das dependências usando o comando:

```sh
npm install
```

3. Inicie o banco de dados executando as migrations usando o comando:

```sh
npm run knex:migrate
```

4. Com o banco de dados pronto, inicie o servidor usando o comando:

```sh
npm run start
```

A API fica localizada em `http://localhost:3333/`. Faça uma requisição através do navegador para a rota `http://localhost:3333/hw` e caso a resposta da requisição for o JSON abaixo a API foi iniciada corretamente e está pronta para uso.

```json
{
  "success": "Hello World :)"
}
```

### Executando testes

1. Acesse a pasta `server` local do projeto através de um terminal e faça a instalação das dependências (caso não tenha feito) usando o comando:

```sh
npm install
```

2. Execute os testes usando o comando:

```sh
npm run test
```

## Rotas

Esta API contem as seguintes rotas:

- `POST /classes`: rota responsável por cadastrar uma nova aula
- `GET /classes`: rota responsável por listar todas as aulas fintradas por week_day, subject e time
- `POST /connections`: rota responsável por cadastrar uma nova conexão
- `GET /connections`: rota responsável retornar o total de conexões

## Exemplos

<details>
<summary><b>POST /classes</b></summary>
<br>
Requisição:

```json
// POST /classes
// Content-Type: application/json
{
  "name": "Gabriel Santos",
  "avatar": "https://www.github.com/gab-santos.png",
  "whatsapp": "16991223344",
  "bio": "Me considero Desenvolvedor Junior e utilizo Javascript/Typescript com ReactJS, React Native e NodeJS. Tenho conhecimento em testes automatizados usando Jest em NodeJS e já utilizei bancos de dados SQL e NoSQL com ênfase em MongoDB. Sei utilizar conteinerização com Docker e tenho um breve conhecimento em CI/CD com o GitLab. Atualmente moro no interior de São Paulo, sou apaixonado por séries de super-heróis e livros de fantasia.",
  "subject": "Matemática",
  "cost": 120,
  "schedule": [
    { "week_day": 1, "from": "8:00", "to": "12:00" },
    { "week_day": 3, "from": "10:00", "to": "13:00" },
    { "week_day": 4, "from": "13:00", "to": "18:00" }
  ]
}
```

Resposta:

```json
// Status: 201 Created
{
  "id": 1,
  "name": "Gabriel Santos",
  "avatar": "https://www.github.com/gab-santos.png",
  "whatsapp": "16991223344",
  "bio": "Me considero Desenvolvedor Junior e utilizo Javascript/Typescript com ReactJS, React Native e NodeJS. Tenho conhecimento em testes automatizados usando Jest em NodeJS e já utilizei bancos de dados SQL e NoSQL com ênfase em MongoDB. Sei utilizar conteinerização com Docker e tenho um breve conhecimento em CI/CD com o GitLab. Atualmente moro no interior de São Paulo, sou apaixonado por séries de super-heróis e livros de fantasia.",
  "subject": "Matemática",
  "cost": 120,
  "schedule": [
    { "week_day": 1, "from": "8:00", "to": "12:00" },
    { "week_day": 3, "from": "10:00", "to": "13:00" },
    { "week_day": 4, "from": "13:00", "to": "18:00" }
  ]
}
```

</details>

<br>
<details>
<summary><b>GET /classes</b></summary>
<br>
Requisição:

```json
// GET /classes?week_day=1&subject=Matemática&time=8:00
```

Resposta:

```json
// Status: 200 OK
[
  {
    "id": 1,
    "name": "Gabriel Santos",
    "avatar": "https://www.github.com/gab-santos.png",
    "whatsapp": "16991223344",
    "bio": "Me considero Desenvolvedor Junior e utilizo Javascript/Typescript com ReactJS, React Native e NodeJS. Tenho conhecimento em testes automatizados usando Jest em NodeJS e já utilizei bancos de dados SQL e NoSQL com ênfase em MongoDB. Sei utilizar conteinerização com Docker e tenho um breve conhecimento em CI/CD com o GitLab. Atualmente moro no interior de São Paulo, sou apaixonado por séries de super-heróis e livros de fantasia.",
    "subject": "Matemática",
    "cost": "120"
  }
]
```

</details>

<br>
<details>
<summary><b>POST /connections</b></summary>
<br>
Requisição:

```json
// POST /connections
// Content-Type: application/json
{
  "user_id": 1
}
```

Resposta:

```json
// Status: 204 No Content
```

</details>

<br>
<details>
<summary><b>GET /connections</b></summary>
<br>
Requisição:

```json
// GET /connections
```

Resposta:

```json
// Status: 200 OK
{
  "total": 1
}
```

</details>

<p align="center">💙</p>
