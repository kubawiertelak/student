const liczba_wa  = document.querySelector('#wa')
const liczba_wy = document.querySelector('#wy')
const wynik = document.querySelector('#wynik')
const btn = document.querySelector('button')

btn.addEventListener('click', function(){
    let wa = parseFloat(liczba_wa.value)
    let wy = parseFloat(liczba_wy.value)
    m2 = Math.pow(wy, 2)
    bmi = wa / m2

   if(bmi < 16){
       wynik.innerHTML =
           `
           Waga = ${wa}<br>
           Wysokość = ${wy}<br>
           Masz wygłodzenie twoje bmi wynosi ${bmi}<br>
           
           `
   }
   else if(bmi >= 16 && bmi <= 16.99){
       wynik.innerHTML =
           `
           Waga = ${wa}<br>
           Wysokość = ${wy}<br>
           Masz wychudzenie twoje bmi wynosi ${bmi}<br>
           
           `
   }
   else if(bmi >= 17 && bmi <= 18.49){
       wynik.innerHTML =
           `
           Waga = ${wa}<br>
           Wysokość = ${wy}<br>
           Masz niedowagę twoje bmi wynosi ${bmi}<br>
           
           `
   }
   else if(bmi >=18.5 && bmi <= 24.99){
       wynik.innerHTML =
           `
           Waga = ${wa}<br>
           Wysokość = ${wy}<br>
           Masz prawidłową wagę twoje bmi wynosi ${bmi}<br>
           
           `
   }
   else if(bmi >= 25 && bmi <= 29.99){
       wynik.innerHTML =
           `
           Waga = ${wa}<br>
           Wysokość = ${wy}<br>
           Masz nadwagę twoje bmi wynosi ${bmi}<br>
           
           `
   }
   else if(bmi >= 30 && bmi <= 34.99){
       wynik.innerHTML =
           `
           Waga = ${wa}<br>
           Wysokość = ${wy}<br>
           Masz otyłość I stopnia twoje bmi wynosi ${bmi}<br>
           
           `
   }
   else if(bmi >= 35 && bmi <= 39.99){
       wynik.innerHTML =
           `
           Waga = ${wa}<br>
           Wysokość = ${wy}<br>
           Masz otyłość II stopnia twoje bmi wynosi ${bmi}<br>
           
           `
   }
   else if(bmi >= 40){
       wynik.innerHTML =
           `
           Waga = ${wa}<br>
           Wysokość = ${wy}<br>
           Masz otyłość III stopnia twoje bmi wynosi ${bmi}<br>
           
           `
   }

})