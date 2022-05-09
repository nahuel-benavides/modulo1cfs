let numero: number = Number(prompt("ingrese numero"));
let numPositivos: number = 0;
let numTotales: number = 0;
let porcentajes: number = 0;

while (numero != 0) {
  if (numero > 0) {
    numPositivos++;
  }
  numTotales++;
  numero: number = Number(prompt("ingrese otro numero"));
}
if(numTotales>0){
  porcentajes = numPositivos*100/numTotales;
  console.log(numPositivos; "numero positivos" ; porcentajes; "porcentaje total" ) 
}