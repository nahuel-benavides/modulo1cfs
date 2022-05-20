let posicionCarrera: number = Number(prompt("ingrese una posicion"));

if (posicionCarrera === 1) {
  console.log("puesto " + posicionCarrera + " recibe medalla de oro");
} else {
  if (posicionCarrera === 2) {
    console.log("puesto " + posicionCarrera + " recibe medalla de plata");
  } else {
    if (posicionCarrera === 3) {
      console.log("puesto " + posicionCarrera + " recibe medalla de bronce");
    } else {
      if (posicionCarrera >= 4) {
        console.log(
          "puesto " + posicionCarrera + " recibe mencion de participacion"
        );
      } else {
        console.log(
          "puesto " + posicionCarrera + " recibe mencion de participacion"
        );
      }
    }
  }
}
