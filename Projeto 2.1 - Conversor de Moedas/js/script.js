function startFunction() {
    var inputDolar = document.querySelector("#inputDolar").value;
    var valueDolar = parseFloat(inputDolar);
    var result = document.querySelector(".result");
  
    console.log(valueDolar);
  
    var valueReal = (valueDolar * 5.5).toFixed(2);
  
    result.innerHTML = `<h3>R$ </h3> ${valueReal}`;
  }
    