import { Pop } from "../Utils/Pop.js"

export class Racer {
    constructor(name, number, picture) {
        this.name = name
        this.number = number
        this.picture = picture
        this.distance = 0

    }

    move() {
        this.distance += Math.floor(Math.random() + 3)
        if (this.distance == 95) {
            this.distance = 95

        }

    }


    go() {
        if (this.distance <= 95) {
            this.distance += Math.random() * 2
            if (this.distance = 95) {
                Pop.toast(`${this.name} Wins!!!`)
            }
        }

    }

    get Template() {
        return `
 <div class="col-12 bg-dark text-light m-4 p-4">
     <span id="picture">${this.picture}</span>
 </div>`

    }

}


