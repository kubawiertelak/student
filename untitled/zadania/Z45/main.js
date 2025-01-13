const liczba_a = document.querySelector('#a')
const liczba_b = document.querySelector('#b')
const liczba_c = document.querySelector('#c')
const btn = document.querySelector('button')

btn.addEventListener('click', () => {
    let a = parseInt(liczba_a.value)
    let b = parseInt(liczba_b.value)
    let c = parseInt(liczba_c.value)
    let akw = Math.pow(a, 2)
    let bkw = Math.pow(b, 2)
    let ckw = Math.pow(c, 2)
    let pr = akw + bkw
    let ab = a + b


    if (ab <= c){
        wynik.innerHTML =
            `
            A = ${a}<br>
            B = ${b}<br>
            C = ${c}<br>
            Nie ma takiego trójkąta
            `
    }

    else if(pr === ckw){
        wynik.innerHTML =
            `
            A = ${a}<br>
            B = ${b}<br>
            C = ${c}<br>
            Trójkąt jest prostokątny
            `
    }
   else if (a === b && b === c){
        wynik.innerHTML =
            `
            A = ${a}<br>
            B = ${b}<br>
            C = ${c}<br>
            Trójkąt jest równoboczny
            `
    }
    else if (a===b || b===c){
        wynik.innerHTML =
            `
            A = ${a}<br>
            B = ${b}<br>
            C = ${c}<br>
            Trójkąt jest równoramienny
            `
    }
    else {
        wynik.innerHTML =
            `
            A = ${a}<br>
            B = ${b}<br>
            C = ${c}<br>
            Żaden z powyższych trójkątów
            `
    }
})