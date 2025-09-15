// Returneaza un boolean daca un nr.este divizibil cu 10, o functie care va returna un boolean "adevarat" sau "fals" ca rezultat



function esteDivizibilCu10(numar) {
    return numar % 10 === 0;
}

console.log(esteDivizibilCu10(50));
console.log(esteDivizibilCu10(19));