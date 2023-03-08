"use strict";
/*
    ===== Código de TypeScript =====
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculaISV = void 0;
const telefono = {
    desc: 'Nokia A1',
    precio: 150
};
const tableta = {
    desc: 'iPad Air',
    precio: 350
};
function calculaISV(productos) {
    let total = 0;
    productos.forEach(({ precio }) => {
        total += precio;
    });
    return [total, total * 0.15];
}
exports.calculaISV = calculaISV;
// const articulos = [ telefono, tableta ];
// const [ total, isv ] = calculaISV( articulos );
// console.log('Total:', total );
// console.log('ISV:', isv);
