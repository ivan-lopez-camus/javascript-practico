const lista1 =[
    3,
    3,
    5,
    8,
    6,
    100,
    60,
    200,
    3,
    3,
    3,
    200,
    140,
    140,
    1, 
    25
]
const lista1Count = {};
//recorre el arreglo y recibe una funcion
lista1.map(
    function(elemento){
        if( lista1Count[elemento]){
            lista1Count[elemento]+=1;
        }else{
            lista1Count[elemento] = 1;
        }
    }
);

const lista1Array = Object.entries(lista1Count).sort(
    function (elementoA, elementoB) {
      return elementoA[1] - elementoB[1];
    }
);
  
const moda = lista1Array[lista1Array.length - 1];
console.log(moda)
