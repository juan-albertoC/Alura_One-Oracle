let numeroSecreto = 0; 

let intentos = 0;

//----------------------FUNCIONES DEL PROGRAMA--------------------------

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    

    
    console.log(intentos);
    if(numeroDeUsuario === numeroSecreto){
        
        
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez':'veces'}`);
        
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor');
        } else{  
            asignarTextoElemento('p','El numero secreto es mayor');
        }
       intentos++; 
       limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    
   let valorCaja = document.querySelector('#valorUsuario');
   valorCaja.value = ''; 

}

function generarNumeroSecreto(){
    return Math.floor(Math.random()*10)+1;

}


function condicionesIniciales(){

asignarTextoElemento('h1','Juego del numero secreto!');

asignarTextoElemento('p','Indica un numero del 1 al 10, por favor');

   numeroSecreto = generarNumeroSecreto();
   
   intentos = 1;
}


function reiniciarJuego(){
    
    limpiarCaja();
    
    condicionesIniciales();
    
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}


condicionesIniciales();