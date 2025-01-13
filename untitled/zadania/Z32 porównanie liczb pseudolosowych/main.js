const liczba_min = document.querySelector('#min')
const liczba_max = document.querySelector('#max')
const wynik = document.querySelector('#wynik')
const btn = document.querySelector('button')

btn.addEventListener('click', () => {
    let min = parseFloat(liczba_min.value)
    let max = parseFloat(liczba_max.value)

    let a =  Math.floor(Math.random () * (max - min)+min)
    console.log(a)
    let b = Math.floor(Math.random () * (max - min)+min)
    console.log(b)


    if(a > b){
        wynik.innerHTML =
            `
            liczby losowane z zakresu <b>od ${min} do ${max}</b><br>
            Wylosowana liczba1 = ${a}<br>
            Wylosowana liczba2 = ${b}<br>
            ${a} > ${b}
            `
    }
    else if(a < b) {
        wynik.innerHTML =
            `
            liczby losowane z zakresu <b>od ${min} do ${max}</b><br>
            Wylosowana liczba1 = ${a}<br>
            Wylosowana liczba2 = ${b}<br>
            ${a} < ${b}
            `
    }
    else {
        wynik.innerHTML =
            `
            liczby losowane z zakresu <b>od ${min} do ${max}</b><br>
            Wylosowana liczba1 = ${a}<br>
            Wylosowana liczba2 = ${b}<br>
            ${a} = ${b}
            `
    }
})