"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
/**
 * CODIFICACIÓN
 */
// Angular tiene un pipe llamado async que procesa en la vista los observables y se encarga de
// terminar la subscripción al destruir el Componente
// TODO: Ejemplo async pipe
// Una convención extendida es añadir un $ a las variables que sean observables.
// Si en tu proyecto se usa _ para las variables privadas, es lógico usar el $
// @Component({
//   template: `
//     <p>Count: {{$counter | async}}</p>
//     <button (click)="$counter.next()"></button>
//   `
// })
class CounterComponent {
    constructor() {
        this.$counter = new rxjs_1.Subject();
    }
}
//# sourceMappingURL=8-codificacion.js.map