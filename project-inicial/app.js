//mensaje de bienvenida
alert("Bienvenidos al juego del numero secreto");

//variables
let numeroSecreto = 7;
let numeroUsuario = prompt("Me indicas un numero entre 1 y 10, por favor: ");

//consola
console.log(numeroUsuario);

/*
Realiza la comparacion if and else
*/
if(numeroUsuario == numeroSecreto) {
    //Acertamos, fue verdadero, se usa: Template strings una interpolacion
    alert(`Acertaste, el numero es: ${numeroUsuario}`);
} else {
    //No Acertamos, la condicion es falsa
    alert("No Acertaste al numero");
}