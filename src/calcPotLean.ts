let base: number = Number(prompt("ingrese base"));
let exponente: number = Number(prompt("ingrese altura"));
let resultado: number;

function calcularPotencia(base: number, exponente: number): number {
  let r: number = 1;
  for (let indice: number = 1; indice <= exponente; indice++) {
    r = base * r;
  }
  return r;
}
console.log(calcularPotencia(base, exponente));
