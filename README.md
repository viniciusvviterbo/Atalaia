
![Logo Atalaia](https://github.com/viniciusvviterbo/Atalaia/tree/master/src/assets/nome.png)

Esse app foi desenvolvido com o intuito de manter todos os terráqueos informados sobre a possibilidade de colisão com algum corpo celeste forasteiro.

São listados todos os asteróides ou cometas que possuem distância de periélio menor ou igual a 1.3 UA (unidade astronômica. 1UA equivale à distância entre a Terra e o Sol).

Na ocasião de impacto iminente, é recomendado buscar o abrigo mais próximo e assistir à trilogia Mad Max® como meio educativo de reinserção numa sociedade pós-apocalíptica (Mad Max: Fury Road® e Water World® podem ser assistidos como bibliografia complementar).
            
Essa aplicação consome a [API NeoWs](https://www.neowsapp.com/) (Near Earth Object Web Service) com dados oriundos da [NASA JPL Asteroid Team](https://cneos.jpl.nasa.gov/) (Time de Asteróides do Laboratório de Propulsão a Jato da NASA).

A documentação dessa API e outras podem ser encontradas [aqui](https://api.nasa.gov/).

Inspirações artísticas para o design do app:
[Azedo](https://befonts.com/azedo-font.html) - por [Pedro Azedo](https://befonts.com/designer/pedro-azedo)
Comet Icon - disponível em [Flat Icon](https://www.flaticon.com/authors/flat-icons)



### Dependências, Teste e Desenvolvimento

* Clone esse repositório
```
git clone github.com/viniciusvviterbo/Atalaia
```
** Instale as dependências do projeto 
```shell
cd Atalaia
npm install
```
*** Inicie o serviço _expo_ para o inicializar o modo de desenvolvimento
```shell
expo start
```


### Gerando a APK do app

Para gerar apenas a APK, execute:
```shell
expo built:android -t apk
```
ou
```shell
expo built:status
expo built:android
```

Para gerar a IPA, execute:
```shell
expo built:status
expo built:ios
```

**[GNU AGPL v3.0](https://www.gnu.org/licenses/agpl-3.0.html)**
