function mostrarResultado() {
  var pokemon = 3;
  var opcao = document.querySelector(".opcao").value;  
  var resultado = document.querySelector(".resultado");

  
  if (pokemon == opcao) {
 document.write("<h2>Parabéns. Você acertou!</h2>");
  } else {
document.write("<h2>Que pena. Você errou!</h2>");
  }
}

/* OPÇÃO COM CAIXA DE ALERTA 
("Qual o nome dos Pokémons que aparecem na tela?")

var primeiroValor = parseInt(prompt ("Qual o nome do Pokémon da esquerda? Digite 1 se houver um Umbreon, 2 se há um Charmander ou 3 se há um Eevee")) 

var segundoValor = parseInt(prompt ("Qual o nome do Pokémon da direita? Digite 1 se houver um Raichu, 2 se há um Pichu ou 3 se há um Pikachu"))

var resultado = primeiroValor+segundoValor


if (resultado == 2){
var resultado = 
document.write("<h2>Que pena. Você errou!</h2>")
}
else if (resultado == 3) {
var resultado = 
document.write("<h2>Que pena. Você errou!</h2>")
}
else if (resultado == 4) {
var resultado = 
document.write("<h2>Que pena. Você errou!</h2>")
}
else if (resultado == 5) {
var resultado = 
document.write("<h2>Que pena. Você errou!</h2>")
}
else if (resultado == 6) {
var resultado = 
document.write("<h2>PARABÉNS! Você acertou!!</h2>")
}
else {
document.write("<h2>Você não digitou uma opção válida</h2>")
}
*/ 

