let arreglo1:number[] = new Array (5);
let arreglo2:number[] = new Array (5);
let sumaArreglos:number[] = new Array (5);
let indice:number;

for(indice =0;indice<5;indice++){
  arreglo1[indice]= Number(prompt("ingrese el valor del primer arreglo"));
  }

  for(indice=0;indice<5;indice++){
    arreglo2[indice]= Number(prompt("ingrese el valor del segundo arreglo"));
    }

    for(indice=0;indice<5;indice++){
      sumaArreglos[indice]= arreglo1[indice] + arreglo2[indice];
      console.log("la suma de los arreglos en posicion " indice, " es " sumaArreglos[indice]);  
    }



