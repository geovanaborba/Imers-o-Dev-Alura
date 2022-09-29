var numeroSecreto = parseInt(Math.random() * 21)
var tentativas = 5
 
 while (tentativas > 0) {
        var chute = parseInt(prompt("Tente adivinhar um número entre 0 e 20. Você tem 5 tentativas <3 "))
 
         if (numeroSecreto == chute) {
         alert ("Acertou")
         break
       }
        else if (chute > numeroSecreto) {
         alert ("O número secreto é menor")
         tentativas = tentativas - 1
       }
        else if (chute <numeroSecreto) {
         alert ("O número secreto é maior")
         tentativas = tentativas - 1
       }
   }
 
 if(chute!=numeroSecreto){ 
   alert ("Suas tentativas acabaram. O número secreto era " + numeroSecreto)
 }