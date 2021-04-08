import { fromEvent, interval, Subject, timer } from "rxjs";
import { first, take, takeUntil } from "rxjs/operators";

/**
 * VIDA DE LAS SUBSCRIPCIONES
 *
 * Los Observables son streams de datos, por lo que si no gestionamos hasta cuando queremos que las subscripciones estén activas, pueden
 * estar ocupando memoria sin tener ya un uso. Rxjs optimiza su código para identificar subscripciones muertas y terminarlas, pero no
 * es todo lo 'inteligente' como para evitar fugas de memoria. Es obligación del desarrollador gestionar la vida de las subscripciones
 */

class Component {
  constructor() {
    fromEvent(document, "click").subscribe(index =>
      console.log("MEMORY LEAK | Esta subscripción va por el indice ${index}")
    );
  }
}
document["component"] = new Component();
setTimeout(() => {
  delete document["component"];
  console.log("MEMORY LEAK | Componente eliminado");
}, 1000);

// Existen diferentes métodos para controlar esto
const subscription = interval(10).subscribe(() =>
  console.log(
    "UNSUBSCRIBE | Las subscripciones se pueden gestionar de forma manual"
  )
);
setTimeout(() => subscription.unsubscribe(), 1000);

interval(10)
  .pipe(first())
  .subscribe(() =>
    console.log(
      "UNSUBSCRIBE | Con first() la subscripción se completará tras procesar el primer evento"
    )
  );

interval(10)
  .pipe(take(2))
  .subscribe(() =>
    console.log("UNSUBSCRIBE | Con take(x) se completa tras procesar x eventos")
  );

const subject = new Subject();
interval(10)
  .pipe(takeUntil(subject))
  .subscribe(() =>
    console.log(
      "UNSUBSCRIBE | takeUntil() completará la subscripción cuando el observable argumento emita"
    )
  );
setTimeout(() => subject.next(), 1000);
