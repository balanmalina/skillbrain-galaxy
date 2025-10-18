// Scrieți o funcție pentru a genera un număr aleatoriu mai mare sau egal cu o variabilă start și strict mai mic decât o variabilă end .
// Aceste două variabile sunt capetele intervalului pentru numărul general: [start, end)
// Funcția getRandom(start, end) returnează un număr întreg aleator generat în intervalul definit de variabilele de început și sfârșit furnizate.


function getRandom(start, end) {
    return Math.floor(Math.random() * (end - start) + start);
}

console.log(getRandom(1, 5));