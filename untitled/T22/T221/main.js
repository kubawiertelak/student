let liczba = prompt('Podaj liczbę: ',0)

function wartosc_bzw(a) {
    if (a > 0) return a;
    else return a * (-1)
}

function wartosc_bzw2(a) {
    let wynik = (a>0) ? a : -a;
    return wynik;
}

document.write('Twoja liczba wynosi:' + liczba + '<br>');
document.write('Wartość bewzględna wynosi:' + wartosc_bzw2(liczba));