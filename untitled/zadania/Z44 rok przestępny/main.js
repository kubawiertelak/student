const liczba_rok = document.querySelector('#rok')
const wynik = document.querySelector('#wynik')
const btn = document.querySelector('button')

btn.addEventListener('click', e => {
    let rok = parseInt(liczba_rok.value)


    if (  rok % 4 === 0 && rok % 100 !== 0) {
        wynik.innerHTML =
            `
            Rok ${rok} <b>jest przestępny</b>
            `
    }
    else{
        wynik.innerHTML =
            `
            Rok ${rok} <b> nie jest przestępny</b>
            `
        }



})