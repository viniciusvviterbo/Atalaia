![logo nome](https://user-images.githubusercontent.com/24854541/81432755-dd4a0300-9139-11ea-974c-e5457c589024.png)

![divisoria](https://user-images.githubusercontent.com/24854541/81429691-8d1c7200-9134-11ea-82a3-2e4f0eea1211.png)

[Baixe a APK](https://exp-shell-app-assets.s3.us-west-1.amazonaws.com/android/%40viniciusvviterbo/Atalaia-445689019a7b4fd695d67ef4ffb2b265-signed.apk)

Esse app foi desenvolvido com o intuito de manter todos os terráqueos informados sobre a possibilidade de colisão com algum corpo celeste forasteiro.

São listados todos os asteróides ou cometas que possuem distância de periélio menor ou igual a 1.3 UA (unidade astronômica. 1UA equivale à distância entre a Terra e o Sol).

Na ocasião de impacto iminente, é recomendado buscar o abrigo mais próximo e assistir à trilogia Mad Max® como meio educativo de reinserção numa sociedade pós-apocalíptica (Mad Max: Fury Road® e Water World® podem ser assistidos como bibliografia complementar).
            
Essa aplicação consome a [API NeoWs](https://www.neowsapp.com/) (Near Earth Object Web Service) com dados oriundos da [NASA JPL Asteroid Team](https://cneos.jpl.nasa.gov/) (Time de Asteróides do Laboratório de Propulsão a Jato da NASA).

A documentação dessa API e outras podem ser encontradas [aqui](https://api.nasa.gov/).

Inspirações artísticas para o design do app:

[Azedo](https://befonts.com/azedo-font.html) - por [Pedro Azedo](https://befonts.com/designer/pedro-azedo)

Comet Icon - disponível em [Flat Icon](https://www.flaticon.com/authors/flat-icons)

![divisoria](https://user-images.githubusercontent.com/24854541/81429691-8d1c7200-9134-11ea-82a3-2e4f0eea1211.png)

## Dependências, Teste e Desenvolvimento

1. Clone esse repositório
```
git clone github.com/viniciusvviterbo/Atalaia
```
2. Instale as dependências do projeto 
```shell
cd Atalaia
npm install
```
3. Inicie o serviço _expo_ para o inicializar o modo de desenvolvimento
```shell
expo start
```
 
## Gerando a APK/IPA do app

### Android

Para gerar apenas a APK, execute:
```shell
expo build:android -t apk
```
ou
```shell
expo build:status
expo build:android
```

### iOS

Para gerar a IPA, execute:
```shell
expo build:status
expo build:ios
```

![divisoria](https://user-images.githubusercontent.com/24854541/81429691-8d1c7200-9134-11ea-82a3-2e4f0eea1211.png)

**[GNU AGPL v3.0](https://www.gnu.org/licenses/agpl-3.0.html)**
