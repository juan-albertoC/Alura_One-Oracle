let numeroSecreto = generarNumeroSecreto();
//contador para saber el numero de intentos que hace el usuario
let intentos = 1;// al menos una vez para asertar

//hacer trampa para saber cual es el numero secreto
//console.log(numeroSecreto);

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

//llamar e invocar la funcion y paso de valor de los parametros
asignarTextoElemento('h1','Juego del numero secreto!');

asignarTextoElemento('p','Indica un numero del 1 al 10, por favor');