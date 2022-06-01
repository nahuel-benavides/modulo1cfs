function PromedioAlumno(indice: number): number {
  for (indice = 0; indice < alumnos[]; indice++) {
    let suma: number = (primTrim + segTrim + terTrim) / 3;
    return suma;
  }
}

function posicionAlumno(arregloAlumnos:number[]): number {
  for (let indice:number = 0; indice< alumnos.length; indice++) {
    let posicion:number = 0;
    arregloAlumnos[indice] = posicion; 
return posicion; 
    }
  }


let numeroAlumnos: number = Number(prompt("ingrese el numero de alumnos"));
let alumnos: string[] = new Array(numeroAlumnos);
let primTrim: number = new Array(numeroAlumnos);
let segTrim: number = new Array(numeroAlumnos);
let terTrim: number = new Array(numeroAlumnos);


for (let indice:number = 0; indice < alumnos.length; indice++) {
  alumnos[indice] = prompt("ingrese el nombre del alumno " + indice );
  primTrim = Number(prompt("ingrese la nota final del primer trimestre de " + alumnos[indice]));
  segTrim = Number(prompt("ingrese la nota final del segundo trimestre de " + alumnos[indice]));
  terTrim = Number(prompt("ingrese la nota final del tercer trimestre de " + alumnos[indice]));
}

console.log(posicionAlumno(alumnos[indice]));

