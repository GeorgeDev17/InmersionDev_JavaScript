/*Array -- Un array es una manera de poder guardar datos del mismo tipo o clase (Enteros, carácteres, booleanos, etc.
La numeración de estos elementos dentro del array comienza en 0 (primer elemento del array) y finaliza en n-1 (último elemento del array) donde n es el tamaño completo de dicho array.

// --Creación de las variables para cada pelicula --
var catalogo1 = "https://flxt.tmsimg.com/assets/p11682476_b_v13_af.jpg"

var catalogo2 = "https://image.tmdb.org/t/p/original/pHaYhCTPg2fETRNiIpBsVWudazA.jpg"

var catalogo3 = "https://http2.mlstatic.com/el-camino-del-guerrero-peaceful-warrior-pelicula-dvd-D_NQ_NP_869336-MLM40442753068_012020-F.jpg"

-- Optimizando el array --
listaPeliculas [0] = "https://flxt.tmsimg.com/assets/p11682476_b_v13_af.jpg"
listaPeliculas [1] = "https://image.tmdb.org/t/p/original/pHaYhCTPg2fETRNiIpBsVWudazA.jpg"
listaPeliculas [2] = "https://http2.mlstatic.com/el-camino-del-guerrero-peaceful-warrior-pelicula-dvd-D_NQ_NP_869336-MLM40442753068_012020-F.jpg"
listaPeliculas [3] = "https://2.bp.blogspot.com/-VLVvnkUzXYw/VZFNssmSAvI/AAAAAAAANE0/Xpa5URoSIsc/s1600/Prometheus-poster.jpg"*/

var listaPeliculas = ["https://flxt.tmsimg.com/assets/p11682476_b_v13_af.jpg", "https://image.tmdb.org/t/p/original/pHaYhCTPg2fETRNiIpBsVWudazA.jpg",
"https://http2.mlstatic.com/el-camino-del-guerrero-peaceful-warrior-pelicula-dvd-D_NQ_NP_869336-MLM40442753068_012020-F.jpg",
"https://2.bp.blogspot.com/-VLVvnkUzXYw/VZFNssmSAvI/AAAAAAAANE0/Xpa5URoSIsc/s1600/Prometheus-poster.jpg"]
                 
/* -- Optimizando el código --
document.write("<img src = " + catalogo1 + ">");

document.write("<img src = " + catalogo2 + ">");

document.write("<img src = " + catalogo3 + ">"); 

-- Optimización del código (Array)--

document.write("<img src = " + listaPeliculas [0]  + ">");
document.write("<img src = " + listaPeliculas [1]  + ">");
document.write("<img src = " + listaPeliculas [2]  + ">");

-- i = iteración - indice (inicia en 0; hasta 3; incrementa uno) -- */

for (var i = 0; i < listaPeliculas.length; i++ ){
  document.write("<img src = " + listaPeliculas [i]  + ">");
}

/* ¡Desafíos de esta clase!
 Elige tu tema favorito para adaptar a nuestro código, es decir, en lugar de películas, puede ser una lista de animes, cómics, cursos, capas de juegos, entre otros;
 Intenta implementar otras versiones de la estructura de repetición que hicimos con for, como por ejemplo cambiar el for por el while;
 Crear una segunda lista para agregar los nombres de las películas abajo de las imágenes;
 Crea una condición para no agregar películas repetidas, en caso de que ya hayan sido agregadas anteriormente;
 Crea un campo y un botón para agregar la imagen a través de la pantalla, y no directamente en el código.*/
