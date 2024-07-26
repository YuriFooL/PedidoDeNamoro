function fuja(){
 var botaoNao = document.getElementById("NÃO")

 var larguraJanela = window.innerWidth;
 var alturaJanela = window.innerHeight;


 var maxX = larguraJanela - botaoNao.offsetWidth
 var maxY = alturaJanela - botaoNao.offsetLeft

 var aleatorioX = Math.floor(Math.random() * maxX)
 var aleatorioY = Math.floor(Math.random() * maxY)


 botaoNao.style.left = aleatorioX + "px"
 botaoNao.style.top = aleatorioY + "px"

}