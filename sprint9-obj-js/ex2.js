// Scrieți o funcție care returnează un obiect nou fără proprietățile furnizate
// Funcția primește 2 parametri ca date de intrare. 
// Unul dintre parametri este obiectul, iar celălalt este proprietatea care nu se dorește să persiste în rezultatul returnat.


function returnezaUnObiect() {
    const returnat = {
        a: 1,
        b: 2
    }

    delete returnat.b;
    return returnat;

};

console.log(returnezaUnObiect());