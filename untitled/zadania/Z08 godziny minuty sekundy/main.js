const liczba_sek = document.querySelector('#sek')
const wynik = document.querySelector('#wynik')
const btn = document.querySelector('button')
btn.addEventListener('click', function (){
    parseFloat(liczba_sek.value)


let sekundy = liczba_sek.value
let godziny = Math.floor(sekundy / 3600)
let minuty = Math.floor((sekundy % 3600) / 60)
let sek = (sekundy % 3600) % 60

console.log(godziny)
console.log(minuty)
console.log(sek)
    wynik.innerHTML =
        `
      wynik =  ${godziny}g, ${minuty}m, ${sek}s
        
        
        `
})