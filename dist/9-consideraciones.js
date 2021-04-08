"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const coldObservable = rxjs_1.from(fetch('https://jsonplaceholder.typicode.com/users'));
coldObservable.subscribe(x => console.log('COLD-OBSERAVABLES | Hay Observables que procesan su emisión'));
coldObservable.subscribe(x => console.log('COLD-OBSERAVABLES | por cada suscripcion (mirar network)'));
const hotObservable = new rxjs_1.ReplaySubject(1);
hotObservable.subscribe(x => console.log('HOT-OBSERVABLES | También hay Observables que procesan su emisión'));
hotObservable.subscribe(x => console.log('HOT-OBSERVABLES | de forma compartida'));
hotObservable.next(1);
// Los operadores que completan una subscripción lo hacen del elemento interno
rxjs_1.interval(1000)
    .pipe(operators_1.take(3), operators_1.switchMap(ronda => rxjs_1.interval(100).pipe(operators_1.take(5), operators_1.map(newRonda => `Ronda: ${ronda}, NewRounda: ${newRonda}`)))
//take(5),
)
    .subscribe(console.log, () => console.log('ERROR'), () => console.log('completado'));
//# sourceMappingURL=9-consideraciones.js.map