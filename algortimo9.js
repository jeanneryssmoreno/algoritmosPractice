// Enunciado: Tienes un array 
// de objetos que representan libros.
// Cada objeto tiene las propiedades titulo (string),
// autor (string) y calificacion (number, del 1 al 10).
// Tu tarea es crear una función que, dado este array, devuelva un nuevo 
// array que contenga solo los títulos de los libros que tienen una calificación
// mayor o igual a 8, pero escritos en mayúsculas.

// Ejemplos de Entrada y Salida:

//pasos: filter o map para traer los libros mayor o igual a 8
//pasar el nombre en mayusculas

const books = [{ titulo: 'El Principito', calificacion: 9 },
{ titulo: 'Cien Años de Soledad', calificacion: 7.5 },
{ titulo: 'blanca nieves', calificacion: 8.2 }]


const bestBooks = (arr) => {
    const mayorCalification = arr.filter(element => element.calificacion >= 8);
    return mayorCalification.map(element => ({
        ...element,

        titulo: element.titulo.toUpperCase()
    }))
}

console.log(bestBooks(books))
