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
    3,
    1, 
    25
]
//ENCONTRAR EL ELEMENTO QUE MAS SE REPITE
let contador=1;
elementosNoRepetidos = [];
numeroVecesRepetidos=[];
let mayor=0;
let numeroMasRepetido=0;
const arregloOrdenado = lista1.sort((a,b) => {
    return a-b;
});
console.log(arregloOrdenado)
for(let i = 0;i<arregloOrdenado.length;i++){
    if(arregloOrdenado[i+1]===arregloOrdenado[i]){
        contador++
    }
    else{
        
        elementosNoRepetidos.push(arregloOrdenado[i]);
        numeroVecesRepetidos.push(contador);
        contador=1;
    }
}
console.log('Elementos sin repetir',elementosNoRepetidos);
console.log('Numero de veces repetidas por cada elemento',numeroVecesRepetidos);

for(let j = 0;j<numeroVecesRepetidos.length;j++){
    if (numeroVecesRepetidos[j] > mayor){
        mayor = numeroVecesRepetidos[j];
        numeroMasRepetido = elementosNoRepetidos[j];
    };
}
console.log('El numero que mas se repite es '+ numeroMasRepetido + ' el cual se repite '+ mayor+' veces')


elemento = document.getElementById("elem");
elemento.innerHTML = `<p>El numero que mas se repite es  : ${numeroMasRepetido} el cual se repite ${mayor} veces </p>`;



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

lis = document.getElementById("lista");
//listaFinal = lista1;
lis.innerHTML = `<p>La lista es  : ${lista1}</p>`
//per.innerText = "El area de este cuadrado es : " +area;

mod = document.getElementById("moda");
mod.innerHTML = `<p>La moda de la lista es  : ${moda}</p>`;

