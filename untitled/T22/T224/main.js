const liczba_a = document.querySelector('#a')
const liczba_b = document.querySelector('#b')
const wynik = document.querySelector('#wynik')
const btn = document.querySelector('button')

function liczbyWkolorze(a,b) {

    if(a>b){
        return `<span class='red'>${a}</span> <span class='green'>${b}</span>`
    }else if(b>a) {
        return `<span class='red'>${b}</span> <span class='green'>${a}</span>`
    }else {
        return `<span class='blue'>${b}</span> <span class='blue'>${a}</span>`
    }

}

btn.addEventListener('click', function (){
    let a = parseInt(liczba_a.value);
    let b = parseInt(liczba_b.value);
    wynik.innerHTML = liczbyWkolorze(a,b);
});