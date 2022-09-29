function Converter() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorDolar = parseFloat(valor);

    var valorReal = valorDolar * 5;

    console.log(valorReal);

    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O valor em real é de R$" + valorReal;
    elementoValorConvertido.innerHTML = valorConvertido; //innerHTML é para colocar a var dentro do HTML
}