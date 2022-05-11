function lineas() {
  let linea: string = "-";
  for (let indice: number = 0; indice <= 30; indice++) {
    linea = linea + "-";
  }
  console.log(linea);
}

let num1: number = Number(prompt("ingrese primer numero"));
let num2: number = Number(prompt("ingrese segundo numero"));
let opciones: number = Number(
  prompt(
    "ingrese Nro.1 para sumar, Nro.2 para restar o cualquier otra tecla para finalizar"
  )
);

if (opciones === 1) {
  lineas();
  console.log("el resultado de la suma es", num1 + num2);
  lineas();
} else if (opciones === 2) {
  lineas();
  console.log("el resultado de la resta es", num1 - num2);
  lineas();
} else if (opciones !== 1 && opciones !== 2) {
  lineas();
  console.log("finalizado");
  lineas();
}
