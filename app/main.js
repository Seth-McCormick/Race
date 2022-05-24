import { RacersController } from "./Controllers/RacersController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {

  valuesController = new ValuesController();

  racersController = new RacersController();
}

window["app"] = new App();
