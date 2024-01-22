//mensaje de bienvenida
alert("Bienvenidos al juego del numero secreto");

//variable declarada y asignada
let numeroSecreto = 7;

//variable valor inicial, se salio esta variable del while
let numeroUsuario = 0;

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
        alert(`Acertaste, el numero es: ${numeroUsuario}`);
    } else {
        //No Acertamos, es falso, con condicion if  else anidado
        if (numeroUsuario > numeroSecreto){
            alert("El numero secreto es menor");
        } else {
            alert("El numero secreto es mayor");
        }

    }
}