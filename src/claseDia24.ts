let v1: number[] = new Array(longitud);
let longitud: number = Number(prompt("ingrese una longitud del arreglo"));

let indice: number;

console.log("la longitud del arreglo es " + longitud);

for (indice = longitud - 1; indice >= 0; indice--) {
  v1[indice] = Number(prompt("ingrese numeros de posicion"));
  console.log("el valor ingresado en longitud es: " + indice);
}
