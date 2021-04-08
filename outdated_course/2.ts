import {defer, EMPTY, empty, from, fromEvent, interval, of, range, timer} from "rxjs";



/* Hay métodos de Rxjs que nos permiten facilmente crear un Observable con su Subscriber a la vez */


// Emite un numérico autoincremental con la frecuencia indicada
// Output: 0, 1, 2, 3, 4...
const intervalObs = interval(1000);

// Emite el valor de otro Observable capturado en el momento de la subscripción
// Output: 4, 5, 6, 7, 8....
defer(async ()  => {
    await setTimeout(() => {}, 4000);
    return intervalObs;
});

// Emite una vez, sin valor, y se completa
// Output: |
EMPTY;

// Transforma un Array, Promise o Iterable en un observable.
// Output: 1, 2, 3 |
from([1, 2, 3]);

// Tranforma un evento en Observable. Node y un Navegador tienen diferentes eventos
// Output: [Event], [Event], ...
fromEvent(document, 'click');

// Emite N valores que pueden ser diferentes
// Output: 1, 'pepe', [Object] |
of(1, 'pepe', {jo: 'sete'});

// Emite valores de un rango
// Output: 1, 2, 3, 4, 5, 6, 7, 8, 9 |
range(1, 9);

// Interval con rango
// Output: 0, 1, 2, 3, 4 |
timer(1000, 200);

