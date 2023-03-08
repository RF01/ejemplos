"use strict";
/*
    ===== Código de TypeScript =====
*/
class PersonaNormal {
    constructor(nombre, direccion) {
        this.nombre = nombre;
        this.direccion = direccion;
    }
}
class Heroe extends PersonaNormal {
    constructor(alterEgo, edad, nombreReal) {
        super(nombreReal, 'New York, USA');
        this.alterEgo = alterEgo;
        this.edad = edad;
        this.nombreReal = nombreReal;
    }
}
const ironman = new Heroe('Ironman', 45, 'Tony');
console.log(ironman);
