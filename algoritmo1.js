
const word = 'Jeanenrys Moreno';

const initialEnd = (str) => {

    const cleanStr = str.toUpperCase().split(' ')

    return `el primero es ${cleanStr[0]} y el segundo es ${cleanStr[cleanStr.length - 1]} `


}

console.log(initialEnd(word))