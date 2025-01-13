const liczba_l = document.querySelector('#l')
const wynik = document.querySelector('#wynik')
const btn = document.querySelector('button')

btn.addEventListener('click', function() {

    let l = liczba_l.value
    let k = Math.pow(l, 2)
    let s = Math.pow(l, 3)

    wynik.innerHTML =
        `
        ${l}<sup>2</sup> to: ${k}  <br>
        ${l}<sup>3</sup> to: ${s}<br>    
         `
})