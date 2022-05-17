function cantDivisores(dividendo: number, divisor: number): boolean {
  if (dividendo % divisor === 0) {
    return true;
  } else {
    return false;
  }
}

let numero1: number = Number(prompt("ingrese un numero"));


let divisor: boolean = cantDivisores(numero1);

if divisor === true) {
  console.log("el numero " + numero1 + " es divisor");
}


