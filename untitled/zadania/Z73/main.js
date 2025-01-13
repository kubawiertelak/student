const liczba_a = document.querySelectorAll('#a')

const wynik = document.querySelector('#wynik')
const btn = document.querySelector('button')

btn.addEventListener('click', function(){
wynik.innerHTML = ''
    let a = parseInt(liczba_a.value)


  if (a>1)
      for (let i = 2; i <= a; i+=2)
          wynik.innerHTML += i + '; '

    else
        wynik.innerHTML = 'Liczba nie jest większa od 1.'
})