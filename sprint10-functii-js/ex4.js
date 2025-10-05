// Scrieți o funcție pentru a adăuga numere nelimitate
// Funcția addNumber() returnează suma tuturor numerelor transmise ca argumente funcției. Numărul de argumente nu este definit.
// Se poate transmite un număr nelimitat de numere.

function addNumber(...argumente) {
    return argumente.reduce((acc, x) => acc + x, 0);
}

console.log(addNumber(10, 30, 100, 4, 5));


function adaugaNumereNelimitate(...argumente) {
    let sum = 0;
    argumente.forEach(x => { sum += x; });
    return sum;
}

console.log(adaugaNumereNelimitate(3, 5, 8, 9, 20, 70));