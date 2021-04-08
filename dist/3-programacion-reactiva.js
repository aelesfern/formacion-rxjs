"use strict";
// eslint-disable-next-line no-var
var document;
// Imperativa:
const buttonState = {
    _counter: 0,
    listeners: [],
    increment: function () {
        this._counter++;
        this.listeners.forEach(listener => listener(this._counter));
    },
};
const button = document.createElement('button');
button.innerHTML = 'Click Me';
document.body.appendChild(button);
// Programación por eventos
button.onclick = () => buttonState.increment();
// Programación reactiva
buttonState.listeners.push((count) => console.log(`REACTIVA | Count: ${count}`));
//# sourceMappingURL=3-programacion-reactiva.js.map