const liczba_a = document.querySelector('#a')
const wynik = document.querySelector('#wynik')
const btn = document.querySelector('button')

btn.addEventListener('click', function () {
    let a = parseFloat(liczba_a.value)
    let f = 2 * (a - 0.1 * a) + 32;
    let k = a +  273.15;
    wynik.innerHTML =
        `
        celcjusze = ${a}<br>
        <b> fahrenheit = ${f}</b><br>
        <b> kalwin = ${k}</b><br>
        `
})