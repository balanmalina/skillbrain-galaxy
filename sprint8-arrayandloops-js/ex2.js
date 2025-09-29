// Calculați suma numerelor dintr-un șir de numere

// Vă puteți crea propriul șir de numere, dar luați în considerare să încercați această problemă cu câteva seturi diferite pentru a vă verifica soluția. 
// De asemenea, puteți încerca să utilizați matrice de lungimi diferite.

function calculeazaSuma(array) {
    let sum = 0;
    for (let num of array) {
        sum += num;
    }
    return sum;
}

const numere = [30, 50, -34, 54, 78, -2, -1];
console.log("Suma este", calculeazaSuma(numere));



