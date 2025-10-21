const button = document.querySelector('.btn-app');
const adviceId = document.querySelector('.title-advice');
const adviceText = document.querySelector('.paragraph-advice');

console.log('Scriptul a pornit');

button.addEventListener('click', () => {
    console.log('Butonul a fost apasat!');

    fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => {
            console.log('Am primit datele:', data);

            const slip = data.slip;
            adviceId.textContent = `ADVICE #${slip.id}`;
            adviceText.textContent = `"${slip.advice}"`;
        })

        .catch(error => {
            console.error('A aparut o eroare', error);
        });
})

