// Creați o funcție care inversează un șir de numere

// Vă puteți crea propriul șir de numere, dar luați în considerare să încercați această problemă cu câteva seturi diferite pentru a vă verifica soluția.
// De asemenea, puteți încerca să utilizați matrice de lungimi diferite.
// Un șir de numere va fi trimis ca date de intrare și, ca rezultat, funcția va returna un șir nou de numere cu elementele primului în ordine inversă.

function reverseRow(row) {
    return row.slice().reverse();
}

const numbers = [2, 6, 9, 10, 20];
console.log(reverseRow(numbers));







