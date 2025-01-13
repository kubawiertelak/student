const liczba_min = document.querySelector('#min')
const liczba_max = document.querySelector('#max')
const wynik = document.querySelector('#wynik')
const btn = document.querySelector('button')



btn.addEventListener('click', function (){

    let min = liczba_min.value
    let max = liczba_max.value

    let a =  Math.floor(Math.random () * (max - min)+min)
    console.log(a)
    let b = Math.floor(Math.random () * (max - min)+min)
    console.log(b)
    let c = Math.floor(Math.random () * (max - min)+min)
    console.log(c)
    let d = Math.floor(Math.random () * (max - min)+min)
    console.log(d)
    let e = Math.floor(Math.random () * (max - min)+min)
    console.log(e)
 let suma = a + b + c + e
    let iloczyn = a *b *c *d *e
    let srednia = suma /5
    wynik.innerHTML =
        `
        a = ${a}<br>
        b = ${b}<br>
        c = ${c}<br>
        d = ${d}<br>
        e = ${e}<br>
        suma=${a}+ ${b}+ ${c}+ ${d}+ ${e} = ${suma}<br>
        iloczyn =${b}* ${c}* ${d}* ${e} = ${iloczyn}<br>
        srednia =(${a}+ ${b}+ ${c}+ ${d}+ ${e}) /5 = ${srednia}<br>
        `
})