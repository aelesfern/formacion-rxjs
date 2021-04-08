import { EMPTY, from, interval, Observable, of, ReplaySubject } from "rxjs";
import { tap } from "rxjs/operators";

/**
 * OBSERVABLE
 */

// son las piezas principales en Rxjs. Tódo funciona en torno a los observables y las subscripciones
new Observable();

// Los observables son la fuente de los flujos de datos, y nos podemos suscribir a ellos para recibir ese flujo
new Observable().subscribe(x =>
  console.log("OBSERVABLES | Este mensaje aparecerá al recibir un dato")
);

// Un Observable no emite datos por si mismo, hay que incorporar la lógica de los datos que va a emitir
// Para facilitar el trabajo Rxjs provee métodos con los que crear observables para los usos más habituales
interval(1000).subscribe(x =>
  console.log(
    "OBSERVABLES | Interval emite un valor incremental periodicamente según el intervalo proporcionado"
  )
);
of(5).subscribe(x =>
  console.log("OBSERVABLES | Of emite el valor proporcionado")
);

from([1, 3, 4]).subscribe(x =>
  console.log(
    `OBSERVABLES | From transforma el argumento recibido en un flujo de datos`
  )
);

EMPTY.subscribe(x =>
  console.log(`OBSERVABLES | EMPTY no emite nada y termine`)
);
