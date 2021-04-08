"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
/**
 * PIPES
 *
 * Nos permiten realizar operaciones sobre el flujo de datos a recibir
 */
rxjs_1.of('PIPES | I used to be a simple message')
    .pipe(operators_1.map(x => `${x}, but then I took a map to the knee`))
    .subscribe(console.log);
// Reciben N objetos de tipo OperatorFunction<Observable<T>, Observable<R>>
const myOperator = (data) => data.pipe(operators_1.map(elem => elem + ' pero añadí un operador'));
rxjs_1.of('PIPES | Mi valor es el inicial').pipe(myOperator).subscribe(console.log);
// Encadenarlas tienen el mismo resultado
const doubleIt = operators_1.map((x) => x * 2);
const nameIt = operators_1.map(x => `PIPES | Da igual si separo las operadores en N pipes, el valor es el mismo ${x}`);
rxjs_1.of(1).pipe(doubleIt, nameIt).subscribe(console.log);
rxjs_1.of(1).pipe(doubleIt).pipe(nameIt).subscribe(console.log);
// Pero anidarlas no!
// Ejemplo complicado
//# sourceMappingURL=5-pipes.js.map