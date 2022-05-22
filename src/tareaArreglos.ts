let arreglo1:number[] = new Array (5); //son 6 numeros los escritos, pero va 5 xq cuenta el 0
let arreglo2:number[] = new Array (5);
let sumaArreglos:number[] = new Array (5);
let indice:number;


//indice va a ser la posicion del arreglo que va del 0 al 5
for(indice =0;indice<6;indice++){ // va el numero 6 porque se cuentan 5 y tiene que ser menor a 6
  arreglo1[indice]= Number(prompt("ingrese el valor del primer arreglo"));
  }//arreglo [va indice xq va contar la cantidad de vueltas que da]

//no pongo console log xq no necesito que el resultado me lo de aca

  for(indice=0;indice<6;indice++){
    arreglo2[indice]= Number(prompt("ingrese el valor del segundo arreglo"));
    } //aca tampoco necesito el resultado



    for(indice=0;indice<6;indice++){//indice va contar los numeros de 0 a 6 igual que los otros arreglos
      sumaArreglos[indice]= arreglo1[indice] + arreglo2[indice];
      console.log("la suma de los arreglos en posicion " indice, " es " sumaArreglos[indice]);  
    }//aca va la suma de ambos x eso necesito el console log



