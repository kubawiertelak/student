const liczba_prc = document.querySelector('#prc')
const wynik = document.querySelector('#wynik')
const btn = document.querySelector('button')

btn.addEventListener('click', e => {
    let prc = parseInt(liczba_prc.value);
    let warunek = Math.floor(prc / 10);

    switch (warunek) {
        case 10:
            console.log("Ocena wynosi 5")
            wynik.innerHTML =
                `
                 Ocena studenta to 5 = ${10}<br>
                `
            break;
        case 9:
            console.log("Ocena wynosi 5")
            wynik.innerHTML =
                `
                 Ocena studenta to 5 = ${9}<br>
                `
            break;
        case 8:
            console.log("Ocena wynosi 4.5")
            wynik.innerHTML =
                `
                 Ocena studenta to 4.5 = ${8}<br>
                `
            break;
        case 7:
            console.log("Ocena wynosi 4")
            wynik.innerHTML =
                `
                 Ocena studenta to 4 = ${7}<br>
                `
            break;
        case 6:
            console.log("Ocena wynosi 3.5")
            wynik.innerHTML =
                `
                 Ocena studenta to 3.5 = ${6}<br>
                `
            break;
        case 5:
            console.log("Ocena wynosi 3")
            wynik.innerHTML =
                `
                 Ocena studenta to 3 = ${5}<br>
                `
            break;
        default:
            console.log("Ocena wynosi 2")
            wynik.innerHTML =
                `
                Ocena studenta wynosi 2
                `

    }




})