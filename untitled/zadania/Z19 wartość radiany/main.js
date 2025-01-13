const liczba_k = document.querySelector('#k')
const wynik = document.querySelector('#wynik')
const btn = document.querySelector('button')

btn.addEventListener('click', function(){

    let k = liczba_k.value
    let a = (Math.PI / 180) * k

    wynik.innerHTML =
        `
         Wyniki dla podanej wartości kątowej ${k} = ${a} radianów
        `
})