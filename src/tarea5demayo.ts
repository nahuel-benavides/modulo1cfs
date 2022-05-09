let sueldo : number = Number(prompt("ingrese un sueldo"));
let sueldoAumento : number = 0;

if(0<sueldo && sueldo<=15001) {
  sueldoAumento = 20*sueldo/100;
console.log("el aumento es del 20%")
} else if (15001<sueldo && sueldo<20001) { 
  sueldoAumento =10*sueldo/100;
  console.log("el aumento es del 10%");
} else if (20001<sueldo && sueldo<25001); {
  sueldoAumento = 5*sueldo/100;
  console.log("el aumento es del 5%");
} else  if (sueldo>25001) {
  console.log ("no hay aumento");
}