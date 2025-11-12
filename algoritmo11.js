// Ejercicio 5: Convertidor de Monedas con Billetes
// Algoritmo Greedy
// Crear una función que dado un monto, devuelva la cantidad mínima de billetes
// Billetes disponibles: 100, 50, 20, 10, 5, 1
// Ejemplo: 287 → {100: 2, 50: 1, 20: 1, 10: 1, 5: 1, 1: 2}

//pasos a seguir
//crear un arreglo con los numeros ordenados de manera decreciente.
//vamos a crear un objeto vacio para almacenar los resultados
// ITERAR sobre cada denominacion
//calcular cuantos billetes de esa denominacion, caben en ese monto.


const convertionMoney = (money) => {

    const billetes = [100, 50, 20, 10, 5, 1];
    const result = {};
    let flag = money


    for (let i = 0; i < billetes.length; i++) {
        let cantidad = 0
        cantidad = Math.floor(flag / billetes[i])

        if (cantidad > 0) {
            result[billetes[i]] = cantidad;
        }
        flag = flag % billetes[i]
    }

    return result
}
console.log(convertionMoney(801))