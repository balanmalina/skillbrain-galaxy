// Creați o funcție care inversează un șir de numere

// Vă puteți crea propriul șir de numere, dar luați în considerare să încercați această problemă cu câteva seturi diferite pentru a vă verifica soluția.
// De asemenea, puteți încerca să utilizați matrice de lungimi diferite.
// Un șir de numere va fi trimis ca date de intrare și, ca rezultat, funcția va returna un șir nou de numere cu elementele primului în ordine inversă.



let numbers = [2, 6, 9, 10, 20];

let reversed = numbers.reverse();
console.log(reversed);


let numbers2 = [45, 80, 120, 2];

for (let i = numbers2.length - 1; i >= 0; i--) {
    console.log(numbers2[i]);
}
