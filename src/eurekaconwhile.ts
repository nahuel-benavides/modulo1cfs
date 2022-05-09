let clave: string = "0";
let intentosRestantes: number = 0;

while (clave !== "eureka" && intentosRestantes < 3) {
  clave = prompt("ingrese clave");
  if (clave === "eureka") {
    console.log("clave correcta");
  } else {
    console.log("clave incorrecta");
    intentosRestantes++;
  }
}
