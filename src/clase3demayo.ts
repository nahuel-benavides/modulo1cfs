let num1: number = Number(prompt("ingrese un numero"));
let esPar : boolean =true;
if (num1 %2 ===0) {
  esPar=true;
}else{
  esPar=false;
}

switch esPar{
  case true: 
    console.log("el numero es par");
    break;
  case false:
    console.log("el numero es impar");
    break;
}
