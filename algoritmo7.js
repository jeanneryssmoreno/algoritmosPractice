const usuarios = [
    { id: 1, nombre: 'Ana', activo: true },
    { id: 2, nombre: 'Luis', activo: false },
    { id: 3, nombre: 'Eva', activo: true }
];
// Escribe una función en JavaScript,
//  utilizando el método .filter() y 
//  .map(), que realice las siguientes acciones en cadena:
// Filtre solo a los usuarios donde activo sea true.
// Mapee el resultado para devolver un nuevo array
//  que solo contenga los nombres (strings) de esos usuarios activos.
// El resultado esperado debe ser: ['Ana', 'Eva']

const users2 = (arr) => {

    const filterusers = arr.filter(element => element.activo)
    const result = filterusers.map(names => names.nombre
    )
    return result

}
console.log(users2(usuarios))





// Enunciado:
// Tienes un array de productos de una tienda. Necesitas crear una función que:

// Filtre solo los productos que están en stock (stock > 0)
// Filtre solo los productos con precio menor o igual a un presupuesto
// Retorne un array con los nombres de esos productos en mayúsculas

// Datos de entrada:
// javascript

const productos = [
    { nombre: "laptop", precio: 1000, stock: 5 },
    { nombre: "mouse", precio: 25, stock: 0 },
    { nombre: "teclado", precio: 50, stock: 10 },
    { nombre: "monitor", precio: 300, stock: 3 },
    { nombre: "webcam", precio: 80, stock: 0 },
    { nombre: "audífonos", precio: 60, stock: 7 }
];

const presupuesto = 100;

const productsQuePuedoLLevar = (arr) => {
    const filterlist = arr.filter(element => element.stock > 0)
    const puedoComprar = filterlist.filter(element => element.precio <= presupuesto)
    const result = puedoComprar.map(products => ({
        ...products,
        nombre: products.nombre.toUpperCase()

    }))
    return result
}
console.log(productsQuePuedoLLevar(productos))



////////////////////////////////////////////////
///////////////////////////////////////////
//////////////////



// Ejercicio Fácil — Detectar si una lista forma una progresión aritmética
// Enunciado

// Dada una lista de números, determina si todos sus términos forman una progresión aritmética (es decir, si la diferencia entre cada par de términos consecutivos es constante).

// Debes plantear al menos dos formas posibles de resolverlo, por ejemplo:

// Con every

// Con reduce

// Con bucles tradicionales o con map

// Ejemplos de entrada y salida
// Entrada: [2, 4, 6, 8, 10]
// Salida esperada: true

// Entrada: [3, 6, 10]
// Salida esperada: false


//primer iterar el arreglo
//2 condicion determinar la condicion de progresion
//3 la condicion de progrecion la determinamos con la primer
//diferencia, del primero y el segundo
//iterar sobre los demas valores si cumplen con esa diferencia




const arimeticProgres = (arr) => {

    let flag = 0
    return arr.every(num => {

        if (number)

  })
}

console.log(arimeticProgres([2, 4, 6, 8, 10]))