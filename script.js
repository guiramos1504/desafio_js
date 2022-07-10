
var data_Alvo = new Date("Nov 28, 2022 00:00:00").getTime();

var x = setInterval(function() {
  var agora = new Date().getTime();
  var diferença = data_Alvo - agora;

  var dias = Math.floor(diferença / (1000 * 60 * 60 * 24));
  var horas = Math.floor((diferença % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutos = Math.floor((diferença % (1000 * 60 * 60)) / (1000 * 60));
  var segundos = Math.floor((diferença % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML = dias + " : " + horas + " : "
  + minutos + " : " + segundos;
  
  if (diferença < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "FOGUETE LANÇADO";
  }
}, 1000);