//Inicializamos la clase.

class Automovil extends Object {
  constructor(marca, modelo, puertas_cilindrada, precio) {
    super();
    this.marca = marca;
    this.modelo = modelo;
    if (typeof puertas_cilindradas === "number") {
      this.cilindrada = puertas_cilindrada;
    } else {
      this.puertas = puertas_cilindrada;
    }
    this.precio = precio;
  }
  
  getPrecioFormateado() {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(this.precio);
  }

  imprimir() {
    let line = "";
    for (const property in this) {
      if (line) {
        line += " // ";
      }
      line += `${property.charAt(0).toLocaleUpperCase() + property.slice(1)}: ${
        property === "precio"
          ? this.getPrecioFormateado()
          : this[property]
      }`;
    }
    console.log(line);
  }

}

//Finaliza la declaracion de la clase y inicializamos la data.

const concesionario = [
  new Automovil("Peugeot", "206", 4, 200000),
  new Automovil("Honda", "Titan", "125c", 60000),
  new Automovil("Peugeot", "208", 5, 250000),
  new Automovil("Yamaha", "YBR", "160c", 85000.5),
];

const autosPorPrecio = concesionario.sort((pri, seg) =>
  pri.precio > seg.precio ? -1 : 1
);
const [masCaro, ...resto] = autosPorPrecio;
const masBarato = resto.pop();
const modeloY = concesionario.find(({ modelo }) => modelo.includes("Y"));

//Adjuntamos los prints de resultados.

concesionario.map((x) => x.imprimir());
console.log("=============================");
console.log(`Vehículo más caro: ${masCaro.marca} ${masCaro.modelo}`);
console.log(`Vehículo más barato: ${masBarato.marca} ${masBarato.modelo}`);
console.log(
  `Vehículo que contiene en el modelo la letra ‘Y’: ${modeloY.marca} ${modeloY.modelo} ${modeloY.getPrecioFormateado()}`
);

//Parte extra
console.log("=============================");
autosPorPrecio.map(({ marca, modelo }) => console.log(`${marca} ${modelo}`));974500
