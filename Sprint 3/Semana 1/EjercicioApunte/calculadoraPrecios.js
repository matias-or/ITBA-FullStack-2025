const IVA = 0.21;

function sumarIVA(precioBase) {
    return precioBase * (1 + IVA);
}

function calcularDescuento(precioBase, porcentaje) {
    const descuento = (precioBase * porcentaje) / 100;
    return precioBase - descuento;
}

// hacemos las funciones publicas exportandolas
// asignamos un objeto a module.exports con lo que queremos exporner

module.exports = {
    sumarIVA: sumarIVA,
    calcularDescuento: calcularDescuento
};