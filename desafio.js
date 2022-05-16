var vida = 300
var dano = 50
var cura = 30
var vidaInimigo = 50
var danoInimigo = 100
var estado = 1
var condicaoInicio = 1

const reinicializarJogo = () => {
  vida = 300
  vidaInimigo = 50
  estado = 1
  condicaoInicio = 1
  mostrarTela()
}

const novaPartida = () => {
  while (condicaoInicio == 1) {
    var selecao = parseInt(
      window.prompt('Deseja reiniciar o jogo? [1] - Sim / [2] - Não')
    )
    if (selecao == 1) {
      condicaoInicio = 0
      reinicializarJogo()
    } else if (selecao == 2) {
      condicaoInicio = 0
      closeTela()
    } else {
      window.alert('Você não selecionou nada válido')
      window.alert('Por favor insira algo válido')
      condicaoInicio = 1
    }
  }
}
/*Estado Duelo*/
const estadoBatalha = () => {
  while (estado == 1) {
    if (vidaInimigo > 0) {
      if (vida > 0) {
        decisaoround()
      } else {
        window.alert('Voce perdeu')
        novaPartida()
      }
    } else {
      if (vida > 0) {
        window.alert('Voce ganhou')
        novaPartida()
      } else {
        window.alert('Houve um empate')
        novaPartida()
      }
    }
  }
}
/* Inimigo */
const ataquePokemonInimigo = () => {
  vida = vida - danoInimigo
  if (vida >= 0) {
    window.alert('O inimigo te bate, sua vida agora é de: ' + vida)
  }
  estadoBatalha()
}
/* Meu pokemon*/
const ataquePokemon = () => {
  vidaInimigo = vidaInimigo - dano
  if (vidaInimigo >= 0) {
    window.alert('A vida do inimigo agora é de: ' + vidaInimigo)
  }
  ataquePokemonInimigo()
}
const curaPokemon = () => {
  vida = vida + cura
  window.alert('A  sua vida é de: ' + vida)
  ataquePokemonInimigo()
}
const decisaoround = () => {
  window.alert('Que comece o duelo')
  var acaoPokemon = parseInt(window.prompt('Faça algo [1] Atacar [2] curar '))
  switch (acaoPokemon) {
    case 1:
      window.alert('Voce deu: ' + dano + ' de dano')
      ataquePokemon()
      break
    case 2:
      window.alert('Voce deu: ' + cura + ' de cura')
      curaPokemon()
      break
    default:
      window.alert('Voce desperdiçou sua rodada ao não escolher nenhuma das opçoes citadas')
      ataquePokemonInimigo()
  }
}

/*Stats Pokemon inimigo */
const pokemonInimigo = () => {
  window.alert('Pokemon Inimigo: ' + vidaInimigo + ' de vida')
  decisaoround()
}

/*Stats Pokemon */
const pokemon = () => {
  window.alert(
    'Seu pokemon possui: ' +
      vida +
      ' de vida ' +
      dano +
      ' de dano ' +
      cura +
      ' de cura '
  )
  pokemonInimigo()
}

/* Erro do validar escolha*/
const vacilou = () => {
  window.alert('Você deu mole,vai voltar tudo pra largar de ser burro')
  mostrarTela()
}
const validarEscolha = escolha => {
  switch (escolha) {
    case 1:
      window.alert('Escolheu bem')
      pokemon()
      break
    case 2:
      window.alert('Escolheu bem')
      pokemon()
      break
    case 3:
      window.alert('Escolheu bem')
      pokemon()
      break
    default:
      window.alert('Fez Merda')
      vacilou()
  }
}
//Mostrar Tela
const mostrarTela = () => {
  window.alert('Escolha seu Pokemon')
  var escolha = parseInt(
    window.prompt('Escolha o tipo [1]Bulbasauro  [2] Blastoise  [3] Charmander')
  )
  validarEscolha(escolha)
}
mostrarTela()
