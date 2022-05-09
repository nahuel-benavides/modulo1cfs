let continuar: number = 1;
let numero: number;
let maximo: number = -99999;
let minimo: number = 99999;

while (continuar !== 0) {
  numero = Number(prompt("ingrese numero"));
  continuar = Number(prompt("continuar?"));
  if (numero > maximo) {
    maximo = numero;
  }
  if (numero < minimo) {
    minimo = numero;
  }
}
console.log("maximo: " + maximo);
console.log("minimo: " + minimo);
