
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


//pasos primero hay que convertilo a un array para manipularlo
// iterar el array y si el indice es mayor a 0 ir incrementano uno y que tenga una secuencia cada vez que tenga una letra
//luego, hay que poner la primera letra en mayuscula y las demas en miniscula
//retornar el array unido con el join y el separador


const acuum = (str) => {

    return str.split('').map((letters, index) => {

        if (index >= 0) {
            return letters.repeat(index + 1)
        }
    })

}
console.log(acuum('jsjs'))