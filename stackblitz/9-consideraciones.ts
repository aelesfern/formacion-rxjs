import { from, interval, ReplaySubject } from "rxjs";
import { map, switchMap, take } from "rxjs/operators";

const coldObservable = from(
  fetch("https://jsonplaceholder.typicode.com/users")
);
coldObservable.subscribe(x =>
  console.log("COLD-OBSERAVABLES | Hay Observables que procesan su emisión")
);
coldObservable.subscribe(x =>
  console.log("COLD-OBSERAVABLES | por cada suscripcion (mirar network)")
);

const hotObservable = new ReplaySubject(1);
hotObservable.subscribe(x =>
  console.log(
    "HOT-OBSERVABLES | También hay Observables que procesan su emisión"
  )
);
hotObservable.subscribe(x =>
  console.log("HOT-OBSERVABLES | de forma compartida")
);
hotObservable.next(1);

// Los operadores que completan una subscripción lo hacen del elemento interno
interval(1000)
  .pipe(
    take(3),
    switchMap(ronda =>
      interval(100).pipe(
        take(5),
        map(newRonda => `Ronda: ${ronda}, NewRounda: ${newRonda}`)
      )
    )
    //take(5),
  )
  .subscribe(
    console.log,
    error => console.log("ERROR"),
    () => console.log("completado")
  );
