const liczba_cal = document.querySelector('#cal')
const wynik = document.querySelector('#wynik')
const btn = document.querySelector('button')
btn.addEventListener('click', function (){
    parseFloat(liczba_cal.value)
    let cal = liczba_cal.value
    let mm =(cal * 25.3995)
    console.log(cal)
    console.log(mm)
    wynik.innerHTML =
        `
        cal = ${cal}<br>
        <b>mm = ${mm}</b>
        `
})