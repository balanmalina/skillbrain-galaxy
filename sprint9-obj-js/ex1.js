// Scrieți o funcție care creează un obiect pentru a păstra informații despre rețeta ta preferată

// Ar trebui să aibă proprietăți pentru titlu (un șir de caractere), porții (un număr) și ingrediente (o șir de elemente - array).
// Va fi afișată pe rânduri separate (o instrucțiune console.log pentru fiecare) toate informațiile obiectului după crearea acestuia.


function myRecipe(titlu, portii, ingrediente) {
    const recipe = {
        titlu: titlu,
        portii: portii,
        ingrediente: [...ingrediente]
    };

    return recipe;
}

const recipe = myRecipe("Pizza", 10, ["rosii", "spanac", "ceapa", "carne"]);
const myArray = Object.values(recipe);
console.log(myArray);




