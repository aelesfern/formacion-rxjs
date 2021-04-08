// TODO: Adaptar ejercicio a código local o aportar un html

// Imperativa:
const buttonState = {
  _counter: 0,
  listeners: <Function[]>[],
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
buttonState.listeners.push((count: number) =>
  console.log(`REACTIVA | Count: ${count}`)
);
