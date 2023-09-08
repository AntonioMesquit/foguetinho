import { controls } from "./elements.js"
import * as actions from './actions.js'
import * as ele from './elements.js'
import { updateDisplay } from "./timer.js"
import state from './state.js'
export function registerControls() {
    controls.addEventListener('click', (event) => {
       const clique = event.target.dataset.action;
       if(typeof actions[clique] != "function"){
        return
       }
       actions[clique]()
    })
}
export function setMinutes(){
    ele.minutes.addEventListener('focus', () => {
        ele.minutes.textContent = ""
    })
    ele.minutes.onkeypress = (event) => /\d/.test(event.key)

    ele.minutes.addEventListener('blur' ,(event) => {
        let time = event.currentTarget.textContent
        time = time > 60 ? 60 : time
        state.minutes = time
        state.seconds = 0

        updateDisplay()
    })
}