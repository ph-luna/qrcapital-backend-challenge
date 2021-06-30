# Desafio: QR Capital Backend Pleno

Desafio proposto pela QR Capital, consiste basicamente em criar uma **RestAPI** para cadastrar comentários (Tweets) de pessoas e avaliar sua opinião utilizando um modelo de análise de sentimentos de textos **VADER**, cadastrar a pontuação e depois retornar em um **EndPoint** pesquisando pelo nome, a opinião (positiva ou negativa) e a pontuação média.

## Disclaimer

Nesse projeto utilizei **Typescript, Express.Js, PostGres e o Babel** como compilador/transpilador e **Jest** para executar teste automatizados.  
Também utilizei arquitetura **DDD (Domain Driven Design)** seguindo os princípios **SOLID**. Os testes apenas testam a execução dos serviços e como estes estão isolado a execução acaba sendo _"pura"_ permitindo que seja testado o **output** de cada serviço.

O projeto utiliza o TypeORM e por isso está configurado para funcionar com o conceito de **migrations**. Utilização o comando **yarn typeorm** é possível executar os comandos que a **CLI** do typeorm suporta, mais informações [TypeORM CLI](https://typeorm.io/#/using-cli).

Lembrando que caso queira conectar a um banco de dados (PostGres) próprio é necessário configurar a conexão dentro do arquivo **ormconfig.json** e em seguida executar o comando **yarn typeorm migrations:run** para executar todas as migrations e configurar as tabelas de acordo com o que o servidor espera.

## Commandos

Para executar o projeto instale as dependencias utilizando o comando _yarn_ na raíz do projeto.

```bash
yarn dev #Inicia um servidor de desenvolvimento em Typescript

yarn build #Compila o código typescript em javascript (outDir: ./dist)

yarn start #Executa a versão transpilada

yarn test #Executa os testes da aplicação

yarn typeorm <comands> #Executa o comando da CLI do TypeORM
```

URL base da API: **http://localhost:7777**

Não é necessário instanciar serviço de banco de dados visto que o projeto utiliza um serviço online de banco de dados **PostGres gratuito** [ElephantSQL](https://www.elephantsql.com)

## Rotas

A rota de envio de Tweet contém **validação json**, enviar paramêtros errados retornará um erro 400. Já a rota de validação retornará um erro 404 se pesquisado um usuário que não existe.

Rota para cadastrar novo **tweet**: [POST] http://localhost:7777/tweets

**Exemplo de requição:**

```json
{
  "author": "michael_saylor",
  "text": "I dont like it.",
  "link": "https://twitter.com/michael_saylor/status/1406936342664290307"
}
```

Rota para listar opinião do autor: [GET] http://localhost:7777/{nome_do_autor}

Qualquer dúvida é só enviar um email para: **ph.luna.vieira@gmail.com**
