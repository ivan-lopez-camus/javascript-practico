//Codigo del cuadrado
console.group("Cuadrado");
function perimetroCuadrado(lado){
    return lado*4;
}

function areaCuadrado(lado){
    return lado**2;
}

perimetroCuadrado(4);
areaCuadrado(6);

console.groupEnd();

//Codigo del triangulo
console.group("Triangulo");
/* const lado1=6;
const lado2=6;
const base=9;
const altura=5;

console.log("Los lados del triangulo miden: "+ lado1 + " y " +lado2
            + " ademas la base mide "
            + base
            + " y la altura mide "
            + altura);

const perimetroTriangulo = lado1+lado2+base;
console.log("El perimetro del cuadrado es: "+perimetroTriangulo);

const areaTriangulo = (base*altura)/2;
console.log("El area del cuadrado es: "+areaTriangulo + "cm2" );*/

function perimetroTriangulo(lado1,lado2,base){
    return lado1+lado2+base
}

function areaTriangulo(base,altura){
    return (base*altura)/2
}
console.groupEnd();

//Codigo del circulo
console.group("Circulo");
const PI = Math.PI;
console.log("El valor de Pi es: " +PI)
/*const radio=10;
const diametro=2*radio;
const PI= Math.PI;


console.log("El radio del circulo es : " + radio + " y el diametro es : "+ diametro);

const perimetroCirculo = 2*PI*radio;
console.log("El perimetro del circulo es: "+perimetroCirculo);

const areaCirculo = PI*(radio**2);
console.log("El area del cuadrado es: "+areaCirculo );*/

function perimetroCirculo(radio){
    return 2*PI*radio;
}

function areaCirculo(radio){
    return PI*(radio**2);
}
console.groupEnd();

//Interaccion con el HTML
function calcularPerimetroCuadrado(){
    const input= document.getElementById("inputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    const per = document.getElementById("perCuad");
    per.innerHTML = `<h1>El perimetro de este cuadrado es : ${perimetro}</h1>`
    //per.innerText = "El perimetro de este cuadrado es : " +perimetro;
}

function calcularAreaCuadrado(){
    const input= document.getElementById("inputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    const ar = document.getElementById("arCuad");
    ar.innerHTML = `<h1>El area de este cuadrado es : ${area}</h1>`
    //per.innerText = "El area de este cuadrado es : " +area;
  
}
//Interaccion con el HTML del triangulo
function calcularPerimetroTriangulo(){
    const input1= document.getElementById("inputLado1");
    const input2= document.getElementById("inputLado2");
    const input3= document.getElementById("inputBase");
    const per = document.getElementById("perimetro");
    const lado1 = Number(input1.value);
    const lado2 = Number(input2.value);
    const base = Number(input3.value);
   
    if(lado1===lado2 && base!=lado1){
        const perimetroTri = perimetroTriangulo(lado1,lado2,base);
        per.innerHTML = `<h1>El perimetro de este triangulo isosceles es : ${perimetroTri}</h1>`
        //per.innerText = "El perimetro del triangulo isosceles es : " +perimetroTri;
    }
    else if(lado1===lado2 && base!=lado2){
        const perimetroTri = perimetroTriangulo(lado1,lado2,base);
        per.innerHTML = `<h1>El perimetro de este triangulo isosceles es : ${perimetroTri}</h1>`
        //per.innerText = "El perimetro del triangulo isosceles es : " +perimetroTri;
       
    }
    else if(lado1===lado2===base){
        alert("Es un triangulo equilatero, debe ingresar uno isosceles")
    }
    else{
        alert("Los lados 1 y 2 deben ser iguales y diferentes a la base")
    }
    }
   

function calcularAreaTriangulo(){
    /*const input1= document.getElementById("inputBase");
    const input2= document.getElementById("inputAltura");
    const base = input1.value;
    const altura = input2.value;
    const area = areaTriangulo(base,altura);
    */
    const input1= document.getElementById("inputLado1");
    const input2= document.getElementById("inputLado2");
    const input3= document.getElementById("inputBase");
    const ar = document.getElementById("ar");
    const lado1 = Number(input1.value);
    const lado2 = Number(input2.value);
    const base = Number(input3.value);
    var area= Math.sqrt(lado1**2-((base**2)/4));
    area = area.toFixed(1);
    ar.innerHTML = `<h1>El area de este triangulo isosceles es : ${area}</h1>`
    //ar.innerText = "El area de este triangulo isosceles es : " +area;
}

function calcularPerimetroCirculo(){
    const input= document.getElementById("inputRadio");
    const radio = Number(input.value);
    var perimetroCirc = perimetroCirculo(radio);
    const per = document.getElementById("perCir");
    perimetroCirc = perimetroCirc.toFixed(1);
    per.innerHTML = `<h1>El perimetro de este circulo es : ${perimetroCirc}</h1>`
    //per.innerText = "El perimetro de este circulo es : " +perimetroCirc;
    //alert(perimetroCirc);
}

function calcularAreaCirculo(){
    const input= document.getElementById("inputRadio");
    const radio = Number(input.value);
    var perimetroCirc = areaCirculo(radio);
    const ar = document.getElementById("arCir");
    perimetroCirc = perimetroCirc.toFixed(1);
    ar.innerHTML = `<h1>El area de este circulo es : ${perimetroCirc}</h1>`
    //per.innerText = "El area de este circulo es : " +perimetroCirc;
    //alert(perimetroCirc);
}