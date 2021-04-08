"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
// Podemos reutilizar funciones
var consoleNumber = function () { return operators_1.tap(function (data) { return console.log(data); }); };
var consoleString = function () { return operators_1.tap(function (data) { return console.log(data); }); };
// Pero podemos liarla y perder el tipado
var consoleMal = operators_1.tap(function (data) { return console.log(data); });
rxjs_1.of(1)
    .pipe(consoleNumber(), 
// Recibo los valores y los transformo por lo que devuelva
operators_1.map(function (data) { return data * 2; }), consoleNumber(), 
// Ignoro los valores que no pasen la condicion
operators_1.filter(function (data) { return data < 10; }), consoleNumber(), 
// Ignoro los valores y los transformo a un valor fijo
operators_1.mapTo('Oli'), consoleString(), 
// Recibo los valores y lo que haga no va a afectar al stream
operators_1.tap(function (data) { return console.log(data + " Manoli"); }), consoleString(), 
// Me conecto a otro Observable
operators_1.switchMap(function (data) { return rxjs_1.of([data, data, data]); }), consoleString(), 
// Tras obtener N valores, completo la subscripción
operators_1.take(2))
    .subscribe();
//# sourceMappingURL=5.js.map