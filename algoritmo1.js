
const word = 'Jeanenrys Moreno';

const initialEnd = (str) => {

    const cleanStr = str.toUpperCase().split(' ')
    const firstWord = cleanStr[0]
    const lastWord = cleanStr[cleanStr.length - 1]

    return ` ${firstWord[0]} , ${lastWord[0]} `


}

console.log(initialEnd(word))