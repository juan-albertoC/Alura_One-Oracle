/*
   juan alberto cuevas juarez 
   08 febrero 2024   
   fundamentos de programacion 
*/

//metodo querySelector con parametro etiqueta p
//let parrafo = document.querySelector('p');
//agrega o inserta texto en variable parrafo
//parrafo.innerHTML = 'Indica Numero del 1 al 10';

//encapsulamiento
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}


function intentoDeUsuario(){
    //mensaje de alert tras hacer click en el boton
    alert('Click desde el boton');
}

//llamar e invocar la funcion y paso de valor de los parametros
asignarTextoElemento('h1','Juego del numero secreto!');

asignarTextoElemento('p','Indica un numero del 1 al 10, por favor');
