function dibujarLinea() {
  let linea: string = "-";
  for (let indice = 0; indice <= 40; indice++) {
    linea = linea + "-";
  }
  console.log(linea);
}

let numero1: number = Number(prompt("ingrese un numero"));
let numero2: number = Number(prompt("ingrese otro numero"));
let opcion: number = Number(
  prompt(
    "ingrese 1 para sumar, 2 para restar, 3 para dividir y 4 para multiplicar"
  )
);
let resultado: number = 0;

switch (opcion) {
  case 1:
    resultado = numero1 + numero2;
    dibujarLinea();
    console.log(resultado);
    dibujarLinea();
    break;
  case 2:
    resultado = numero1 - numero2;
    dibujarLinea();
    console.log(resultado);
    dibujarLinea();
    break;
  case 3:
    resultado = numero1 / numero2;
    dibujarLinea();
    console.log(resultado);
    dibujarLinea();
    break;
  case 4:
    resultado = numero1 * numero2;
    dibujarLinea();
    console.log(resultado);
    dibujarLinea();
    break;
  default:
    dibujarLinea();
    console.log("la opcion es invalida");
    dibujarLinea();
}
