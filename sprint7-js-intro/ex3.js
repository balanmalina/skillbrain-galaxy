// Folosind instrucțiunea JavaScript switch se va obține ziua săptămânii

// Veți crea o funcție care va returna un șir de caractere (string) care va reprezenta numele unei zile a săptămânii în raport cu numărul acesteia pe parcursul unei săptămâni.

// Exemplu 1:

// Input: 1

// Output: “Luni”

// Exemplu 2:

// Input: 5

// Output: “Vineri”

function getDayOfWeek(daynumber) {
    let dayName;

    switch (daynumber) {
        case 1:
            dayName = "Luni";
            break;
        case 2:
            dayName = "Marti";
            break;
        case 3:
            dayName = "Mierucuri";
            break;
        case 4:
            dayName = "Joi";
            break;
        case 5:
            dayName = "Vineri";
            break;
        case 6:
            dayName = "Sambata";
            break;
        case 7:
            dayName = "Duminica";
            break;

        default:
            dayNme = "Numarul trebuie sa fie intre 1 si 7";
    }

    return dayName;
}

console.log(getDayOfWeek(1));
console.log(getDayOfWeek(5));
console.log(getDayOfWeek(7));

