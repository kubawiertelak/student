const liczba_a = document.querySelector('#a')
const liczba_b = document.querySelector('#b')
const wynik = document.querySelector('#wynik')
const btn = document.querySelector('button')

function Euklides(a,b){
    let rszt;
    while(b) {
        rszt = a % b;
        a = b;
        b = rszt;
    }
    return a;
}

btn.addEventListener('click', function (){

    let c = parseInt(liczba_a.value);
    let d = parseInt(liczba_b.value);

    wynik.innerHTML =
        `
        Pierwsza liczba = ${c}<br>
        Druga liczba = ${d}<br>
        Wynik = ${Euklides(c,d)}
        `
})