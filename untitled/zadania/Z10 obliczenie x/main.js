const liczba_x = document.querySelector('#x')
const wynik = document.querySelector('#wynik')
const btn = document.querySelector('button')
btn.addEventListener('click', function () {
    parseFloat(liczba_x.value)



     let x = parseFloat(liczba_x.value)
    let wyn = (Math.pow(x, 2) / Math.pow((1 + Math.abs (x)), 2))
    console.log(x)
    console.log(wyn)
    wynik.innerHTML =
        `
        x = ${x}<br>
        wyn = ${wyn}<br>
        `
})