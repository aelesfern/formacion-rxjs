import {Observable, Subscriber, Subscription} from 'rxjs';

/* ¿QUÉ ES RXJS? | Patrón Observable */

//  SUBSCRIBER es la función que se ejecutará cuando alguien se conecte al OBSERVABLE,
//  y es la encargada de emitir datos y completar la emisión
const SUBSCRIBER = (subscriber: Subscriber<number>) => {
  let index = 0;
  const dataSet = setTimeout(() => {
    subscriber.next(index);
    index++;
    if (index === 5) {
      subscriber.complete();
      clearTimeout(dataSet);
      1;
    }
  }, 1000);
};

//  OBSERVABLE es quien crea la relación ONE-to-MANY. Los OBSERVERS se subscriben al OBSERVABLE, y este les informa
//  cuando el SUBSCRIBER ha emitido un dato nuevo (next) o a terminado (complete)
const OBSERVABLE = new Observable(SUBSCRIBER);

//  Los OBSERVERS son aquellas entidades que estén subscritas a un OBSERVABLE. Existen internamente en el OBSERVABLE,
//  pero para el desarrollador suele ser una entidad abstracta. En el caso de este ejemplo, el OBSERVER sería el
//  método OBSERVER, ya que es el que ejecuta el método .subscribe()
function OBSERVER(index: number): Subscription {
  return OBSERVABLE.subscribe(
    data => console.log(`Observer ${index} -> ${data}`),
    error => console.log('Hubo un error!'),
    () => console.log('Observable completado')
  );
}

//  La SUBSCRIPTION es lo que devuelve un OBSERVABLE cuando alguien se subscribe a el. Su uso principal es el de
//  des-subscribirse cuando no se desea obtener más datos del OBSERVABLE
const SUBSCRIPTIONS = [OBSERVER(1), OBSERVER(2), OBSERVER(3)];
SUBSCRIPTIONS[0].unsubscribe();
