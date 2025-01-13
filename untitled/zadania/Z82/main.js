const liczba_a = document.querySelector('#a')
const liczba_b = document.querySelector('#b')
const wynik = document.querySelector('#wynik')
const btn = document.querySelector('button')

btn.addEventListener('click', () => {
 let a = parseInt(liczba_a.value)
    let b = parseInt(liczba_b.value)

    if (a > 0 && b > 0) {
        let block = "";
        for (let i = 0; i < a; i++) {
            block += "X".repeat(b) + "<br>";
        }
        document.getElementById("wynik").innerHTML = block;
    } else {
        document.getElementById("wynik").innerHTML = "Podane liczby muszą być większe od zera.";
    }

})