"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _06_desestructuracion_funcion_1 = require("./06-desestructuracion-funcion");
/*
    ===== Código de TypeScript =====
*/
const carritoCompras = [
    {
        desc: 'Telefono 1',
        precio: 100
    },
    {
        desc: 'Telefono 2',
        precio: 150
    },
];
const [total, isv] = (0, _06_desestructuracion_funcion_1.calculaISV)(carritoCompras);
console.log('Total', total);
console.log('ISV', isv);
