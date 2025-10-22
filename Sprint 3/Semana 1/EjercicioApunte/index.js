// importamos nuestro modulo
const calculadora = require('./calculadoraPrecios.js');

// calculadora ahora contiene el objeto que exportamos.

const precioSilla = 5000;
const precioMesa = 20000;

// podemos usar las funciones que ahora contiene calculadora
const precioFinalSilla = calculadora.sumarIVA(precioSilla);

const precioDescuentoMesa = calculadora.calcularDescuento(precioMesa, 15); // 15% descuento
console.log(`El precio final de la silla es ${precioFinalSilla}`);