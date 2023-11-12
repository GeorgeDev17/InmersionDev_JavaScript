var listaPeliculas = [];
var listaTrailer = [];

function agregarPelicula(){
  var peliculaFavorita = document.getElementById("pelicula").value;
  var trailerPeliculas = document.getElementById("trailer").value;

    if(( peliculaFavorita.endsWith('jpg') ) || ( peliculaFavorita.endsWith('jpeg') )){
      
      document.getElementById('mensajeDeError').innerHTML = '';
 listaPeliculas.push(peliculaFavorita);
     listaTrailer.push(trailerPeliculas);
      
      limpiarCampos();
      recargarPeliculas();
      
    } else {
      
      document.getElementById('mensajeDeError').innerHTML = 'Dirección de imagen no válida, inténtalo de nuevo';
      limpiarCampos();
      
    }
  }

function recargarPeliculas(){
 
  var elementoListaPeliculas = document.getElementById('listaPeliculas');
  elementoListaPeliculas.innerHTML = '';
  for(i=0; i < listaPeliculas.length ; i++){
    elementoListaPeliculas.innerHTML += `<a href=" ${listaTrailer[i]} "><img src=" ${listaPeliculas[i]} "></a>`;
    
  }
}

function  limpiarCampos(){
   document.getElementById('pelicula').value = '';
   document.getElementById('trailer').value = '';
}

/* Urls peliculas
https://flxt.tmsimg.com/assets/p11682476_b_v13_af.jpg

https://image.tmdb.org/t/p/original/pHaYhCTPg2fETRNiIpBsVWudazA.jpg

https://http2.mlstatic.com/el-camino-del-guerrero-peaceful-warrior-pelicula-dvd-D_NQ_NP_869336-MLM40442753068_012020-F.jpg

https://2.bp.blogspot.com/-VLVvnkUzXYw/VZFNssmSAvI/AAAAAAAANE0/Xpa5URoSIsc/s1600/Prometheus-poster.jpg

-- ¡Desafíos de esta clase! --
 Crear un botón para eliminar una película en la pantalla;
 Además de agregar la imagen de la película, también añadir el nombre a través de otro input;
 Al hacer clic sobre la imagen nos redireccione al  trailer de la pelicula.
 Guardar todas las películas añadidas en una lista/array y recorrer esa lista cada vez que quieras imprimir o eliminar la película.
*/
