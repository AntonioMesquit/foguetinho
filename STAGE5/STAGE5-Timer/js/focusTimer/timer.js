import state from "./state.js"
import * as ele from './elements.js'
import { reset } from "./actions.js"
export function countDown(){
    clearTimeout(state.countdownId)
    if(!state.isRunning){
        return
    }
    let minutes = Number(ele.minutes.textContent)
    let seconds = Number(ele.seconds.textContent)

    seconds--
    
    if(seconds < 0){
     seconds = 59
     minutes--
    }
    if(minutes < 0){
        reset()
        return
    }
    updateDisplay(minutes,seconds)
   state.countdownId = setTimeout(() => countDown(), 1000)
  
}
export function updateDisplay(minutes,seconds){
    minutes = minutes ?? state.minutes
    seconds = seconds ?? state.seconds
    ele.minutes.textContent = String(minutes).padStart(2, "0")
    ele.seconds.textContent = String(seconds).padStart(2, "0")
}