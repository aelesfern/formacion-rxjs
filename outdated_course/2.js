"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
/* Hay métodos de Rxjs que nos permiten facilmente crear un Observable con su Subscriber a la vez */
// Emite un numérico autoincremental con la frecuencia indicada
// Output: 0, 1, 2, 3, 4...
var intervalObs = rxjs_1.interval(1000);
// Emite el valor de otro Observable capturado en el momento de la subscripción
// Output: 4, 5, 6, 7, 8....
rxjs_1.defer(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, setTimeout(function () { }, 4000)];
            case 1:
                _a.sent();
                return [2 /*return*/, intervalObs];
        }
    });
}); });
// Emite una vez, sin valor, y se completa
// Output: |
rxjs_1.EMPTY;
// Transforma un Array, Promise o Iterable en un observable.
// Output: 1, 2, 3 |
rxjs_1.from([1, 2, 3]);
// Tranforma un evento en Observable. Node y un Navegador tienen diferentes eventos
// Output: [Event], [Event], ...
rxjs_1.fromEvent(document, 'click');
// Emite N valores que pueden ser diferentes
// Output: 1, 'pepe', [Object] |
rxjs_1.of(1, 'pepe', { jo: 'sete' });
// Emite valores de un rango
// Output: 1, 2, 3, 4, 5, 6, 7, 8, 9 |
rxjs_1.range(1, 9);
// Interval con rango
// Output: 0, 1, 2, 3, 4 |
rxjs_1.timer(1000, 200);
//# sourceMappingURL=2.js.map