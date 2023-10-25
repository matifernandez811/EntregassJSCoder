// CASO WEB INTERACTIVA
// DENTRO DE LA CARPETA DATA, HAY UN ARCHIVO rickandmortycharacters.js QUE PODEMOS UTILIZAR PARA EL DESARROLLO DE NUESTRA PREENTREGA
// 1) Mediante un alert, se deberá visualizar dar la bienvenida al sitio.
// 2) Mediante un find y Math.random,se deberá visualizar en un alert la información de un personaje random.
// 3) Se deberán ordenar los personajes de Z-A, y visualizar en un alert la información del primer personaje.
// 4) Mediante un prompt, se deberá preguntarle al usuario sobre qué personaje quiere buscar y visualizar información.
// 5)  Se deberá buscar y mediante un alert, mostrar la información del personaje ingresado. Si el valor no coincide, se deberá enviar un mensaje que indique que ese personaje no existe y darle la chance de que pueda volver a ingresarlo y ver la información.


alert("Bienvenido al sitio Poke adicto")


const indiceAleatorio = Math.floor(Math.random() * data.length)
const personajeAleatorio = data[indiceAleatorio]
alert(`La Pokeruleta aleatoria eligio el pokemon:   Nombre: ${personajeAleatorio.name}.   Status: ${personajeAleatorio.satus}. Specie: ${personajeAleatorio.species}.   Genero: ${personajeAleatorio.gender} `)


data.sort((a, b) => {
    return b.name.toLowerCase().localeCompare(a.name.toLowerCase());
});
const primerPersonaje = data[0]
alert(`Primer personaje: Nombre: ${primerPersonaje.name}.   Status: ${primerPersonaje.satus}. Specie: ${primerPersonaje.species}.   Genero: ${primerPersonaje.gender}`)


let personajeBuscado = null;

while (!personajeBuscado) {
    const nombreBuscado = prompt("Ingresa el nombre del personaje que deseas buscar:");

    personajeBuscado = data.find(dat => dat.name.toLowerCase() === nombreBuscado);

    if (!personajeBuscado) {
        const respuesta = confirm(`No se encontró ningún personaje con el nombre '${nombreBuscado}'. ¿Desea intentarlo de nuevo?`);
        if (!respuesta) {
            alert("Gracias por visitar a la Poke cueva, hasta la proximna camarada")
            break;
        }
    }
}

if (personajeBuscado) {
    alert(`Información del personaje: Nombre: ${personajeBuscado.name}.   Status: ${personajeBuscado.satus}. Specie: ${personajeBuscado.species}.   Genero: ${personajeBuscado.gender}`);
}

