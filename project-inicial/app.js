//mensaje de bienvenida
alert("Bienvenidos al juego del numero secreto");

//variable declarada y asignada
let numeroSecreto = 7;

//variable valor inicial, se salio esta variable del while
let numeroUsuario = 0;

//variable contador de intentos, 1 porque si acierta se usa ese intento
let intentos = 1;

//variable tipo string para el contador que varia la linguistica de vez o veces que acierta el usuario
let palabraVeces = 'vez';


//while persona no acierte compara para repitir la accion de jugar hasta ganar
while (numeroUsuario != numeroSecreto) {
     numeroUsuario = prompt("Me indicas un numero entre 1 y 10, por favor: ");

    //consola
    console.log(numeroUsuario);

    /*
    Realiza la comparacion if and else
    */
    if(numeroUsuario == numeroSecreto) {
        //Acertamos, fue verdadero, se usa: Template strings una interpolacion
        alert(`Acertaste, el numero es: ${numeroUsuario}. Lo hiciste en ${intentos} ${palabraVeces}`);
    } else {
        //No Acertamos, es falso, con condicion if  else anidado
        if (numeroUsuario > numeroSecreto){
            alert("El numero secreto es menor");
        } else {
            alert("El numero secreto es mayor");
        }
        //Incrementar contador explicito cuando persona no acierta
        intentos = intentos + 1;
        //Actualizar tras el incremento del contador para variable palabraVeces
        palabraVeces = 'veces';
    }
}