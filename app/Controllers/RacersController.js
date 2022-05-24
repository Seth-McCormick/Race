import { appstate } from "../AppState.js";




function _draw() {
    let racers = appstate.racers
    let template = ''

    racers.forEach(r => template += `<div class="col-12 bg-dark text-light m-4 p-4">
        <span>${this.picture}</span>
    </div>`)
    document.getElementById('racers').innerHTML = template

}




export class RacersController {
    constructor() {
        console.log('players controller loaded');
        _draw()
    }

}

// setInterval('_moveRacers', 100)
