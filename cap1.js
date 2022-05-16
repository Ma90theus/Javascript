// Comentario em linha
/* Comentário em bloco*/

/*Declarando variáveis e as escrevendo pelo console */
var meuNome //Declarei a variável mas não atribui nada a ela
var num = 10 //Declarei a variável e agora atribui algo a ela

/*Formas de escrever algo na minha tela */
console.log('num:' + typeof num + num)
//alert("conteudo")
//document.write("conteudo")

/* Escopo de variáveis */
var myVariable = 'global'
myOtherVariable = 'global'
function myFunction() {
  myVariable = 'local'
  return myVariable
}
function myOtherFunction() {
  myOtherVariable = 'local'
  return myOtherVariable
}
console.log(myVariable) //{1}
console.log(myFunction())
console.log(myVariable) //{2}
console.log(myOtherVariable) //{3}
console.log(myOtherFunction()) //{4}
console.log(myOtherVariable) //{5}

/* Operadores
  Lógicos
  Aritiméticos
  Atribuição
  Comparação */

/*Estrutura de Seleção */
//ifelse
var idade = 23
if (idade == 23) {
  console.log('voce esta velho')
} else {
  console.log('ta novinho hein pae')
}

//Switch case
var nomeMorena = 'Elaine'
switch (nomeMorena) {
  case 'Marcela':
    console.log('Fodeu')
    break
  case 'Fabiola':
    console.log('Fodeu')
    break
  case 'Elaine':
    console.log('Se deu bem hein meu camarada')
    break
  default:
    console.log('Tu se fodeu legal')
}
//Laços
//For
for (var cont = 0; cont < 10; cont++) {
  console.log(cont)
}
//While
var i = 10
while (i > 0) {
  console.log(i)
  i--
}
//Do while
var i = 0
do {
  console.log(i)
  i++
} while (i < 10)
{
}

//Funções
function digaOla() {
  console.log('Ola')
}
digaOla()

function digaPalavra(palavra) {
  console.log(palavra)
}
digaPalavra('Vamos codar')

//Objetos
objeto = {
  chave: 'valor'
}

livro = {
  titulo: 'Eusou o num 4',
  paginas: '300pgs',
  editora: 'globo',

  mostrar: function () {
    console.log('titulo')
  }
}
