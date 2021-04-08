import { from, of } from "rxjs";
import { concatMap, delay } from "rxjs/operators";

// Asíncronos
console.log(`ASINCRONIA | Las instrucciones asíncronas se ejecutan`);
from([0, 1, 2])
  .pipe(concatMap(x => of(x).pipe(delay(300 + Math.random() * 300))))
  .subscribe(x => console.log(`ASINCRONA | ${x} en un momento indeterminado`));
console.log(
  `ASINCRONIA | sin parar la ejecución de las instrucciones que las siguen`
);

// vs Sincronos
console.log(`SINCRONIA | Las instrucciones síncronas se ejecutan`);
for (let i = 0; i < 4; i++) {
  console.log(`SINCRONIA | ${i} una tras otra`);
}

console.log(
  `SINCRONIA | bloqueando la ejecución de las instrucciones que las siguen`
);
