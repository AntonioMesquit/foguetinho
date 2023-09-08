export const Modal = {
    wrapper:  document.querySelector(".modal"),
    btnClose: document.querySelector(".close"),
    numer: document.querySelector(".nume"),
    
        open() {
     Modal.wrapper.classList.add("active")
        },
        close(){
     Modal.wrapper.classList.remove("active")
        }
    }
 Modal.btnClose.addEventListener('click' , function(){
        Modal.close()
})
window.addEventListener('keydown' , tecla)
function tecla(event){
    if(event.key === 'Escape'){
        Modal.close()
    }
}