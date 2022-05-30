function PromedioAlumno(indice: number): number {
  for (indice = 0; indice < numeroAlumnos; indice++) {
    let suma: number = (primTrim + segTrim + terTrim) / 3;
    return suma;
  }
}

function posicionAlumno(nombre: string): number {
  for (indice = 0; indice < numeroAlumnos; indice++) {
    let nombre: string = prompt("ingrese nombre del alumno");
    let posicion: number = -1;
    if (nombre === alumnos[numeroAlumnos]) {
      posicion = indice;
      return posicion;
    }
  }
}

let numeroAlumnos: number = Number(prompt("ingrese el numero de alumnos"));
let alumnos: string[] = new Array(numeroAlumnos);
let indice: number = 0;
let primTrim: number = 0;
let segTrim: number = 0;
let terTrim: number = 0;

for (indice = 0; indice < numeroAlumnos; indice++) {
  alumnos[indice] = prompt("ingrese el nombre del alumno");
  primTrim = Number(prompt("ingrese la nota final del primer trimestre"));
  segTrim = Number(prompt("ingrese la nota final del segundo trimestre"));
  terTrim = Number(prompt("ingrese la nota final del tercer trimestre"));
}

console.log(PromedioAlumno(posicionAlumno(alumnos[indice])));
