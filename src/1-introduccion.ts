import {from, interval, of} from 'rxjs';
import {filter, take} from 'rxjs/operators';

/**
 * ¿QUE ES RXJS?
 *
 * Una librería que implementa ReactiveX para realizar
 * programación reactiva,         => Trabajar con flujos de datos asíncronos y su propagación
 * basada en flujos de datos      => Secuencia de eventos ordenados en el tiempo
 * y programación funcional.      => Código estructurado en funciones y su uso
 */
interval(100)
  .pipe(
    take(10),
    // eslint-disable-next-line eqeqeq
    filter(x => x % 2 == 0)
  )
  .subscribe(x => console.log(`QUE ES RXJS | ${x}`));

// Flujos de datos
of(); // => Emito nada
from([1, 5, 2323, 1]); // => Emito los valores del array, uno tras otro
interval(100); // => Emito un valor incremental cada 100ms
