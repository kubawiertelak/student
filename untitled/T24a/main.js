const btn = document.querySelector('button');
const wynik = document.querySelector('#wynik');

btn.addEventListener('click', () => {
    let a = document.querySelector('#a').value;
    let tekst = a.split(" ");
    let imie = tekst[0];
    let nazwisko = tekst[1];

    imie = imie.charAt(0).toUpperCase() + imie.slice(1).toLowerCase();
    nazwisko = nazwisko.charAt(0).toUpperCase() + nazwisko.slice(1).toLowerCase();
    wynik.innerHTML = `Masz na imię: ${imie}, masz na nazwisko: ${nazwisko}.`;
});


btn.addEventListener('click', () => {
    let a = document.querySelector('#a').value
    let tekst = a.split(" ")
    let imie = tekst[0];
    let nazwisko = tekst[1];

    imie = imie.charAt(0).toUpperCase() + imie.slice(1).toLowerCase()
    nazwisko = nazwisko.charAt(0).toUpperCase() + nazwisko.slice(1).toLowerCase()
    wynik.innerHtml = `Masz na imię: ${imie}, masz na nazwisko: ${nazwisko}.`
})