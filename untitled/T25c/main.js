class Czołg {
    nazwa = 'Rudy';
    kolor = 'Zielony';
    amunicja = 10;

    info = function (){
        document.write(`Cześć!!! Jestem czołgiem. Nazywam się ${this.nazwa}. Mój kolor to ${this.kolor}. Ilośc amunicji: ${this.amunicja}.<br>`)
    };

    pomaluj = function(nowyKolor){
        this.kolor =nowyKolor;
        document.write(`Pomalowałem czołg na kolor ${this.kolor}<br>`);
}
}

let rudy  = new Czołg();
console.log(rudy);
rudy.info();
rudy.pomaluj('niebieski');
rudy.info();
