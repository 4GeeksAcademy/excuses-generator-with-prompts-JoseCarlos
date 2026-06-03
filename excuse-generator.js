// Excuse Generator

// Variables con listas de opciones para cada parte de la excusa
const who = [
"mi vecino",
"mi jefe",
"el gato",
"mi suegra",
"un repartidor",
"mi profesor",
"la vecina",
"un extraterrestre",
"mi abuela",
"un amigo invisible",
];

const action = [
"se comió",
"olvidó",
"arruinó",
"tiró",
"gastó",
"rompió",
"perdió",
"confundió",
"resbaló con",
"secuestró",
];

const what = [
"mi tarea",
"la comida",
"mis llaves",
"el pastel",
"la camisa",
"mi coche",
"el regalo",
"el bolso",
"el boleto",
"la contraseña",
];

const when = [ 
"ayer por la noche",
"justo antes de entrar",
"en plena reunión",
"mientras nevaba",
"cuando llamaste",
"durante la siesta",
"a última hora",
"antes del desayuno",
"mientras dormía",
"al volver del trabajo"
];

// Función para generar una excusa aleatoria
function generateExcuse() {
    const randomWho = who[Math.floor(Math.random() * who.length)];
    const randomAction = action[Math.floor(Math.random() * action.length)];
    const randomWhat = what[Math.floor(Math.random() * what.length)];
    const randomWhen = when[Math.floor(Math.random() * when.length)];
    const excusa = `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}.`;

    return excusa;
}  

// Ejemplo de uso
console.log(generateExcuse());