import {of} from "rxjs";
import {filter, map, mapTo, switchMap, take, tap} from "rxjs/operators";

// Podemos reutilizar funciones
const consoleNumber = () => tap((data: number) => console.log(data));
const consoleString = () => tap((data: number | string) => console.log(data));
// Pero podemos liarla y perder el tipado
const consoleMal = tap(data => console.log(data));

of(1)
    .pipe(
        consoleNumber(),
        // Recibo los valores y los transformo por lo que devuelva
        map(data => data * 2),
        consoleNumber(),
        // Ignoro los valores que no pasen la condicion
        filter(data => data < 10),
        consoleNumber(),
        // Ignoro los valores y los transformo a un valor fijo
        mapTo('Oli'),
        consoleString(),
        // Recibo los valores y lo que haga no va a afectar al stream
        tap(data => console.log(`${data} Manoli`)),
        consoleString(),
        // Me conecto a otro Observable
        switchMap(data => of([data, data, data])),
        consoleString(),
        // Tras obtener N valores, completo la subscripción
        take(2)
    )
    .subscribe();
