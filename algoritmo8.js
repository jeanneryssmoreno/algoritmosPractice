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




//Enunciado

// Dado un array de números y un objetivo (target), 
// encuentra dos índices cuyos valores sumen exactamente ese objetivo.
// Debe retornar los índices, no los valores.

// nums = [2, 7, 11, 15]
// target = 9

//necesitamos el objetivo que es target
//condicionamos si la suma de los dos numeros traer los indices
//devolver el arreglo


const nums = [2, 7, 11, 15]
let target = 9


const indexNum = (number, target) => {

    for (let i = 0; i < number.length; i++) {
        for (let j = i + 1; j < number.length; j++) {

            if (number[i] + number[j] === target) {
                return ` el resultado es ${[i, j]}`
            }

        }

    }
    return []
}

console.log(indexNum(nums, target))




const num = [0, 3, 4, 5]

const squareNum = (numbers) => {

    return transformArr = numbers.map(element => element * element).reduce((acc, current) => acc + current)

}

console.log(squareNum(num))




// Completar la solución de modo que devuelva 
// verdadero si el primer argumento (cadena) 
// pasada termina con el segundo argumento (también una cadena).

// Ejemplos:

// Inputs: "abc", "bc"
// Output: true

// Inputs: "abc", "d"
// Output: false

//pasos, puedo buscar un metodo que pueda servirme para esto, un metodo de strig
// o puedo hacer una iteracion que valide que los ultimos numros coinciden con la cadena de texto
// retornar el resultadp

const lastWords = (str, endPosition) => {

    return str.endsWith(endPosition)


}
console.log(lastWords('abc', 'bc'))