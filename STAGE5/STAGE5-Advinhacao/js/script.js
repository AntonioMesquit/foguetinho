const but = document.querySelector(".butao");
const button = document.querySelector(".button");
const body = document.querySelector("body")
let num = 1;
const erro = document.querySelector(".adv")
but.addEventListener('click' , function(e){

    e.preventDefault();
    let valor = document.querySelector(".text-1")
    let tentativas = document.getElementById("number");
    let numeroAleatorio = (Math.random() * 10 + 1 ).toFixed(0)
   
   let certo = false


   while(!certo){
    let valors = parseInt(valor.value); 
    
    if(valors == numeroAleatorio){
        body.classList.add("active")
        tentativas.innerHTML = num
        certo = true
        break
    }
   else if(valors != numeroAleatorio){
    erro.innerHTML = "Voce errou, tente novamente!"
    num++
    break
   }
}
})
button.addEventListener('click' , function(e){
    e.preventDefault();
    erro.innerHTML = "Advinhe um numero de 0 a 10"
    num = 0;
    body.classList.remove("active")
})

