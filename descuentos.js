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

