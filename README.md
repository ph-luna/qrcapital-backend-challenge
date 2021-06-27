# Desafio: QR Capital Backend Pleno

Desafio proposto pela QR Capital, consiste basicamente em criar uma **RestAPI** para cadastrar comentários (Tweets) de pessoas e avaliar sua opinião utilizando um modelo de análise de sentimentos de textos **VADER**, cadastrar a pontuação e depois retornar em um EndPoint com o nome do autor sua opinião média (positiva ou negativa) e também a pontuação média.

Para executar o projeto instale as dependencias utilizando o comando _yarn_ na raíz do projeto.

## Commandos

```bash
yarn dev #Inicia um servidor de desenvolvimento em Typescript

yarn build #Compila o código typescript em javascript (outDir: ./dist)

yarn start #Executa a versão transpilada
```

URL base da API: **http://localhost:7777/**

Não é necessário instanciar serviço de banco de dados visto que o projeto utiliza um serviço online de banco de dados PostGres gratuito [ElephantSQL](https://www.elephantsql.com)


## Rotas

Rota para cadastrar novo **tweet**: http://localhost:7777/tweets

**Exemplo de requição:**
```json
{
    "author": "michael_saylor",
    "text": "I dont like it.",
    "link": "https://twitter.com/michael_saylor/status/1406936342664290307"
}
```

Rota para listar opinião do autor: http://localhost:7777/[nome_do_autor]

Qualquer dúvida é só enfiar um email para: **ph.luna.vieira@gmail.com**