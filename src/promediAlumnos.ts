let numeroAlumnos:number=Number(prompt("ingrese el numero de alumnos"));
let alumnos:string[] = new Array (numeroAlumnos);
let notaFinal:number[] = new Array (numeroAlumnos);
let indice:number= 0;
let primTrim:number=0;
let segTrim:number=0;
let terTrim:number=0;
let suma:number = primTrim + segTrim + terTrim;



for(indice =0;indice<numeroAlumnos;indice++){ 
  alumnos[indice]= prompt("ingrese el nombre del alumno");
}


for(indice =0;indice<numeroAlumnos;indice++){ 
  primTrim=Number(prompt("ingrese la nota final del primer trimestre"));
  segTrim=Number(prompt("ingrese la nota final del segundo trimestre"));
  terTrim=Number(prompt("ingrese la nota final del tercer trimestre"));
  suma = suma%3;
}

for(indice =0;indice<numeroAlumnos;indice++){ 
  notaFinal[numeroAlumnos]=  
}