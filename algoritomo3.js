
let cohete = 10
while (cohete > 0) {

    cohete = cohete - 1
    console.log(cohete)

}

let drinkCofe = 0

while (drinkCofe < 10) {

    drinkCofe = drinkCofe + 1

    if (drinkCofe === 8) {
        break
    }
    if (drinkCofe === 5) {
        continue
    }

    console.log('cafe')
}


// Dado un mes como un número entero del 1 al 12,
//  devuelva a qué trimestre del año pertenece como
//   un número entero.

// Por ejemplo: el mes 2 (febrero), es parte del primer trimestre;
//  el mes 6 (junio), es parte del segundo trimestre; y el mes 11 (noviembre),
//   es parte del cuarto trimestre.

// Restricción:

// 1 <= month <= 12

// escribir una funcion que reciba un numero entero
// agruparlos por trimestre,
//retorne un numero entero al trimestre que pertenece

const intNumber = (num) => {
    if (!Number.isInteger(num) || num <= 0 || num > 12) {
        return 'no es un numero entero,es un numero negativo o eres mayor a 12'
    }
    if (num <= 3) {
        return 'primer trimestre';
    }
    if (num <= 6) {
        return 'segundo trimestre';
    }
    if (num <= 9) {
        return 'tercero trimestre';
    }
    if (num <= 12) {
        return 'cuarto trimestre';
    }

}

console.log(intNumber(14))



















