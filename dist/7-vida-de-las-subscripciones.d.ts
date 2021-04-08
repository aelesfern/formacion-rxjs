/**
 * VIDA DE LAS SUBSCRIPCIONES
 *
 * Los Observables son streams de datos, por lo que si no gestionamos hasta cuando queremos que las subscripciones estén activas, pueden
 * estar ocupando memoria sin tener ya un uso. Rxjs optimiza su código para identificar subscripciones muertas y terminarlas, pero no
 * es todo lo 'inteligente' como para evitar fugas de memoria. Es obligación del desarrollador gestionar la vida de las subscripciones
 */
declare global {
    interface Document {
        component: any;
    }
}
export {};
