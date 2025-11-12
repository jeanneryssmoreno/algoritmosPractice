// Enunciado: Dado un array de números,
// encuentra todos los elementos que aparecen
// más de una vez y devuélvelos en un nuevo array sin duplicados.

// Ejemplos:

// javascript
// Entrada: [1, 2, 3, 2, 4, 5, 3, 6]
// Salida: [2, 3]

// Entrada: [7, 8, 9, 7, 8, 10]
// Salida: [7, 8]

// Entrada: [1, 2, 3, 4, 5]
// Salida: []


const numberDuplicate = [1, 2, 3, 2, 4, 5, 3, 6]

const notDuplicate = (arr) => {
    return [...new Set(arr)]
}
console.log(notDuplicate(numberDuplicate))