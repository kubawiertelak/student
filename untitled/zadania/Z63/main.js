const liczba_lcz = document.querySelector('#lcz')
const wynik = document.querySelector('#wynik')
const btn = document.querySelector('button')

btn.addEventListener('click', e => {
    let liczba = parseInt(liczba_lcz.value)
    switch (liczba) {

        case 1:

            wynik.innerHTML =
                `
                Podana liczba = <b>${liczba}<br></b>
                Ilość dni w miesiącu = <b>31 dni</b>
                `
            break;
        case 2:

            wynik.innerHTML =
                `
                Podana liczba = <b>${liczba}<br></b>
                Ilość dni w miesiącu = <b>28 dni</b>
                `
            break;
        case 3:

            wynik.innerHTML =
                `
                Podana liczba = <b>${liczba}<br></b>
                Ilość dni w miesiącu = <b>31 dni</b>
                `
            break;
        case 4:

            wynik.innerHTML =
                `
                Podana liczba = <b>${liczba}<br></b>
                Ilość dni w miesiącu = <b>30 dni</b>
                `
            break;
        case 5:

            wynik.innerHTML =
                `
                Podana liczba = <b>${liczba}<br></b>
                Ilość dni w miesiącu = <b>31 dni</b>
                `
            break;
        case 6:

            wynik.innerHTML =
                `
                Podana liczba = <b>${liczba}<br></b>
                Ilość dni w miesiącu = <b> 30 dni</b>
                `
            break;
        case 7:

            wynik.innerHTML =
                `
                Podana liczba = <b>${liczba}<br></b>
                Ilość dni w miesiącu = <b>31 dni</b>
                `
            break;
        case 8:

            wynik.innerHTML =
                `
                Podana liczba = <b>${liczba}<br></b>
                Ilość dni w miesiącu = <b>31 dni</b>
                `
            break;
        case 9:

            wynik.innerHTML =
                `
                Podana liczba = <b>${liczba}<br></b>
                Ilość dni w miesiącu = <b>30 dni</b>
                `
            break;
        case 10:

            wynik.innerHTML =
                `
                Podana liczba = <b>${liczba}<br></b>
                Ilość dni w miesiącu = <b>31 dni</b>
                `
            break;
        case 11:

            wynik.innerHTML =
                `
                Podana liczba = <b>${liczba}<br></b>
                Ilość dni w miesiącu = <b>30 dni</b>
                `
            break;
        case 12:

            wynik.innerHTML =
                `
                Podana liczba = <b>${liczba}<br></b>
                Ilość dni w miesiącu = <b>31 dni w tygodniu</b>
                `
            break;
        default:

            wynik.innerHTML =
                `
                Podana liczba = <b>${liczba}<br></b>
                Ilość dni w miesiącu = <b>Nie ma takiego miesiąca</b>
                `
    }

})