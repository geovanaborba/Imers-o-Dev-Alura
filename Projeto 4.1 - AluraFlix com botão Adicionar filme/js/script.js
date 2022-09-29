var listafilmes = ["https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg", 
                   "https://m.media-amazon.com/images/M/MV5BNGJiNWFlYTMtZTBiZi00ZTVmLWJmZmMtNzEzYzZjNzYzZmRmXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UX182_CR0,0,182,268_AL_.jpg", 
                   "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_UX182_CR0,0,182,268_AL_.jpg", 
                   "https://m.media-amazon.com/images/M/MV5BMTYxNDA3MDQwNl5BMl5BanBnXkFtZTcwNTU4Mzc1Nw@@._V1_UX182_CR0,0,182,268_AL_.jpg", 
                   "https://m.media-amazon.com/images/M/MV5BMTk0Njk2OTY2N15BMl5BanBnXkFtZTcwNTAxNjAzMQ@@._V1_UX182_CR0,0,182,268_AL_.jpg", 
                   "https://m.media-amazon.com/images/M/MV5BMTc1Njk1NTE3NF5BMl5BanBnXkFtZTgwNjAyMzcxMTE@._V1_UY268_CR1,0,182,268_AL_.jpg", 
                   "https://m.media-amazon.com/images/M/MV5BMTA1ODUzMDA3NzFeQTJeQWpwZ15BbWU3MDgxMTYxNTk@._V1_UX182_CR0,0,182,268_AL_.jpg", 
                   "https://m.media-amazon.com/images/M/MV5BMTA1NDQ3NTcyOTNeQTJeQWpwZ15BbWU3MDA0MzA4MzE@._V1_UX182_CR0,0,182,268_AL_.jpg", 
                   "https://m.media-amazon.com/images/M/MV5BOWQxN2ZmNDMtMzA2Ny00ZDJhLTlkNTgtMWMyZjljY2QzMzNhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg", 
                   "https://m.media-amazon.com/images/M/MV5BMTM3NDU4NDA2Ml5BMl5BanBnXkFtZTYwNzcxNjY2._V1_UX182_CR0,0,182,268_AL_.jpg", 
                   "https://m.media-amazon.com/images/M/MV5BMWM4NTFhYjctNzUyNi00NGMwLTk3NTYtMDIyNTZmMzRlYmQyXkEyXkFqcGdeQXVyMTAwMzUyOTc@._V1_UX182_CR0,0,182,268_AL_.jpg", 
                   "https://m.media-amazon.com/images/M/MV5BMjAwNDA1MTM2MF5BMl5BanBnXkFtZTcwMzg3NDcwMw@@._V1_UX182_CR0,0,182,268_AL_.jpg", 
                   "https://m.media-amazon.com/images/M/MV5BMTQ2MzQ0NTk4N15BMl5BanBnXkFtZTcwMDc2NDYzNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg", 
                   "https://m.media-amazon.com/images/M/MV5BMmVhZjhlZDYtMDAwZi00MDcyLTgzOTItOWNiZjY0YmE0MGE0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg"];

var linksfilmes = ["https://www.imdb.com/title/tt0816692/", 
                   "https://www.imdb.com/title/tt0118617/?ref_=nv_sr_srsg_0", 
                   "https://www.imdb.com/title/tt0120737/?ref_=nv_sr_srsg_0", 
                   "https://www.imdb.com/find?q=intocaveis&ref_=nv_sr_sm",
                   "https://www.imdb.com/title/tt0425123/?ref_=nv_sr_srsg_0",
                   "https://www.imdb.com/title/tt0203019/?ref_=nv_sr_srsg_0",
                   "https://www.imdb.com/title/tt2194499/?ref_=nv_sr_srsg_0",
                   "https://www.imdb.com/title/tt0414387/",
                   "https://www.imdb.com/title/tt0145681/?ref_=fn_al_tt_4",
                   "https://www.imdb.com/title/tt0319262?ref_=nv_sr_srsg_0",
                   "https://www.imdb.com/title/tt0167404?ref_=nv_sr_srsg_0",
                   "https://www.imdb.com/title/tt0380510?ref_=nv_sr_srsg_0",
                   "https://www.imdb.com/title/tt1632708?ref_=nv_sr_srsg_0",
                   "https://www.imdb.com/title/tt0147800?ref_=nv_sr_srsg_0"]




var nomesfilmes = []
      nomesfilmes.push ("Interestelar")
      nomesfilmes.push ("Anastasia")
      nomesfilmes.push ("O Senhor dos Anéis")
      nomesfilmes.push ("Intocáveis")
      nomesfilmes.push ("E se fosse verdade")
      nomesfilmes.push ("Homens de Honra")
      nomesfilmes.push ("Questão de tempo")
      nomesfilmes.push ("Orgulho e Preconceito")
      nomesfilmes.push ("Colecionador de Ossos")
      nomesfilmes.push ("O Dia depois de Amanhã")
      nomesfilmes.push ("O Sexto Sentido")
      nomesfilmes.push ("Um olhar do paraíso")
      nomesfilmes.push ("Amizade Colorida")
      nomesfilmes.push("10 Coisas que eu Odeio em você")

  for (var i = 0; i < listafilmes.length; i ++){
      
      document.write('<div class="banner">')
      document.write("<a target='_blank' href=" + linksfilmes[i] + ">" + "<img src=" + listafilmes[i] + ">" + "</a>");
      document.write("<span>" + nomesfilmes[i] + "</span>")
      document.write("</div>")
  }


 //////////////////////////


function adicionarFilme(){
    var campoFilmeFavorito = document.querySelector('#filme')
    var filmeFavorito = campoFilmeFavorito.value 

    if (filmeFavorito.endsWith('.jpg')){

    listarFilmesNatela(filmeFavorito)
    } else {
        alert ("Imagem Inválida")
    }
        campoFilmeFavorito.value = ""
}

  
function listarFilmesNatela(filme){
    var listaFilmes = document.querySelector('#listaFilmes')
    var elementoFilme = "<img src=" + filme +">"
    listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme
}
  
