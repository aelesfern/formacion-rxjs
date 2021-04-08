"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
// eslint-disable-next-line no-var
var document;
class Component {
    constructor() {
        rxjs_1.fromEvent(document, 'click').subscribe(() => console.log('MEMORY LEAK | Esta subscripción va por el indice ${index}'));
    }
}
document.component = new Component();
setTimeout(() => {
    delete document['component'];
    console.log('MEMORY LEAK | Componente eliminado');
}, 1000);
// Existen diferentes métodos para controlar esto
const subscription = rxjs_1.interval(10).subscribe(() => console.log('UNSUBSCRIBE | Las subscripciones se pueden gestionar de forma manual'));
setTimeout(() => subscription.unsubscribe(), 1000);
rxjs_1.interval(10)
    .pipe(operators_1.first())
    .subscribe(() => console.log('UNSUBSCRIBE | Con first() la subscripción se completará tras procesar el primer evento'));
rxjs_1.interval(10)
    .pipe(operators_1.take(2))
    .subscribe(() => console.log('UNSUBSCRIBE | Con take(x) se completa tras procesar x eventos'));
const subject = new rxjs_1.Subject();
rxjs_1.interval(10)
    .pipe(operators_1.takeUntil(subject))
    .subscribe(() => console.log('UNSUBSCRIBE | takeUntil() completará la subscripción cuando el observable argumento emita'));
setTimeout(() => subject.next(), 1000);
//# sourceMappingURL=7-vida-de-las-subscripciones.js.map