// DETALHES DAS CARTAS // 

var cartaSakura = {
    nome: "Sakura",
    imagem: "https://i.pinimg.com/236x/0d/df/b9/0ddfb9fd1cd6a586df78107797e72053--sakura-anime-manga-anime.jpg",
    atributos: {
        ataque: 80,
        defesa: 60,
        magia: 90
    }
}

var cartaSyaoran = {
    nome: "Syaoran",
    imagem: "https://i.pinimg.com/236x/2e/38/93/2e38935b6bc3daeadab5196016d62d23--card-captor-sakura-cardcaptor-sakura-cards.jpg",
    atributos: {
        ataque: 85,
        defesa: 65,
        magia: 85
    }
}

var cartaTomoyo = {
    nome: "Tomoyo",
    imagem: "https://i.pinimg.com/originals/f7/5d/6d/f75d6dc18df71337d2b3b067069d09ea.png",
    atributos: {
        ataque: 30,
        defesa: 90,
        magia: 10
    }
}

var cartaKero = {
    nome: "Kero",
    imagem: "https://i.pinimg.com/originals/d4/f5/d1/d4f5d1717bbfaf47e373213148beb855.png",
    atributos: {
        ataque: 55,
        defesa: 40,
        magia: 90
    }
}

var cartaYukito = {
    nome: "Yukito",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCnFxeZvHwHvQb5qshkmGv7RbW42q1_DIqEsmQuR7eDt3SFZI-4Yen1rzT3UPvsNiDKc8&usqp=CAU",
    atributos: {
        ataque: 80,
        defesa: 60,
        magia: 100
    }
}

var cartaEriol = {
    nome: "Eriol",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMCknL-47lCeit8bXcux15uE0cEtIr5jroYVRK2BNKH0GJViyziWEU2OJghidJPmZlbxI&usqp=CAU",
    atributos: {
        ataque: 70,
        defesa: 50,
        magia: 95
    }
}

var cartaTouya = {
    nome: "Touya",
    imagem: "https://2.bp.blogspot.com/-xWsQSSgNykU/VaeXIjnLmEI/AAAAAAAADYg/DZOrdTDPLEc/s1600/ccs-carta-touya.gif",
    atributos: {
        ataque: 90,
        defesa: 80,
        magia: 60
    }
}

var cartaClow = {
    nome: "Clow",
    imagem: "https://midorihoshi.files.wordpress.com/2008/08/ccs-carta-clow.gif",
    atributos: {
        ataque: 90,
        defesa: 80,
        magia: 100
    }
}


// FIM DAS CARTAS // 

var cartaMaquina;
var cartaJogador;
var cartas = [cartaSakura, cartaSyaoran, cartaTomoyo, cartaKero, cartaYukito, cartaEriol, cartaTouya, cartaClow]
//                   0           1           2          3         4            5            6           7     

var pontosJogador = 0
var pontosMaquina = 0

atualizarPlacar()
atualizarQtdeCartas()

function atualizarQtdeCartas() {
    var divQtdeCartas = document.getElementById('quantidade-cartas')
    var html = "Quantidade de cartas no jogo: " + cartas.length

    divQtdeCartas.innerHTML = html
}

function atualizarPlacar() {
    var divPlacar = document.getElementById('placar')
    var html = "Jogador   " + pontosJogador + "  /  " + pontosMaquina + "   Máquina"

    divPlacar.innerHTML = html

}

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * cartas.length)
    cartaMaquina = cartas[numeroCartaMaquina]

    /*código novo para eliminar cartas do baralho. O 1 é o nº de cartas a ser retirado*/
    cartas.splice(numeroCartaMaquina, 1)

    var numeroCartaJogador = parseInt(Math.random() * cartas.length)
    /* while não vai mais ser necessário. Ele servia para, caso o número da máquina fosse igual à do usuário, o jogo continuaria rodando até vir uma carta diferente. Mas ao colocar o placar, é necessário começar a tirar os números da array/eliminar cartas.
    while (numeroCartaJogador == numeroCartaMaquina) {
           numeroCartaJogador = parseInt(Math.random() * 8) */
    cartaJogador = cartas[numeroCartaJogador];
    cartas.splice(numeroCartaJogador, 1)

    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false
    document.getElementById('btnProximaRodada').disabled = true

    exibeCartaJogador()
}

function exibeCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador")
    var moldura = '<img src="https://i.imgur.com/JuV6H0Y.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status'>"

    divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo')
    for (var i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value
        }
    }
}

function jogar() {
    var divResultado = document.getElementById("resultado")
    var atributoSelecionado = obtemAtributoSelecionado()

    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Você venceu</p>'
        pontosJogador++
    }

    else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Você perdeu</p>'
        pontosMaquina++
    }

    else {
        htmlResultado = '<p class="resultado-final">A disputa Empatou</p>'
    }

    if (cartas.length == 0) {
        alert("Fim de Jogo. Verifique a última carta da máquina e seu placar <3 ")
        if (pontosJogador > pontosMaquina) {
            htmlResultado = '<p class="resultado-final">Você venceu a máquina!</p>'
        } else if (pontosMaquina > pontosJogador) {
            htmlResultado = '<p class="resultado-final">A máquina te venceu!</p>'
        } else {
            htmlResultado = '<p class="resultado-final">Você e a máquina empataram!</p>'
        }
    } else {
        document.getElementById('btnProximaRodada').disabled = false
    }

    divResultado.innerHTML = htmlResultado

    atualizarPlacar()
    exibeCartaMaquina()
    atualizarQtdeCartas()


    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = true
}

function exibeCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina")
    var moldura = '<img src="https://i.imgur.com/JuV6H0Y.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaMaquina.atributos) {
        console.log(atributo)
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status --spacing'>"

    divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + '</div>'

}


function proximaRodada() {
    var divcartas = document.getElementById('cartas')

    divcartas.innerHTML = `<div id="carta-jogador" class="carta"></div>  <div id="carta-maquina" class="carta"></div>`

    document.getElementById('btnSortear').disabled = false
    document.getElementById('btnJogar').disabled = true
    document.getElementById('btnProximaRodada').disabled = true

    var divResultado = document.getElementById('resultado')
    divResultado.innerHTML = ""
}