// Estás escribiendo código para controlar los 
// semáforos de tu ciudad. Necesitas 
// una función que gestione cada cambio de
//  green, a yellow, a red, y luego a green.
 develop
//  Completa la función que toma una cadena co

//  Completa la función que toma una cadena como
master
//  argumento que representa el estado actual de
//   la luz y devuelve una cadena que representa
//    el estado al que debe cambiar la luz.
// Por ejemplo, cuando la entrada es green, 
// la salida debe ser yellow.

let cambioDeLuces = ''
const controladorSemaforo = (curren) => {

develop
    return curren === 'yellow' ? 'red' : curren === 'green' ? 'yellow' : undefined
}
console.log(cambioDeLuces)
console.log(controladorSemaforo('yellow'))
=======
    if (curren === 'green') {
        return 'yellow'
    }
    if (curren === 'yellow') {
        return 'red'
    } if (curren === 'red') {
        return 'green'
    }

    else {

        return `no coincide`


    }
}
console.log(cambioDeLuces)
console.log(controladorSemaforo('green'))



