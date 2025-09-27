// Returnează numărul de vocale dintr-un șir de caractere (string)

// Creați o funcție care va returna un număr întreg al numărului de vocale găsite într-un șir. Aceasta este o modalitate excelentă de a practica determinarea caracteristicilor unui set de date.


function numaraVocale(text) {
    const vocale = "aeiouăîâ";
    let contor = 0;

    for (let i = 0; i < text.length; i++) {
        if (vocale.indexOf(text[i]) !== -1) {
            contor++;
        }
    }

    return contor;
}

let sir = "string de test";
console.log("Numărul de vocale este: " + numaraVocale(sir));