
const word = 'Jeanenrys Moreno';

const initialEnd = (str) => {

    const cleanStr = str.toUpperCase().split(' ')
    const firstWord = cleanStr[0]
    const lastWord = cleanStr[cleanStr.length - 1]

    return ` ${firstWord[0]} , ${lastWord[0]} `


}

console.log(initialEnd(word))



// Esta vez sin historia, sin teoría.
//  Los ejemplos siguientes te muestran cómo escribir 
//  la función:accum

// Ejemplos:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"


// pasos primero hay que convertilo a un array para manipularlo
// iterar el array y si el indice es mayor a 0 ir incrementano uno y que tenga una secuencia cada vez que tenga una letra
// luego, hay que poner la primera letra en mayuscula y las demas en miniscula
//retornar el array unido con el join y el separador


const acuum = (str) => {

    return str.split('').map((letters, index) => letters.toUpperCase() + letters.toLowerCase().repeat(index)).join('-')

}



console.log(acuum('abcd'))


// Crea una función que devuelva una matriz de enteros desde n hasta 1 donde n>0.
// Ejemplo: n=5-->[5,4,3,2,1]

// pasos crear una funcion que reciba enteros
//poder iterar de orden decendente dependiendo de la condicion
// podemos utilizar un for para iterar y utilizar el contador


const numberDesendent = (number) => {

    let result = [];

    for (let i = number; i >= 1; i--) {

        result.push(i)
    }
    return result
}
console.log(numberDesendent(5))

const reverseString = (str) => {


    result = ''
    for (let index = str.length - 1; index >= 0; index--) {
        result += str[index]
    }
    return result

}
console.log(reverseString('osodf'))




