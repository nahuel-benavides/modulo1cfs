function dibujarLinea() {
  let linea: string = "-";
  for (let indice = 0; indice <= 40; indice++) {
    linea = linea + "-";
  }
  console.log(linea);
}

let numero1: number = Number(prompt("ingrese un numero"));
let numero2: number = Number(prompt("ingrese otro numero"));
let opcion: number = Number(prompt("ingrese 1 para sumar, 2 para restar"));
let resultado: number = 0;

if (opcion === 1) {
  dibujarLinea();
  resultado = numero1 + numero2;
  console.log(resultado);
  dibujarLinea();
} else if (opcion === 2) {
  resultado = numero1 - numero2;
  dibujarLinea();
  console.log(resultado);
  dibujarLinea();
}
