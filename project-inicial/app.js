//mensaje de bienvenida
alert("Bienvenidos al juego del numero secreto");

//variable declarada y asignada, cambiar el valor pseudo-aleatorio random y floor con funcion math
let numeroSecreto = Math.floor(Math.random()*10)+1;

//variable valor inicial, se salio esta variable del while
let numeroUsuario = 0;

//variable contador de intentos, 1 porque si acierta se usa ese intento
let intentos = 1;

//variable tipo string para el contador que varia la linguistica de vez o veces que acierta el usuario
//let palabraVeces = 'vez';

//variable para maximo de intentos
let maximosIntentos = 3;

//console.log para verificar el funcionamiento de pseudo-aleatorio
//console.log(numeroSecreto);

//while persona no acierte compara para repitir la accion de jugar hasta ganar
while (numeroUsuario != numeroSecreto) {
    //parseInt(); para una conversion al entero, almacena en variable 
     numeroUsuario = parseInt(prompt("Me indicas un numero entre 1 y 10, por favor: "));

    //consola
    console.log(typeof(numeroUsuario));

    /*
    Realiza la comparacion if and else
    */
    if(numeroUsuario == numeroSecreto) {
        //Acertamos, fue verdadero, se usa: Template strings una interpolacion con operador ternario
        alert(`Acertaste, el numero es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
    } else {
        //No Acertamos, es falso, con condicion if  else anidado
        if (numeroUsuario > numeroSecreto){
            alert("El numero secreto es menor");
        } else {
            alert("El numero secreto es mayor");
        }
        //Incrementar contador explicito cuando persona no acierta
        //intentos = intentos + 1;

        //optimizar el incremento del contador, parecido a lenguaje C
        //intentos += 1;
        intentos++;

        //Actualizar tras el incremento del contador para variable palabraVeces
        //palabraVeces = 'veces';

        //funcionalidad: Numero Maximo de intentos con if break
        if (intentos > maximosIntentos){
            alert(`Llegaste al numero maximo de: ${maximosIntentos} intentos`);
            break;
        }
    }
}