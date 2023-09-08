const peso = document.getElementById("peso")
const altura = document.getElementById("altura")
const butao = document.querySelector(".butao")
const header = document.querySelector("header")
const modal = document.querySelector(".modal")
const close = document.querySelector(".close")
let nume = document.querySelector(".nume")
butao.addEventListener('click' , function(e){
    e.preventDefault();
    const pesoCorreto = Number(peso.value);
    const alturaCorreto = Number(altura.value);
    if (peso.value !== '' && altura.value !== '' && !isNaN(pesoCorreto) && !isNaN(alturaCorreto)) {
        header.classList.remove("active");
        let calc = ((pesoCorreto / (alturaCorreto*alturaCorreto))*10000).toFixed(2)
        modal.classList.add("active")
         nume.innerHTML = calc;
         
        
    } else {
       header.classList.add("active");
    }
});

close.addEventListener('click' , function(){
    modal.classList.remove("active")
})