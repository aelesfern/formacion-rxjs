"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
/**
 * ¿QUE ES RXJS?
 *
 * Una librería que implementa ReactiveX para realizar
 * programación reactiva,         => Trabajar con flujos de datos asíncronos y su propagación
 * basada en flujos de datos      => Secuencia de eventos ordenados en el tiempo
 * y programación funcional.      => Código estructurado en funciones y su uso
 */
rxjs_1.interval(100)
    .pipe(operators_1.take(10), 
// eslint-disable-next-line eqeqeq
operators_1.filter(x => x % 2 == 0))
    .subscribe(x => console.log(`QUE ES RXJS | ${x}`));
// Flujos de datos
rxjs_1.of(); // => Emito nada
rxjs_1.from([1, 5, 2323, 1]); // => Emito los valores del array, uno tras otro
rxjs_1.interval(100); // => Emito un valor incremental cada 100ms
//# sourceMappingURL=1-introduccion.js.map