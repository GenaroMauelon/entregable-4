import * as rls from "readline-sync";
let cantidad : number = rls.questionInt ("Ingrese la dimencion del arreglo: ");
let arreglo : number[] = new Array (cantidad);
let i : number = 0;
​
function cargararreglo (arreglolocal : number[], cantidad : number) {
while (i < cantidad) {
    arreglolocal [i] = Math.floor(Math.random() * 100);    
    i++;
}
}

function ordenararreglo(arregloordenado: number[], cantidad: number) {
    let aux: number;
    for (let j = 0; j < cantidad - 1; j++) {
        for (let i = 0; i < cantidad - 1 - j; i++) {
            if (arregloordenado[i] < arregloordenado[i + 1]) {
                aux = arregloordenado[i];
                arregloordenado[i] = arregloordenado[i + 1];
                arregloordenado[i + 1] = aux;
            }
        }
    }
}
cargararreglo (arreglo, cantidad);
console.log (arreglo);
ordenararreglo (arreglo, cantidad);
console.log (arreglo);