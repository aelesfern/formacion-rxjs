"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
/**
 * OBSERVABLE
 */
// son las piezas principales en Rxjs. Tódo funciona en torno a los observables y las subscripciones
new rxjs_1.Observable();
// Los observables son la fuente de los flujos de datos, y nos podemos suscribir a ellos para recibir ese flujo
new rxjs_1.Observable().subscribe(() => console.log('OBSERVABLES | Este mensaje aparecerá al recibir un dato'));
// Un Observable no emite datos por si mismo, hay que incorporar la lógica de los datos que va a emitir
// Para facilitar el trabajo Rxjs provee métodos con los que crear observables para los usos más habituales
rxjs_1.interval(1000).subscribe(() => console.log('OBSERVABLES | Interval emite un valor incremental periodicamente según el intervalo proporcionado'));
rxjs_1.of(5).subscribe(() => console.log('OBSERVABLES | Of emite el valor proporcionado'));
rxjs_1.from([1, 3, 4]).subscribe(() => console.log('OBSERVABLES | From transforma el argumento recibido en un flujo de datos'));
rxjs_1.EMPTY.subscribe(() => console.log('OBSERVABLES | EMPTY no emite nada y termine'));
//# sourceMappingURL=4-observables.js.map