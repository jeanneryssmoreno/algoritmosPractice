// Estás escribiendo código para controlar los 
// semáforos de tu ciudad. Necesitas 
// una función que gestione cada cambio de
//  green, a yellow, a red, y luego a green.

//  Completa la función que toma una cadena co

//  Completa la función que toma una cadena como

//  argumento que representa el estado actual de
//   la luz y devuelve una cadena que representa
//    el estado al que debe cambiar la luz.
// Por ejemplo, cuando la entrada es green, 
// la salida debe ser yellow.

let cambioDeLuces = ''
const controladorSemaforo = (curren) => {


    return curren === 'yellow' ? 'red' : curren === 'green' ? 'yellow' : undefined
}



console.log(controladorSemaforo('yellow'));
console.log(controladorSemaforo('green'));



const products = [
    { nombre: 'lapto', precio: 1200, enStock: true },
    { nombre: 'telefono', precio: 120, enStock: false },
    { nombre: 'monitos', precio: 354, enStock: false }]

const avaliableProducts = (arr) => {

    const prductsTrue = arr.filter(element => element.enStock);

    const result = prductsTrue.map(element => ({
        ...element,


        nombre: element.nombre.toUpperCase()
    }))
    return result



}
console.log(avaliableProducts(products))





