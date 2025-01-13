const liczba_lcz = document.querySelector('#lcz')
const wynik = document.querySelector('#wynik')
const btn = document.querySelector('button')

btn.addEventListener('click', e => {
    let liczba = parseInt(liczba_lcz.value)
    switch (liczba) {
        case 0:

            wynik.innerHTML =
                `
                Podana liczba = <b>${liczba}<br></b>
                Nazwa oceny = <b>nieklasyfikowany</b>
                `
            break;

        case 1:

            wynik.innerHTML =
                `
                Podana liczba = <b>${liczba}<br></b>
                Nazwa oceny = <b>poprawny</b>
                `
            break;
        case 2:

            wynik.innerHTML =
                `
                Podana liczba = <b>${liczba}<br></b>
                Nazwa oceny = <b>poprawny</b>
                `
            break;
        case 3:

            wynik.innerHTML =
                `
                Podana liczba = <b>${liczba}<br></b>
                Nazwa oceny = <b>poprawny</b>
                `
            break;
        case 4:

            wynik.innerHTML =
                `
                Podana liczba = <b>${liczba}<br></b>
                Nazwa oceny = <b>dobry</b>
                `
            break;
        case 5:

            wynik.innerHTML =
                `
                Podana liczba = <b>${liczba}<br></b>
                Nazwa oceny = <b>dobry</b>
                `
            break;
        case 6:

            wynik.innerHTML =
                `
                Podana liczba = <b>${liczba}<br></b>
                Nazwa oceny = <b>wyróżniający</b>
                `
            break;
        default:

            wynik.innerHTML =
                `
                Podana liczba = <b>${liczba}<br></b>
                Nazwa oceny = <b>niewłaściwa liczba</b>
                `
    }

})