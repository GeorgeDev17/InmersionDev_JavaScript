/* -- innerhtml -- Reemplazar el contenido de un elemento
Esta propiedad proporciona una forma sencilla de cambiar completamente los contenidos de un elemento por contenido nuevo.
*/
function agregarPelicula(){
  var peliculaFavorita = document.getElementById("pelicula").value
  var elementoListaPelicula = document.getElementById("listaPeliculas")
  
  document.getElementById("pelicula").value = ""
  
  elementoListaPelicula.innerHTML = elementoListaPelicula.innerHTML + "<img src = " + peliculaFavorita + ">"
  
  //document.write("<img src =" + peliculaFavorita + ">")
  
  console.log(peliculaFavorita)
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
