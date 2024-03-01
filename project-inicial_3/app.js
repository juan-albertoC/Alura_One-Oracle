//declaracion variables
let numeroSecreto = 0; 
// antes let numeroSecreto = generarNumeroSecreto();


let intentos = 0;

//hacer trampa para saber cual es el numero secreto
//console.log(numeroSecreto);


//----------------------FUNCIONES DEL PROGRAMA--------------------------

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    //console.log(numeroDeUsuario === numeroSecreto); se convierte en la condicion

    //para ver cual es el numero(prueba trampa)
    //console.log(numeroSecreto);
    console.log(intentos);
    if(numeroDeUsuario === numeroSecreto){
        
        //reutilizar funcion
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez':'veces'}`);
        //boton nuevo juego, nueva jugada
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        //No acertaste
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor');
        } else{  
            asignarTextoElemento('p','El numero secreto es mayor');
        }
       intentos++; //contador incrementa
       //mostrarlo  pero mejor hasta el momento usar un console.log
       //invocar la funcion limpiar caja
       limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    //id en el #, querySelector generico
   let valorCaja = document.querySelector('#valorUsuario');
   valorCaja.value = ''; 

   //simplificar
   //document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto(){
    return Math.floor(Math.random()*10)+1;

}


function condicionesIniciales(){
//funcionalidad de mensajes con paso de valor de los parametros
asignarTextoElemento('h1','Juego del numero secreto!');

asignarTextoElemento('p','Indica un numero del 1 al 10, por favor');

  //----CONDICIONES INICIALES----
   //funcionalidad generar numero aleatorio nueva llamada a funcion
   numeroSecreto = generarNumeroSecreto();
   
   //funcionalidad inicializar numero de intentos  al menos una vez para asertar que es un contador para saber el numero de intentos que hace el usuario
   intentos = 1;
}


function reiniciarJuego(){
    //invocar funcionalidad
    limpiarCaja();
    //funcionalidad mensajes iniciales
    condicionesIniciales();
    //funcionalidad que permita finalizar el juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

//llamar e invocar la funcion que da valores iniciales
condicionesIniciales();
