import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';

/**
 * PIPES
 *
 * Nos permiten realizar operaciones sobre el flujo de datos a recibir
 */
of('PIPES | I used to be a simple message')
  .pipe(map(x => `${x}, but then I took a map to the knee`))
  .subscribe(console.log);

// Reciben N objetos de tipo OperatorFunction<Observable<T>, Observable<R>>
const myOperator = (data: Observable<string>) =>
  data.pipe(map(elem => elem + ' pero añadí un operador'));
of('PIPES | Mi valor es el inicial').pipe(myOperator).subscribe(console.log);

// Encadenarlas tienen el mismo resultado
const doubleIt = map((x: number) => x * 2);
const nameIt = map(
  x =>
    `PIPES | Da igual si separo las operadores en N pipes, el valor es el mismo ${x}`
);
of(1).pipe(doubleIt, nameIt).subscribe(console.log);
of(1).pipe(doubleIt).pipe(nameIt).subscribe(console.log);

// Pero anidarlas no!
// Ejemplo complicado
