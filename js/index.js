(function(){
var audio = document.getElementById("audio");
var timer = document.getElementById("contadorInicio");
var timer2 = document.getElementById("contadorFinal");
var desfasaje = document.getElementById("desfasaje");
var botonplay = document.getElementById("play");
var botonInicio = document.getElementById("cut");
var botonTerminado = document.getElementById("save");
var retroceder = document.getElementById("back");
var avanzar = document.getElementById("forward");
var etiqueta = document.getElementById("etiquetaformulario");
var flagCorte = 0;
var desfasajevar = 0;
var contenidoDeArchivo = "Etiqueta InicioCorte FinalCorte \n"
var elem = document.getElementById("descargarArchivo");
elem.download = "archivo.txt";
var cargar = document.getElementById('descargar');
var archivo = document.getElementById('archivo');
var source = document.getElementById('source');

var actualizarTimer = function(){
  var tiempo = audio.currentTime;
  timer2.textContent = tiempo;
  if(!flagCorte){
    timer.textContent = tiempo;
  }
};

actualizarTimer();
var intervalo = setInterval(actualizarTimer, 100);


botonInicio.onclick = function() {
  flagCorte = 1;
  numero1 = timer.textContent - desfasajevar;
};

botonplay.onclick = function() {
  desfasajevar = audio.currentTime;
  desfasaje.textContent = desfasajevar;

}

botonTerminado.onclick = function(){
  if(etiqueta.value.length > 0){
    numero2 = timer2.textContent - desfasajevar;
    temp = etiqueta.value + " " + numero1 + " " + numero2 + "\n";
    contenidoDeArchivo = contenidoDeArchivo + temp;
    elem.href = "data:application/octet-stream," + encodeURIComponent(contenidoDeArchivo);
    flagCorte = 0;
  } else {
    window.alert("No pusiste etiqueta");
  }
};

avanzar.onclick = function(){
  audio.currentTime = audio.currentTime + 0.5;
};

retroceder.onclick = function(){
  audio.currentTime = audio.currentTime - 0.5;
};

cargar.onclick = function(){
    source.src = archivo.files[0].name;
    audio.load();
  }


}())
