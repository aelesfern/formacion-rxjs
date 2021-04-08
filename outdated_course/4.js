"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
/* Por lo general cada .subscribe a un observable ejecuta la 'configuración' de ese observable una vez por subscripcion */
var coldObservable = rxjs_1.of('').pipe(operators_1.map(function () { return Math.random(); }), operators_1.tap(function () { return console.log('Pasa por coldObservable'); }));
coldObservable.subscribe(function (data) { return console.log("Dato cold recibido: " + data); });
coldObservable.subscribe(function (data) { return console.log("Dato cold recibido: " + data); });
coldObservable.subscribe(function (data) { return console.log("Dato cold recibido: " + data); });
/* Pero hay maneras de "compartir la subscripción" y que la 'configuración' se ejecute una única vez */
var hotObservable = rxjs_1.of('').pipe(operators_1.map(function () { return Math.random(); }), operators_1.tap(function () { return console.log('Pasa por hotObservable'); }), operators_1.share());
hotObservable.subscribe(function (data) { return console.log("Dato hot recibido: " + data); });
hotObservable.subscribe(function (data) { return console.log("Dato hot recibido: " + data); });
hotObservable.subscribe(function (data) { return console.log("Dato hot recibido: " + data); });
/* PARECE SER QUE EL SHARED SOLO EVITA SIDE-EFFECTS COMO EL TAP. MIRAR COMO HACER EL EJEMPLO DEL HOT EN CONDICIONES, PUBLISH HA CAMBIADO Y NO TENGO NARICES A HACER UN EJEMPLO */
//# sourceMappingURL=4.js.map