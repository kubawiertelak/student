const liczba_a1 = document.querySelector('#a1')
const liczba_a2 = document.querySelector('#a2')
const liczba_b1 = document.querySelector('#b1')
const liczba_b2 = document.querySelector('#b2')
const liczba_c1 = document.querySelector('#c1')
const liczba_c2 = document.querySelector('#c2')
const btn = document.querySelector('button')

btn.addEventListener('click', function () {
    let a1 = parseInt(liczba_a1.value)
    let a2 = parseInt(liczba_a2.value)
    let b1 = parseInt(liczba_b1.value)
    let b2 = parseInt(liczba_b2.value)
    let c1 = parseInt(liczba_c1.value)
    let c2 = parseInt(liczba_c2.value)
    let y = (c2 * a1 - c1 * a2) / (b2 * a1 - a2 *b1)
    let x = (c1 - b1 * y) / a1

    wynik.innerHTML =
        `
        liczba a<sub>1</sub> = ${a1}<br>
        liczba a<sub>2</sub> = ${a2}<br>
        liczba b<sub>1</sub> = ${b1}<br>
        liczba b<sub>2</sub> = ${b2}<br>
        liczba c<sub>1</sub> = ${c1}<br>
        liczba c<sub>2</sub> = ${c2}<br>
        y = ${y}<br>
        x = ${x}<br>
        `
})