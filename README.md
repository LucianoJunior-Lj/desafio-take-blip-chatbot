# Desafio Take Blip


## Sobre o Desafio

  Você deverá construir um Contato Inteligente (bot) em nossa plataforma, mas como assim 😱?

  Calma não se preocupa!

  Iremos te enviar um fluxo conversacional que você deverá implementar no chatbot, além disso existem vários materiais de apoio (Curso, tutoriais) para te ajudar no desenvolvimento do chatbot que estão listados abaixo na sessão de Materiais de apoio.


## O que devo fazer?

### Criação do chatbot

  Primeiramente crie uma conta no nosso portal e depois crie um chatbot usando a opção "Criar do zero".

  Com o auxílio do material de apoio você deve desenvolver o chatbot seguindo o fluxo conversacional e fazer exatamente como foi solicitado. Nesse fluxo estão as interações e mensagens que seu chatbot deve exibir.

  > É importante que antes de iniciar qualquer parte você acesse o fluxo proposto para entender o que esperamos que o seu chatbot faça.

  >Outro ponto importante é acessar os materiais de apoio e estudar os conteúdos disponibilizados para entender como você fará o seu chatbot.

  No fluxo conversacional existe um componente de carrossel com informações sobre o Desafio, ao clicar nessa opção o chatbot deve listar informações sobre os 5 repositórios de linguagem C# mais antigos da Take ordenados de forma crescente por data de criação.

  Para isso será necessário que você crie uma API que realize a integração com a API pública do GitHub.

  A imagem de cada card do carrossel deve ser o avatar da Take no GitHub. O título de cada card deve ser o nome completo do repositório, e o subtítulo deve ser a descrição do repositório. Os cards não devem ter nenhum botão.

  >IMPORTANTE -> Não tentar chamar a API do git direto pelo Builder (plataforma da Take). A chamada da API do git tem que partir da API que você irá construir.


### Criação da API

  Para criar a API solicitada, você pode usar qualquer uma das linguagens a seguir:
  - C#
  - Javascript.

  > Para publicar a sua API, você pode utilizar qualquer serviço disponível no mercado hoje. Alguns sites que oferecem esse serviço são: Azure, Google, Amazon, Heroku, etc.


## Como meu teste será validado?

  Após concluído o desafio, você deve criar um repositório publico para análise com o código de sua API e o json do seu chatbot. Você deverá exportar o fluxo do seu chatbot para ter acesso ao json.

  O seu repositório pode ter a seguinte estrutura:

    challenge
    ├── Api
    ├── Flow
    │ └── mybotflow.json

  Após isso só nos enviar o link do seu repositório que iremos analisar.


## Resultados esperados

  - O fluxo conversacional do seu chatbot deve estar exatamente como o que está sendo pedido no exemplo enviado;
  - Seu chatbot deve consumir a sua API intermediária (API que você criou para consumir a API do GitHub);
  - Você deverá exportar o fluxo do seu chatbot e inserir no repositório o .json do fluxo;
  - Ao final, nos envie o link do repositório para análise.


## Como rodar a API localmente

  1. Clone o repositório

  - Use o comando: `git clone git@github.com:LucianoJunior-Lj/desafio-take-blip-chatbot.git`.
  - Entre na pasta do repositório que você acabou de clonar:
    - `cd desafio-take-blip-chatbot`

  2. Crie a imagem docker

  - `docker build -t nomeDaImagem .`
  
  3. Crie um container utilizando a imagem criada

  - `docker run -p 3001:3001 -it nomeDaImagem`

  4. Rota disponivel

  - `localhost:3001/repositories/five-oldest`

  - Retorna um array com os 5 repositorios mais antigos da take blip, que utiliza c# 


## Link da API

  [APIDesafioTake](https://luciano-junior-api-para-bot.herokuapp.com/repositories/five-oldest)


## Como rodar o bot

  1. Crie um bot na [plataforma](https://portal.blip.ai/) da take blip.
  2. Importe o arquivo testepraticobot1.json no seu bot criado.
  Rota do arquivo:

    challenge
      ├── Api
      ├── Flow
      │ └── testepraticobot1.json

