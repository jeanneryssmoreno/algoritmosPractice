//determinar si es palindromo
const word = 'osoo'
const isPalindromo = (str) => {

    const verification = str.split('').reverse().join('')
    if (verification === word) {
        return 'es palindormo'
    }
    else {
        return 'no es palindromo'
    }
}

console.log(isPalindromo(word))


// let arr1 = 'lasi';
// let arr2 = 'sali'

// const isAnagrama = (str1, str2) => {

//     const cleanStr1 = str1.split('').toLowerCase()
//     return cleanStr1

// }

// console.log(isAnagrama())



// const isAnagrama = (arr1,arr2) => arr2.every((element) => arr1.includes(element))









