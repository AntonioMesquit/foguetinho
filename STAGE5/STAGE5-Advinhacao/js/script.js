const but = document.querySelector(".butao");
const button = document.querySelector(".button");
const body = document.querySelector("body")
let num = 0;

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
    num++
    break
   }
    
}
  
})

