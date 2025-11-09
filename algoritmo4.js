

const convertStringToNumber = (str) => {

    return parseInt(str)
}

console.log(convertStringToNumber('234'))

const booleanToString = (b) => {
    return b.toString() ? 'es un booleano' : 'no es valido';
}


console.log(booleanToString(false))






const filterName = [
    { name: 'ana', apellido: 'suarez' },
    { name: 'asda', apellido: 'suarez' },
    { name: 'andnjda', apellido: 'suarez' },
    { name: 'andjndjka', apellido: 'suarez' },
]
console.log(result)

return result = filterName.map(element => element.name)








// hay un array de objetos que representan productos en un inventario, 
// cada producto tiene nombre, precio y booleano
// enStock y luego devuelva un nuevo array que contenga unicamente los nombres de esos productos
// pero convertidos en mayusculas

//1 devolver un nuevo en array que contenga unicamente los nombres 
//convertilos en mayusculas

const products = [
    { nombre: 'lapto', precio: 1200, enStock: true },
    { nombre: 'telefono', precio: 120, enStock: false },
    { nombre: 'monitos', precio: 354, enStock: true }]

const avaliableProducts = (arr) => {

    return arr.filter(element => element.enStock)


}
console.log(avaliableProducts(products))


console.log(booleanToString(true))


