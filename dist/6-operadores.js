"use strict";
/**
 * OPERADORES
 */
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
// Rxjs nos provee de funciones con las que podemos crear operaciones consumibles por .pipe() con las que transformar el flujo de datos
rxjs_1.of(5, 7)
    .pipe(operators_1.map(x => `OPERATORS | Valor inicial ${x}`), // map() da el siguiente valor del flujo y espera un valor por el que sustituirle
operators_1.tap(x => console.log(x)), // tap() da el siguiente valor del flujo y realiza una operación sin afectar al mismo
operators_1.mapTo('OPERATORS | Pero es que me da igual ese valor'), // mapTo() trasnforma el flujo a un valor fijo
operators_1.tap(x => console.log(x)), operators_1.switchMap(x => rxjs_1.from(fetch('https://jsonplaceholder.typicode.com/comments'))), // switchMap() transforma el flujo a otro observable
operators_1.take(1) // take() limia el Nº de elementos que se procesarán en el flujo y lo completa
)
    .subscribe();
//# sourceMappingURL=6-operadores.js.map