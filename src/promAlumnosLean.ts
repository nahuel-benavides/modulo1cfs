function obtenerPromedioAlumno(indice: number): number {
  let suma =
    (arrayPrimTrim[indice] + arraySegTrim[indice] + arrayTerTrim[indice]) / 3;
  return suma;
}

function obtenerPosicion(alumno: string): number {
  let alumnos: string = "B";
  let posicion: number = -1;
  for (let indice: number = 0; indice < 3; indice++) {
    if (arrayAlumnos[indice] === alumnos) {
      posicion = indice;
    }
  }
  return posicion;
}

function cargarDatos() {
  for (let indice: number = 0; indice < 3; indice++) {
    arrayAlumnos[indice] = prompt("ingrese el nombre del alumno");
    arrayPrimTrim[indice] = Number(prompt("ingrese nota del primer trimestre"));
    arraySegTrim[indice] = Number(prompt("ingrese nota del segundo trimestre"));
    arrayTerTrim[indice] = Number(prompt("ingrese nota del tercer trimestre"));
  }
}

let arrayAlumnos: string[] = new Array(10);
let arrayPrimTrim: number[] = new Array(10);
let arraySegTrim: number[] = new Array(10);
let arrayTerTrim: number[] = new Array(10);

cargarDatos();
let alumno: string = prompt("ingrese nombre del alumno");
console.log(obtenerPromedioAlumno(obtenerPosicion(alumno)));

d; /* 
 let alumnos:number=Number (prompt("ingrese el nombre del alumno"));let primTrim:number=Number(prompt("ingrese nota del primer trimestre"));
let segTrim:number=Number(prompt("ingrese nota del segundo trimestre"));
let terTrim:number=Number(prompt("ingrese nota del tercer trimestre"));
for(let indice:number = 0;indice<3;indice++){ 
console.log(arrayAlumnos[indice]);
console.log(arrayPrimTrim[indice]);
console.log(arraySegTrim[indice]);
console.log(arrayTerTrim[indice]);
}*/
