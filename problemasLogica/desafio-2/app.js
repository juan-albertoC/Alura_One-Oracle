/*
Juan alberto Cuevas Juarez
23 Febrero 2024
Ejercicios de logica
*/

//Pregunta al usuario  que dia de la semana es: uso de variables, comparadores || or, igualdad de triple ===
let dia = prompt("¿Que dia de la semana es? ");
if(dia === "Sabado" || dia === "Domingo"){ //mi codigo falto incluir === en vez de =
   alert("¡Buen fin de semana!");
} else {
   alert("¡Buena semana!");
}

//Verificar numero del usuario es positivo negativo
let num = prompt("Digita un numero");
if (num >= 0){
    alert("El numero ingresado es positivo");;
} else if(num <= -1){  //mi codigo  utilize ifelse
    alert("El numero ingresado es negativo");
}else {
    alert("No has ingresado aun ningun numero, ¡por favor vuelve a intentarlo!");
}

/*Sistema de puntuacion para un juego usuario ingresa desde prompt la puntuacion
let puntuacion = prompt("Ingresa puntos que has ganado en dualingo este ultimo intento: ");
if(puntuacion >= 100){
    alert("¡Felicidades has ganado!");
}else {
    alert("Intenta de nuevo para ganar");
}
*/

let puntuacion = 105;  //variable declarada y asignada para ser utilizada en la condicional
if (puntuacion >= 100){
    console.log("¡Felicidades has ganado!"); //en mi codigo utilize alert pero en este se cambio a console.log
} else {
    console.log("Intenta de nuevo para ganar");
}


//informe del usuario sobre el saldo de su cuenta con template strings
let saldo = 150000;
alert(`Su actual saldo es de: ${saldo} pesos mx`);

//bievenida al usuario con template strings
let nombreUsuario = prompt("Ingresa tu nombre: ");
alert(`Bienvenido ${nombreUsuario} .`);
