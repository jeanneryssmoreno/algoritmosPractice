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
let target = 26


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




// le preguntas a una niña pequeña "¿Cuántos años tienes?"
// Ella siempre dice "x años", donde xes un número aleatorio entre 0y 9.
// Escriba un programa que devuelva la edad de la niña (0-9) como un entero.
// Suponga que la cadena de entrada de prueba siempre es válida. Por ejemplo,
// la entrada de prueba podría ser "1 año" o "5 años".
// El primer carácter de la cadena siempre es un número

//primero lo que haremos sera tener el indice del numero, y que solo verifique 
//el numero que estamos buscando, que no tome en cuenta los string

const yearsX = '4 years old'

const yearsTheGirls = (str) => {

    return Number(str[0])

}
console.log(yearsTheGirls(yearsX))



// Suma
// Escriba un programa que calcule 
// la suma de todos los números del 1 al num
//  (ambos inclusive). El número siempre será un 
//  entero positivo mayor que 0. Su función solo
//   necesita devolver el resultado.
//    Lo que se muestra entre paréntesis en el ejemplo a 
//    continuación es cómo obtenerlo y no forma parte del mismo; 
//    consulte las pruebas de ejemplo.

// Por ejemplo (Entrada -> Salida) :

// 2 -> 3 (1 + 2)
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

const number = 8
const resultAlgorit = (number) => number * (number + 1) / 2

console.log(resultAlgorit(number))