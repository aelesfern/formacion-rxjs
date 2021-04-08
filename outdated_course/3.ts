import {interval, of, Subject} from 'rxjs';
import {
  filter,
  map,
  mapTo,
  switchMap,
  take,
  takeUntil,
  tap,
} from 'rxjs/operators';

/* Pipe nos permite encadenar cambios al stream. Pensemos en un Observable con Pipes como en una configuración */

// Output: 'Numero: 5', 'Numero: 6', 'Numero: 7', ...
interval(100)
  .pipe(
    filter(data => data > 3),
    map(data => 'Numero: ' + data)
  )
  .subscribe(console.log);

/* Se pueden encadenar y jerarquizar pipes pero el resultado es el mismo */

const unsubscriber = new Subject<string>();
unsubscriber.next('tete');
unsubscriber.complete();

interval(1000)
  .pipe(
    map(() => 'PEpe'),
    take(1)
  )
  .subscribe(x => console.log(x));

setTimeout(() => unsubscriber.next(), 10000);

interval(1000)
  .pipe(
    map(x => x),
    filter(x => x > 5),
    tap(x => console.log(x))
  )
  .subscribe();

/* Pipe se puede añadir a cualquier observable, y las operaciones de Rxjs devuelven Observables continuamente */
of(5)
  .pipe(switchMap(() => of(6).pipe(mapTo(5))))
  .subscribe();
