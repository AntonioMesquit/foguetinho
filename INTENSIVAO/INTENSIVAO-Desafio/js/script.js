window.addEventListener("scroll", function () {
    let main = document.querySelector("main");
    let main2 = document.querySelector(".main2");
    let footer = document.querySelector("footer");

  
    if (window.scrollY > 400) {
        main.classList.add('rolagem');
    } 

  
    if (window.scrollY > 1100) {
        main2.classList.add('rolagem');
    } 


    if (window.scrollY > 1100) {
        footer.classList.add('rolagem');
    }
    
});
