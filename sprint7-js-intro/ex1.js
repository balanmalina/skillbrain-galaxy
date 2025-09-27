// 1.Returnează un boolean dacă un număr este divizibil cu 10

// Veți crea o funcție care vă va returna un boolean „adevărat” sau „fals” ca rezultat.

// Numărul introdus ar trebui să returneze un „adevărat” doar dacă este divizibil cu 10.

// În caz contrar, programul dvs. ar trebui să returneze un răspuns „fals”.



function esteDivizibilCu10(numar) {
    return numar % 10 === 0;
}

console.log(esteDivizibilCu10(50));
console.log(esteDivizibilCu10(19));


