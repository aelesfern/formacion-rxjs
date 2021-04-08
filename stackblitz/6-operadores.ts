/**
 * OPERADORES
 */

import { from, of } from "rxjs";
import { map, mapTo, mergeMap, switchMap, take, tap } from "rxjs/operators";

// Rxjs nos provee de funciones con las que podemos crear operaciones consumibles por .pipe() con las que transformar el flujo de datos

of(5, 7)
  .pipe(
    map(x => `OPERATORS | Valor inicial ${x}`), // map() da el siguiente valor del flujo y espera un valor por el que sustituirle
    tap(x => console.log(x)), // tap() da el siguiente valor del flujo y realiza una operación sin afectar al mismo
    mapTo("OPERATORS | Pero es que me da igual ese valor"), // mapTo() trasnforma el flujo a un valor fijo
    tap(x => console.log(x)),
    switchMap(x =>
      from(fetch("https://jsonplaceholder.typicode.com/comments"))
    ), // switchMap() transforma el flujo a otro observable
    take(1) // take() limia el Nº de elementos que se procesarán en el flujo y lo completa
  )
  .subscribe();
