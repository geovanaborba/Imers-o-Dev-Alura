var nome = "Guilherme"
var notaPrimeiroBimestre = 9
var notaSegundoBimestre = 7
var notaTerceiroBimestre = 4
var notaQuartoBimestre = 2

var notaFinal = (notaPrimeiroBimestre + notaSegundoBimestre + notaTerceiroBimestre + notaQuartoBimestre) / 4

var notaFixada = "Sua nota final é " + notaFinal.toFixed(1)

console.log("Bem vindo, " + nome)
console.log(notaFixada)