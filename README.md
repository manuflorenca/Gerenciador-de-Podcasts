# Gerenciador de Podcasts

## Descrição

O **Gerenciador de Podcasts** é um projeto desenvolvido como parte do curso de Node.js da DIO (Digital Innovation One). O objetivo principal deste projeto é aprimorar a lógica de programação utilizando Node.js, criando uma aplicação que centraliza diferentes episódios de podcasts, permitindo que os usuários filtrem e visualizem episódios por categoria.

## Funcionalidades

- Listar episódios de podcasts organizados em categorias.
- Filtrar episódios com base no nome do podcast.
- API RESTful para interação com os dados dos podcasts.

## Estrutura do Projeto

A estrutura do projeto é organizada da seguinte forma:

```
/Gerenciador-de-Podcasts
│
├── /docs
│   └── app.md
├── /src
│   ├── /controllers
│   │   └── podcasts-controller.ts
│   ├── /models
│   │   ├── filter-podcast-model.ts
│   │   └── podcast-model.ts
│   ├── /repositories
│   │   ├── podcasts-repository.ts
│   │   └── podcasts.json
│   ├── /routes
│   │   └── routes.ts
│   ├── /services
│   │   ├── filter-episodies-service.ts
│   │   └── list-episodes-service.ts
│   ├── /utils
│   │   ├── content-type.ts
│   │   ├── http-methods.ts
│   │   └── status-code.ts
│   ├── app.ts
│   └── server.ts
├── .env
├── .gitignore
├── LICENSE
└── README.md
```

### Descrição dos Diretórios e Arquivos

- **/docs**: Contém a documentação do projeto.
- **/src**: Contém o código-fonte da aplicação.
  - **/controllers**: Controladores que gerenciam a lógica de negócios e as interações com as rotas.
  - **/models**: Definições de modelos de dados utilizados na aplicação.
  - **/repositories**: Repositórios que lidam com a persistência de dados, incluindo a leitura de arquivos JSON.
  - **/routes**: Definições das rotas da API.
  - **/services**: Serviços que encapsulam a lógica de acesso a dados e manipulação de informações.
  - **/utils**: Utilitários que fornecem funções auxiliares, como tipos de conteúdo e códigos de status HTTP.
- **.env**: Arquivo de configuração de variáveis de ambiente.
- **.gitignore**: Arquivo que especifica quais arquivos ou diretórios devem ser ignorados pelo Git.
- **LICENSE**: Licença do projeto (MIT).
- **README.md**: Este arquivo de documentação.

## Como Executar o Projeto

### Pré-requisitos

- Node.js (versão 14 ou superior)
- npm (gerenciador de pacotes do Node.js)

### Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/manuflorenca/Gerenciador-de-Podcasts.git
   cd Gerenciador-de-Podcasts
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Crie um arquivo `.env` na raiz do projeto e defina a variável `PORT`:

   ```env
   PORT=3333
   ```

### Execução

Para iniciar o servidor em modo de desenvolvimento, utilize o seguinte comando:

```bash
npm run start:dev
```

O servidor estará disponível em `http://localhost:3333`.

### Rotas da API

- **GET /api/list**: Retorna a lista de episódios de podcasts.
- **GET /api/episode?p={nome_do_podcast}**: Retorna a lista de episódios filtrados pelo nome do podcast.

### Exemplo de Resposta

#### Listar Episódios

```json
[
  {
    "podcastName": "flow",
    "episode": "CBUM - Flow #319",
    "videoId": "pQSuQmUfS30",
    "categories": ["saúde", "esporte", "bodybuilder"]
  },
  {
    "podcastName": "flow",
    "episode": "RUBENS BARRICHELLO - Flow #339",
    "videoId": "4KDGTdiOV4I",
    "categories": ["esporte", "corrida"]
  }
]
```

#### Filtrar Episódios

```json
{
  "statusCode": 200,
  "body": [
    {
      "podcastName": "flow",
      "episode": "CBUM - Flow #319",
      "videoId": "pQSuQmUfS30",
      "categories": ["saúde", "esporte", "bodybuilder"]
    }
  ]
}
```

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Contato

Para mais informações, você pode entrar em contato com o autor do projeto através do GitHub: [ManuFlorenca](https://github.com/manuflorenca).
