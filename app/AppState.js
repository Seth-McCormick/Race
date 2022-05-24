import { Racer } from "./Models/Racer.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = []

  /** @type {import('./Models/Racer').Value[]} */
  racers = [new Racer('Bruce Banana', '2', '🍌'), new Racer('Bob Tomato', '7', '🍅'), new Racer('Gary Carrot', '17', '🥕'), new Racer('James Rabbit', '11', '🐰')]
}


export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})


export const appstate = new AppState() 