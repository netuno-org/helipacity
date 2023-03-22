![Logo](https://raw.githubusercontent.com/netuno-org/helipacity/main/docs/logo.svg)

# HelipaCity

Portal da Favela Heliópolis que fica em São Paulo, Brasil.

## Requisito

### Plataforma Netuno

[Siga os passos aqui](https://doc.netuno.org/docs/pt-PT/installation/)

## Instalação Automática da Aplicação

```
./netuno app github=netuno-org/helipacity
```

### Sincronizar os Dados

Para utilizar a base de dados com as imagens que estão online, faça estes passos para sincronizar:

```
rm -rf dbs
rm -rf storage/database/*
wget https://helipacity.com/dbs-dev.tar.gz
wget https://helipacity.com/storage-database.tar.gz
tar -xzf dbs-dev.tar.gz
mv dbs-dev dbs
tar -xzf storage-database.tar.gz storage/database/
rm dbs-dev.tar.gz
rm storage-database.tar.gz
```

> Vai remover os dados locais e utilizar os dados que estão online.

### Execução

Inicie o servidor Netuno:

```
./netuno server app=helipacity
```

> Pode demorar porque é a primeira vez e a instalação do NPM será executada nas pastas `ui` e` website` dentro da pasta raiz do aplicativo.

:warning: Se tiver o error:
 
```
 npm ERR! code ERESOLVE
 npm ERR! ERESOLVE unable to resolve dependency tree
```

Então execute o comando abaixo dentro da pasta `website`:

`npm install --force`

:white_check_mark: Não é obrigatório, mas é recomendado renomar a pasta da aplicação `(Netuno Root directory)/apps/helipacity/` para o nome desejado, e não esqueça do parâmetro `name` nas configurações:

`config/_development.json`

`config/_production.json`

> Lembre-se de iniciar o servidor Netuno com seu novo nome de aplicativo.

## Processo Manual

### Clone e Instalação

Clone este projeto para o diretório `(Netuno Root directory)/apps/helipacity/`.

Depois instale as dependências NPM excutando no diretório `helipacity/website/`:

`npm install --force` 

### Configuração

Copie o ficheiro de exemplo de configuração executando o seguinte comando:

`cp config/sample.json config/_development.json`

E modifique de acordo com a configuração do seu ambiente local, certifique-se do parâmetro `name`.

### Execução

No diretório raíz do Netuno execute:

`./netuno server app=helipacity`

Irá iniciar o servidor de backend.

Depois execute no diretório `(helipacity app directory)/website/` o seguinte comando:

`npm run start`

Para iniciar o servidor de frontend.


### Para rodar no container substituir na pasta _development.json linha 9 e 10 pelos seguintes endereços:

     "services": {"api": "http://luis-mijias.dev.netuno.org:21290/services/"},
     "url": "http://luis-mijias.dev.netuno.org:21230"
     