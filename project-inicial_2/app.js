/*
   juan alberto cuevas juarez 
   08 febrero 2024   
   fundamentos de programacion 
*/
//--------------------------------------------------------------
//metodo querySelector con parametro etiqueta p
//let parrafo = document.querySelector('p');
//agrega o inserta texto en variable parrafo
//parrafo.innerHTML = 'Indica Numero del 1 al 10';
//--------------------------------------------------------------

//asignacion de la funcion a la variable de ambito global
let numeroSecreto = generarNumeroSecreto();

//verificar su funcionamiento
console.log(numeroSecreto);

//encapsulamiento
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;   //No retorna nada
}


function intentoDeUsuario(){
    //mensaje de alert tras hacer click en el boton
    alert('Click desde el boton');
    return;   //No retorna nada, colocarlo por buena practica 
}

//funcion que genera un numero aleatorio
function generarNumeroSecreto(){
    //let numeroSecreto = Math.floor(Math.random()*10)+1;
    //en vez de tener una variable interna de bloque, simple con un return
    return Math.floor(Math.random()*10)+1; 
    //retorno anterior del numeroSecreto
     
}

//llamar e invocar la funcion y paso de valor de los parametros
asignarTextoElemento('h1','Juego del numero secreto!');

asignarTextoElemento('p','Indica un numero del 1 al 10, por favor');
