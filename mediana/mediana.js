const lista1 =[
    3,
    5,
    8,
    6,
    100,
    60,
    200,
    140,
    1, 
    25
]

const mitadLista1 = parseInt(lista1.length/2);
lista1.sort((a, b) => a - b);//Ordena la lista de menor a mayor
console.log(lista1);

function esPar(numero){
    if(numero % 2===0){
        return true;
    }
    else{
        return false;
    }
}

let mediana;

if(esPar(lista1.length)){

    mediana= (lista1[mitadLista1-1]+lista1[mitadLista1])/2;

}
else{
    mediana= lista1[mitadLista1];
}