let numeroSecreto = generarNumeroSecreto();

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(typeof(numeroDeUsuario));
    console.log(numeroSecreto);
    console.log(typeof(numeroSecreto));
    console.log(numeroDeUsuario);
    console.log(numeroDeUsuario === numeroSecreto);
    return;
}

function generarNumeroSecreto(){
    return Math.floor(Math.random()*10)+1;

}

//llamar e invocar la funcion y paso de valor de los parametros
asignarTextoElemento('h1','Juego del numero secreto!');

asignarTextoElemento('p','Indica un numero del 1 al 10, por favor');