"use strict";
/*
    ===== Código de TypeScript =====
*/
function sumar(a, b) {
    return a + b;
}
const sumarFlecha = (a, b) => {
    return a + b;
};
function multiplicar(numero, otroNumero, base = 2) {
    return numero * base;
}
function curar(personaje, curarX) {
    personaje.pv += curarX;
}
const nuevoPersonaje = {
    nombre: 'Strider',
    pv: 50,
    mostrarHp() {
        console.log('Puntos de vida:', this.pv);
    }
};
curar(nuevoPersonaje, 20);
nuevoPersonaje.mostrarHp();
