function calculoPotencia() {
  if (exponente === 0) {
    resultado = 1;
  } else {
    resultado = base ** exponente;
  }
  console.log("el resultado es", resultado);
}
let base: number = Number(prompt("ingrese base"));
let exponente: number = Number(prompt("ingrese exponente"));
let resultado: number = 0;
if (exponente >= 0) {
  calculoPotencia();
} else {
  console.log("exponente invalido");
}
