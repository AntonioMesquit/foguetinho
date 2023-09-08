import { Modal } from './modal.js'

const peso = document.getElementById("peso")
const altura = document.getElementById("altura")
const butao = document.querySelector(".butao")
const header = document.querySelector("header")


butao.addEventListener('click' , function(e){
    e.preventDefault();
    const pesoCorreto = Number(peso.value);
    const alturaCorreto = Number(altura.value);
    if (peso.value !== '' && altura.value !== '' && !isNaN(pesoCorreto) && !isNaN(alturaCorreto)) {
        header.classList.remove("active");
        let calc = ((pesoCorreto / (alturaCorreto*alturaCorreto))*10000).toFixed(2)
       
          Modal.numer.innerHTML = calc;
         
          Modal.open()
    } else {
       header.classList.add("active");
    }
});
peso.oninput = () =>  header.classList.remove("active")
altura.oninput = () =>  header.classList.remove("active")


