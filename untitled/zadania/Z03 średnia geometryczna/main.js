const liczba_a = document.querySelector('#a')
const liczba_b = document.querySelector('#b')
const liczba_c = document.querySelector('#c')
const liczba_d = document.querySelector('#d')
const wynik = document.querySelector('#wynik')
const btn = document.querySelector('button')

btn.addEventListener('click', function (){
let a = parseFloat(liczba_a.value)
    let b = parseFloat(liczba_b.value)
    let c = parseFloat(liczba_c.value)
    let d = parseFloat(liczba_d.value)
    console.log(a + b +c +d)

    let iloczyn = a *b *c *d
    let srednia_geometryczna = Math.pow(iloczyn, 0.25)
    console.log(srednia_geometryczna)
    wynik.innerHTML =
        `
        a = ${a}<br>
        a = ${b}<br>
        a = ${c}<br>
        a = ${d}<br>
        <b>średnia geometryczna: ${srednia_geometryczna}</b><br>
        <b>srednia_geometryczna_zaokroglona: ${srednia_geometryczna.toFixed(3)}</b><br>
        `
})