//const precioOriginal=100;
//const descuento=15;



/*console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento
})*/

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento= (precio * porcentajePrecioConDescuento)/100;
    return precioConDescuento;
}

function onClickButtonPrice(){
    const inputPrice = document.getElementById("inputPrecio");
    const inputDescuento = document.getElementById("inputDescuento");
    precio = inputPrice.value;
    descuento = inputDescuento.value;
    const precioDescuento = calcularPrecioConDescuento(precio,descuento);
    const precioFinal = document.getElementById("precioFinal");
    precioFinal.innerText="El precio final es : "+precioDescuento;

}

const coupons = [
    "JuanDC_es_Batman",
    "pero_no_le_digas_a_nadie",
    "es_un_secreto",
];

function onClickButton(){
    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;
    const inputPrice = document.getElementById("inputPrecio");
    precio = inputPrice.value;
    let descuento;

    switch(couponValue) {
        case coupons[0]: // "JuanDC_es_Batman"
        descuento = 15;
        break;
        case coupons[1]: // "pero_no_le_digas_a_nadie"
        descuento = 30;
        break;
        case coupons[2]: // "es_un_secreto"
        descuento = 25;
        break;
    }
    const precioDescuento = calcularPrecioConDescuento(precio,descuento);
    const precioFinal = document.getElementById("precioFinal");
    precioFinal.innerText="El precio final es : "+precioDescuento;

}