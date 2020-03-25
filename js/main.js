let slider = document.querySelector('.slider-contenedor');
let SliderInd = document.querySelectorAll('.slider-test');
let contador = 1;
let tamanoWidth = SliderInd[0].clientWidth;
let intervalo = 2000; 

window.addEventListener("resize", ()=> {
  tamanoWidth = SliderInd[0].clientWidth
});


slides(); 

setInterval (function tiempo() {
    slides();
},intervalo);

function slides () {
    slider.style.transform = 'translate('+( - tamanoWidth * contador )+'px)'; 
    slider.style.transition = 'transform 2s';
    contador++;

    if(contador === SliderInd.length) //validación
    {
      contador = 0;
      setTimeout(() =>{     //reinicio de los valores
        slider.style.transform = 'translate(0px)'; 
        slider.style.transition = 'transform 0s';
      },intervalo);
    }
}

