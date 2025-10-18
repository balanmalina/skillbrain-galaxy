// Scrieți o funcție care returnează un obiect nou fără proprietățile furnizate
// Funcția primește 2 parametri ca date de intrare.
// Unul dintre parametri este obiectul, iar celălalt este proprietatea care nu se dorește să persiste în rezultatul returnat.

function removeProperty(obj, prop) {
    const newObj = { ...obj };
    delete newObj[prop];
    return newObj;
}

const object = {
    a: 1,
    b: 2,
}
const result = removeProperty(object, "a");
console.log(result)