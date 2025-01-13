const liczba_a = document.querySelector('#a')
const wynik = document.querySelector('#wynik')
const btn = document.querySelector('button')

btn.addEventListener('click', e => {

    if (a > 0) {
        let output = "Wylosowane liczby: ";
        let details = "";

        for (let i = 0; i < a; i++) {

            let randomNumber = Math.floor(Math.random() * 9) + 1;
            output += randomNumber + " ";
            details += randomNumber + "|".repeat(randomNumber) + "<br>";
        }

        // Wyświetlenie wyniku
        document.getElementById("wynik").innerHTML = output + "<br><br>" + details;
    } else {
        document.getElementById("wynik").innerHTML = "Liczba a musi być większa od zera.";
    }
})