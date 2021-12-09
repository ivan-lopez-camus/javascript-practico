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