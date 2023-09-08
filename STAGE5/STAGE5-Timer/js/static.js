export 
const dayAndNight = document.querySelector(".day-night-mode");
const html = document.querySelector("html")

dayAndNight.addEventListener('click' , function(){
    html.classList.toggle("active")
    
})