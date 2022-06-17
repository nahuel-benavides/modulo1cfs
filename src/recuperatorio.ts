function cargaDeProductos(arregloProductos: string[]): void {
  for (let i: number = 0; i < arregloProductos.length; i++) {
    arregloProductos[i] = prompt("ingrese el producto " + i + " en la compra");
  }
}

function cargarPrecioProductos(arregloPrecioProductos: number[]): void {
  for (let i: number = 0; i < arregloPrecioProductos.length; i++) {
    let precio: number = Number(
      prompt("ingrese el precio de " + listadoDeProductos[i])
    );
    arregloPrecioProductos[i] = precio;
  }
}

function cargarCantidadProductos(arregloCantidadProductos: number[]): void {
  for (
    let indice: number = 0;
    indice < arregloCantidadProductos.length;
    indice++
  ) {
    let cantidad: number = Number(
      prompt(
        "ingrese la cantidad de unidades de " +
          listadoDeProductos[indice] +
          " que desea comprar"
      )
    );
    arregloCantidadProductos[indice] = cantidad;
  }
}

function calculoPrecioTotal(
  arregloPrecio: number[],
  arregloInventario: number[]
): number {
  let total: number = 0;
  for (let i: number = 0; i < arregloPrecio.length; i++) {
    total = total + arregloPrecio[i] + arregloInventario[i];
  }
  return total;
}

function detalleDeLaCompra(): void {
  console.log("el detalle de su compra es ");
  for (let i: number = 0; i < cantidadDeProductos; i++) {
    console.log(
      inventarioProductos[i] +
        " cantidades de " +
        listadoDeProductos[i] +
        " a un precio por unidad de " +
        precioDelProducto[i] +
        " = " +
        inventarioProductos[i] * precioDelProducto[i]
    );
  }
}

let cantidadDeProductos: number = Number(
  prompt("ingrese la cantidad de productos que desea comprar")
);
let listadoDeProductos: string[] = new Array(cantidadDeProductos);
let precioDelProducto: number[] = new Array(cantidadDeProductos);
let inventarioProductos: number[] = new Array(cantidadDeProductos);
let precioTotal: number = 0;

cargaDeProductos(listadoDeProductos);
cargarPrecioProductos(precioDelProducto);
cargarCantidadProductos(inventarioProductos);
precioTotal = calculoPrecioTotal(precioDelProducto, inventarioProductos);
detalleDeLaCompra();

if (precioTotal < 1000) {
  detalleDeLaCompra();
  console.log(
    "su compra total fue de " +
      precioTotal +
      " gracias por haber realizado sus compras aqui"
  );
} else if (precioTotal > 1000 && precioTotal < 2000) {
  detalleDeLaCompra();
  console.log(
    "su compra fue de " + precioTotal + " esta participando por TV LED"
  );
} else if (precioTotal > 2000 && precioTotal < 3000) {
  detalleDeLaCompra();
  console.log(
    "su compra fue de " + precioTotal + " esta participando por una moto 0km"
  );
} else if (precioTotal > 3000) {
  detalleDeLaCompra();
  console.log(
    "su compra fue de " +
      precioTotal +
      " esta participando por un automovil 0km"
  );
}
