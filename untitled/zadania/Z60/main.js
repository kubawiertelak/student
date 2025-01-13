const liczba_lcz = document.querySelector('#lcz')
const wynik = document.querySelector('#wynik')
const btn = document.querySelector('button')

btn.addEventListener('click', e => {
    let dzien = parseInt(liczba_lcz.value)
    switch (dzien) {
        case 1:
            console.log("Jest poniedziałek")

            wynik.innerHTML =
                `
                Podana liczba = <b>${dzien}<br></b>
                Nazwa dnia tygodnia = <b>poniedziałek</b>
                `
            break;

        case 2:
            console.log("Jest wtorek")
            wynik.innerHTML =
                `
                Podana liczba = <b>${dzien}<br></b>
                Nazwa dnia tygodnia = <b>wtorek</b>
                `
            break;
        case 3:
            console.log("Jest środa")
             wynik.innerHTML =
                 `
                Podana liczba = <b>${dzien}<br></b>
                Nazwa dnia tygodnia = <b>środa</b>
                `
            break;
        case 4:
            console.log("Jest czwartek")
            wynik.innerHTML =
                `
                Podana liczba = <b>${dzien}<br></b>
                Nazwa dnia tygodnia = <b>czwartek</b>
                `
            break;
        case 5:
            console.log("Jest sobota")
            wynik.innerHTML =
                `
                Podana liczba = <b>${dzien}<br></b>
                Nazwa dnia tygodnia = <b>sobota</b>
                `
            break;
        case 6:
            console.log("Jest niedziela")
            wynik.innerHTML =
                `
                Podana liczba = <b>${dzien}<br></b>
                Nazwa dnia tygodnia = <b>niedziela</b>
                `
            break;
        default:
            console.log("Nie ma takiego dnia tygodnia")
            wynik.innerHTML =
                `
                Podana liczba = <b>${dzien}<br></b>
                Nazwa dnia tygodnia = <b>liczba nie mieści się w przedziale</b>
                `
    }

})