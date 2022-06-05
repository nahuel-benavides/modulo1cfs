function sumaDeArreglos(arre1: number[], arre2: number[]): number {
  let i: number = -1;
  let arraySuma: number[];
  for (i = 0; i < arraySuma.length; i++) {
    arraySuma[i] = arre1[i] + arre2[i];
  }
  return arraySuma[i];
}

let diametro: number = Number(prompt("elija el diametro del arreglo"));

let arreglo1: number[] = new Array(diametro);
let arreglo2: number[] = new Array(diametro);
let arregloSuma: number[] = new Array(diametro);

let i: number = -1;
for (i = 0; i < arreglo1.length; i++) {
  arreglo1[i] = Number(prompt("ingrese la posicion: " + i + " del arreglo 1"));
}

for (i = 0; i < arreglo2.length; i++) {
  arreglo2[i] = Number(prompt("ingrese la posicion: " + i + " del arreglo 2"));
}

console.log(sumaDeArreglos(arreglo1, arreglo2));
