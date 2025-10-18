// Creați o șir de obiecte în care fiecare obiect descrie o carte și are proprietăți precum titlu(un șir de caractere - string), autor(un șir de caractere - string) și esteCitită(un boolean care indică dacă ați citit - o).
// Scrieți o funcție care:

// Iterează prin gama de cărți.Pentru fiecare carte se afișează titlul și autorul cărții astfel: “Hobbitul de J.R.R.Tolkien”.
// Utilizează o instrucțiune if / else ce modifică rezultatul, în funcție de faptul că ați citit-o sau nu. 
// Dacă cartea a fost citită, se afișează cu ajutorul functiei console.log un mesaj de tipul “Ai citit deja “Hobbitul” de J.R.R.Tolkien”, iar dacă nu, se afișează un mesaj de tipul “Trebuie să citești “Hobbitul” de J.R.R.Tolkien”.


const carti = [
    { titlu: "Hobbitul", autor: "J.R.R.Tolkien", esteCitita: true },
    { titlu: "Ion", autor: "Liviu Rebreanu", esteCitita: false }
];

for (let i = 0; i < carti.length; i++) {
    const carte = carti[i];
    console.log(carte.titlu + " de " + carte.autor);

    if (carte.esteCitita) {
        console.log("Ai citit deja \"" + carte.titlu + "\" de " + carte.autor);
    } else {
        console.log("Trebuie să citești \"" + carte.titlu + "\" de " + carte.autor);
    }
}

