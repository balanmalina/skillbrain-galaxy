// Scrieți o funcție pentru a găsi numărul de apariții al unei litere într-un șir
// Funcția letterCount() returnează numărul apariții al unei litere trimise ca parametru dintr-un șir dat.


function letterCount(sir, litera) {
    sir = sir.toLowerCase()
    litera = litera.toLowerCase()
    let count = 0

    for (let i = 0; i < sir.length; i++) {
        if (sir[i] === litera) {
            count++;
        }
    }

    return count;
}

console.log(letterCount("Îmi place programarea", "e"));