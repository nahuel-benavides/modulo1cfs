let numero1: number = Number(prompt("ingrese numero1"));
let numero2: number = Number(prompt("ingrese numero2"));
let suma: number = 0;

//intercambio de variables
if (numero1 > numero2) {
  let auxiliar: number = numero1;
  numero1 = numero2;
  numero2 = auxiliar;
}

for (let indice: number = numero1; indice <= numero2; indice++) {
  suma = suma + indice;
}
console.log(suma);
