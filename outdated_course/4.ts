import {of} from "rxjs";
import {map, share, tap} from "rxjs/operators";

/* Por lo general cada .subscribe a un observable ejecuta la 'configuración' de ese observable una vez por subscripcion */
const coldObservable = of('').pipe(
    map(() => Math.random()),
    tap(() => console.log('Pasa por coldObservable'))
);
coldObservable.subscribe(data => console.log(`Dato cold recibido: ${data}`));
coldObservable.subscribe(data => console.log(`Dato cold recibido: ${data}`));
coldObservable.subscribe(data => console.log(`Dato cold recibido: ${data}`));


/* Pero hay maneras de "compartir la subscripción" y que la 'configuración' se ejecute una única vez */
const hotObservable = of('').pipe(
    map(() => Math.random()),
    tap(() => console.log('Pasa por hotObservable')),
    share()
);
hotObservable.subscribe(data => console.log(`Dato hot recibido: ${data}`));
hotObservable.subscribe(data => console.log(`Dato hot recibido: ${data}`));
hotObservable.subscribe(data => console.log(`Dato hot recibido: ${data}`));

/* PARECE SER QUE EL SHARED SOLO EVITA SIDE-EFFECTS COMO EL TAP. MIRAR COMO HACER EL EJEMPLO DEL HOT EN CONDICIONES, PUBLISH HA CAMBIADO Y NO TENGO NARICES A HACER UN EJEMPLO */

