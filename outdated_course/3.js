"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
/* Pipe nos permite encadenar cambios al stream. Pensemos en un Observable con Pipes como en una configuración */
// Output: 'Numero: 5', 'Numero: 6', 'Numero: 7', ...
rxjs_1.interval(100)
    .pipe(operators_1.filter(function (data) { return data > 3; }), operators_1.map(function (data) { return 'Numero: ' + data; }))
    .subscribe(console.log);
/* Se pueden encadenar y jerarquizar pipes pero el resultado es el mismo */
rxjs_1.interval(1000)
    .pipe(operators_1.map(function (x) { return x; }), operators_1.filter(function (x) { return x > 5; }))
    .pipe(operators_1.tap(function (x) { return console.log(x); }))
    .subscribe();
rxjs_1.interval(1000)
    .pipe(operators_1.map(function (x) { return x; }), operators_1.filter(function (x) { return x > 5; }), operators_1.tap(function (x) { return console.log(x); }))
    .subscribe();
/* Pipe se puede añadir a cualquier observable, y las operaciones de Rxjs devuelven Observables continuamente */
rxjs_1.of(5)
    .pipe(operators_1.switchMap(function () { return rxjs_1.of(6).pipe(operators_1.mapTo(5)); }))
    .subscribe();
//# sourceMappingURL=3.js.map