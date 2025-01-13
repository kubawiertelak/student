const liczba_lcz = document.querySelector('#lcz');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    let liczba = parseInt(liczba_lcz.value);
    for (i = 1; i <= liczba; i++){
        wynik.innerHTML += `${i}; `;
    }
})