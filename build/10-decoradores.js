"use strict";
/*
    ===== Código de TypeScript =====
*/
function classDecorator(constructor) {
    return class extends constructor {
        constructor() {
            super(...arguments);
            this.newProperty = "new property";
            this.hello = "override";
        }
    };
}
// @classDecorator
class MiSuperClase {
    constructor() {
        this.miPropiedad = 'ABC123';
    }
    imprimir() {
        console.log('Hola Mundo');
    }
}
console.log(MiSuperClase);
const miClase = new MiSuperClase();
