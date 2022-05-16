let language = 'JavaScript!' // {1}
let palava = 'Ruby!' // {2} – lança um erro
console.log(language)

/*Poo com classes */
//Agora possuimos um construtor
class Livros {
  constructor(titulo, paginas, isbbn) {
    this.titulo = titulo
    this.paginas = paginas
    this.isbbn = isbbn
  }

  escrevaPag() {
    console.log(this.paginas)
  }
}
