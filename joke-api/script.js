const button = document.getElementById('button-app');
const jokeId = document.getElementsByClassName("titlu-app")[0];
const jokeText = document.getElementsByClassName("paragraf-app")[0];


console.log("Butonul functioneaza");

button.addEventListener("click", () => {
    console.log("Butonul apasat");

    button.style.backgroundColor = "white";
    setTimeout(() => {
        button.style.backgroundColor = "";
    }, 200);


    fetch('https://v2.jokeapi.dev/joke/Dark,Spooky?blacklistFlags=racist,sexist', { cache: 'no-cache' })
        .then(response => response.json())
        .then(data => {
            console.log('Date primite de la API:', data);

            const joke = data;
            jokeId.textContent = `JOKE #${joke.id}`;

            if (joke.type === "single") {
                jokeText.textContent = joke.joke;

            } else {
                jokeText.textContent = `${joke.setup}\n${joke.delivery}`;
            }
        })

        .catch(error => {
            console.error('A aparut o erroare', error)
        });
})





