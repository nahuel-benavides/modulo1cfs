function esMultiplo(dividendo: number, divisor: number): boolean {
  if (dividendo % divisor === 0) {
    return true;
  } else {
    return false;
  }
}

function cantidadDivisores(numero: number): number {
  let cantidad: number = 0;
  let divisor: number;

  for (divisor = cantidad; divisor <= numero; divisor++) {
    if (esMultiplo(numero1, divisor)) {
      cantidad++;
    }
    return cantidad;
  }
}

let numero1: number = Number(prompt("ingrese un numero "));

let Divisores: number = cantidadDivisores(numero1);
console.log(Divisores);
