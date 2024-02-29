let numeroSecreto = generarNumeroSecreto();

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

    if(numeroDeUsuario === numeroSecreto){
        
        //reutilizar funcion
        asignarTextoElemento('p','Acertaste al numero');
    } else{
        //No acertaste
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor');
        } else{  
            asignarTextoElemento('p','El numero secreto es mayor');
        }
    }
    return;
}

function generarNumeroSecreto(){
    return Math.floor(Math.random()*10)+1;

}

//llamar e invocar la funcion y paso de valor de los parametros
asignarTextoElemento('h1','Juego del numero secreto!');

asignarTextoElemento('p','Indica un numero del 1 al 10, por favor');