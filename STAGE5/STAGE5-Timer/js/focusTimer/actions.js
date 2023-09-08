import state from './state.js'
import * as timer from './timer.js'
import * as ele from './elements.js'
import * as audio from './audio.js'
export function toggleRunning(){
 state.isRunning = document.documentElement.classList.toggle("running")
 timer.countDown()
 audio.buttonPress.play()
}
export function ToggleMusic(){
state.isMute = document.documentElement.classList.toggle("musicof")
if(state.isMute){
    audio.bgAudio.play()
}
else{
    audio.bgAudio.pause()
}
}
export function reset(){
    state.isRunning = false;
    state.isRunning = document.documentElement.classList.remove("running")
    timer.updateDisplay()
}
export function set(){
    ele.minutes.setAttribute('contentEditable', true)
    ele.minutes.focus()

  

}
