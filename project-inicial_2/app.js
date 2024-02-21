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



//encapsulamiento
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;   //No retorna nada
}

//antes intentoDeUsuario, cambio de nombre de la funcion verificarIntento()
function verificarIntento(){
    //mensaje de alert tras hacer click en el boton
    //alert('Click desde el boton');
    //return;   //No retorna nada, colocarlo por buena practica 
    //input es una etiqueta html que representa a la caja de texto
    
    //forma 1
    //let numeroDeUsuario = document.querySelector('input');
    // forma 2 con una funcion para buscar por id junto con parseInt conversion
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    //retornar el valor para ello con el . todo lo que el elemento tiene como value
    //verificar su funcionamiento
    console.log(typeof(numeroDeUsuario)); // para saber eltipo de valor que esta retornando
    console.log(numeroSecreto);
    console.log(typeof(numeroSecreto));
    console.log(numeroDeUsuario); //probar funcionalidad
    console.log(numeroDeUsuario === numeroSecreto); //implicito booleano,triple === en valor y en tipo de dato
    return;
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
