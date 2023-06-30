### Resumo

A ideia desse projeto é criar um renderizador igual o react, vue ou outra tecnologia similar, onde irá atualizar as informações na tela em tempo real com JS puro.


### Próximas etapas


1. Renderização
	. Por nodeElement
	. Por String
		. Precisa pegar o nome da tag para criar o elemento node (regex) [1]
2. Atributos
	. Passar tudo por objeto
	. Passar tudo por string
		Pegar todos os parametros da string para adicionalos no elemento node (regex para pegar os atributos) [2]
3. Atualização dos estados
	Nó no DOM


> Regex

1. Pegar o nome ta tag de uma string html
*O problema inicial é pegar todas as tags dentro de uma estrutura html, a regex abaixo não resolve esse problema, então precisamos pegar o nome de todas as tags dentro de um conjunto html, se isso não funcionar, precisaremos pensar em outra forma*
```js

let [_, tagName] = "<p class='paragraph'>asdasd</p>".match(/<([^\s>]+)(\s|>)+/)

```

2. Pegar os atributos de um elemento

```js

var string = "<span class='asdasdasd' title='titulo de teste'></span>";
var regexp = /(\S+)=["']?((?:.(?!["']?\s+(?:\S+)=|\s*\/?[>"']))+.)["']?/g;

var array = [...string.matchAll(regexp)];

```