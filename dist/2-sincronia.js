"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
// Asíncronos
console.log(`ASINCRONIA | Las instrucciones asíncronas se ejecutan`);
rxjs_1.from([0, 1, 2])
    .pipe(operators_1.concatMap(x => rxjs_1.of(x).pipe(operators_1.delay(300 + Math.random() * 300))))
    .subscribe(x => console.log(`ASINCRONA | ${x} en un momento indeterminado`));
console.log(`ASINCRONIA | sin parar la ejecución de las instrucciones que las siguen`);
// vs Sincronos
console.log(`SINCRONIA | Las instrucciones síncronas se ejecutan`);
for (let i = 0; i < 4; i++) {
    console.log(`SINCRONIA | ${i} una tras otra`);
}
console.log(`SINCRONIA | bloqueando la ejecución de las instrucciones que las siguen`);
//# sourceMappingURL=2-sincronia.js.map