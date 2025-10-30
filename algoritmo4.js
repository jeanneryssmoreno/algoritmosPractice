

const convertStringToNumber = (str) => {

    return parseInt(str)
}

console.log(convertStringToNumber('234'))

const booleanToString = (b) => {
    return b.toString() ? 'es un booleano' : 'no es valido';
}

console.log(booleanToString(true))