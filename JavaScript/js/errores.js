/* EJERCICIO 1
Función que recibe una base y un exponente y devuelve base ** exponente.
Mostrar en consola el resultado para 2^3 y 5^2.*/

function potencia(base, exponente) {
  return base ** exponente;
}

// Faltaba un parámetro en el primer log
console.log("2 elevado a 3 es", potencia(2,3));
console.log("5 elevado a 2 es", potencia(5, 2));

/* EJERCICIO 2 dedicado a A. Carpena
Calcular la media de un array de números usando una función mediaArray.
Debe mostrar en consola la media de [5, 7, 9].*/

function mediaArray(numeros) {
  let suma = 0;
  // <= numeros.length < numeros.lenght, porque array index out of bounds
  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
  }
  return suma / numeros.length; // lenght -> length
}

let notas = [5, 7, 9];
console.log("La media es", mediaArray(notas));

/* EJERCICIO 3 
Crear un objeto alumno con nombre, edad y un método presentar()
que muestre "Soy <nombre> y tengo <edad> años".*/

let alumnoEj3 = {
  nombre: "Ana",
  edad: 20,
  presentar: function() {
    //Edadd -> edad
    console.log("Soy " + this.nombre + " y tengo " + this.edad + " años");
  }
};

alumnoEj3.presentar();

/* EJERCICIO 4
Constructor Modulo(nombre, examen, tareas, practicas)
y método media() con ponderación 35%, 15%, 50%.
Crear un módulo "Desarrollo de Interfaces" y mostrar su media.*/

//Crear clase correctamente con su constructor
class Modulo {
  //Añadir positivos al constructor
  constructor(nombre, examen, tareas, practicas, positivos) {
    this.nombre = nombre;
    this.examen = examen;
    this.tareas = tareas;
    this.practicas = practicas;
    this.positivos = positivos;
  }

  //Declaracion de metodo media dentro de la clase
  media() {
    return this.examen * 0.30 + this.tareas * 0.20 + this.practicas * 0.45 + 
    this.positivos * 0.05;
  }
}

let diEj4 = new Modulo("Desarrollo de Interfaces", 7, 8, 9, 10, 10);
console.log("Media DI:", diEj4.media());

/* EJERCICIO 5
Función que recibe un array de nombres y muestra uno a uno con un for...of.
Probar con ["Ana","Luis","Marta"].*/

function mostrarNombres(lista) {
  //Añadir parentesis
  for (nombre of lista) {
    console.log(nombre);
  }
}

mostrarNombres(["Ana", "Luis", "Marta"]);

/* EJERCICIO 6
Función esMayorDeEdad(edad) que devuelve true si edad >= 18.
Mostrar por consola el resultado para 16 y 20.*/

function esMayorDeEdad(edad) {
  if (edad >= 18) {
    return true;
  } else {
    return false;
  }
}

//Añadir parametro al primer log (16)
console.log("16 es mayor de edad?", esMayorDeEdad(16));
console.log("20 es mayor de edad?", esMayorDeEdad(20));

/* EJERCICIO 7
Crear un objeto cuenta con saldo y un método ingresar(cantidad)
que sume al saldo y muestre el saldo actualizado.*/

let cuentaEj7 = {
  saldo: 100,
  ingresar: function(cantidad) {
    //Añadir this a saldo
    this.saldo += cantidad;
    console.log("Saldo actual:", this.saldo);
  }
};

cuentaEj7.ingresar(50);

/* EJERCICIO 8
Función que recibe un array de números y devuelve un nuevo array
solo con los pares. Mostrar el resultado para [1,2,3,4,5,6].*/

function filtrarPares(numeros) {
  let pares = [];
  for (let i = 0; i < numeros.length; i++) {
    // = -> ==
    if (numeros[i] % 2 == 0) {
      pares.push(numeros[i]);
    }
  }
  return pares;
}

console.log("Pares:", filtrarPares([1,2,3,4,5,6]));

/* EJERCICIO 9
Función que calcula el factorial de un número n (n * (n-1) * ... * 1).
Probar con el valor 5.*/

//función correcta ya que recorre en orden inverso
function factorial(n) {
  let resultado = 1;
  for (let i = 1; i <= n; i++) {
    resultado = resultado * i;
  }
  return resultado;
}

//Añadir parametro (5)
console.log("Factorial de 5:", factorial(5));

/* EJERCICIO 10
Crear un array de objetos alumno {nombre, nota} y una función
que recorra el array y muestre "X ha sacado Y".*/
let alumnosEj10 = [
  { nombre: "Ana", nota: 8 },
  { nombre: "Luis", nota: 7 },
  { nombre: "Marta", nota: 9 }
];

function mostrarNotas(listaAlumnos) {
  // Out of bounds; <= -> < listaAlumnos.length
  for (let i = 0; i < listaAlumnos.length; i++) {
    console.log(listaAlumnos[i].nombre + " ha sacado " + listaAlumnos[i].nota);
  }
}

mostrarNotas(alumnosEj10);

/* EJERCICIO 11
Función que recibe dos números y una operación ("sumar","restar")
y devuelve el resultado correspondiente.*/

function operar(a, b, operacion) {
  if (operacion === "sumar") {
    return a + b;
  } else if (operacion === "restar") {
    return a - b;
  } else {
    console.log("Operación no válida");
  }
}

//Añadir parámetro
let resultadoEj11 = operar(10, 5, "sumar");
console.log("Resultado:", resultadoEj11);

/* EJERCICIO 12
Función que recibe un número y muestra en consola si es positivo,
negativo o cero.*/

function clasificarNumero(num) {
  if (num > 0) {
    console.log("Positivo");
  } else if (num < 0) {
    console.log("Negativo");
  }
  // Añadir comparación (= -> ==)
  else if (num == 0) {
    console.log("Cero");
  }
}

clasificarNumero(0);

/* Función que recibe un array de strings y devuelve uno nuevo
con todos en mayúsculas.*/

function aMayusculas(lista) {
  let resultado = [];
  for (let texto of lista) {
    //toUppercase() -> toUpperCase()
    resultado.push(texto.toUpperCase());
  }
  return resultado;
}

console.log(aMayusculas(["hola", "adios"]));

/* EJERCICIO 13
Crear un array de números y usar un bucle while para mostrar solo
los números mayores que 10.*/

//Corregir nombre de la variable
let numerosEj13 = [4, 12, 7, 20, 15];
let indiceEj13 = 0;

//indiceEj14 -> indiceEj13
while (indiceEj13 < numerosEj13.length) {
  if (numerosEj13[indiceEj13] > 10) {
    //[indice] -> indiceEj13
    console.log(numerosEj13[indiceEj13]); 
  }
  indiceEj13++;
}

/* EJERCICIO 14
Función que recibe un número de mes (1-12) y devuelve el nombre del mes.
Probar con el mes 3.*/

function nombreMes(mes) {
  const meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto",
    "Septiembre","Octubre","Noviembre","Diciembre"];
  // mes -> mes-1
  return meses[mes-1];
}

console.log("Mes 3:", nombreMes(3));

/* EJERCICIO 15
Función que usa try/catch para dividir a entre b
y captura el error si b es 0.*/

function dividir(a, b) {
  try {
    if (b === 0) {
      throw "No se puede dividir entre cero";
    }
    return a / b;
  } 
  // catch error -> catch (error)
  catch (error) {
    console.log("Error:", error);
  }
}

console.log(dividir(10, 0));

/* EJERCICIO 16
Función que recibe un número y devuelve "par" o "impar".
Probar con 4 y 7.*/

function parOImpar(numero) {
  if (numero % 2 === 0) {
    return "par";
  } else {
    return "impar";
  }
}

console.log("4 es", parOImpar(4));
//Añadir parametro (7)
console.log("7 es", parOImpar(7));

/* EJERCICIO 17
Función que recibe un array de módulos (cada uno con nombre y notaFinal)
y devuelve la media de todas las notas finales (expediente).*/

function mediaExpediente(modulos) {
  let suma = 0;
  for (let modulo of modulos) {
    suma += modulo.notaFinal;
  }
  //Lenght -> modulos.length
  return suma / modulos.length;
}

//Rename modulosEj13 a modulosEj17
let modulosEj17 = [
  { nombre: "DDI", notaFinal: 8 },
  { nombre: "ADAT", notaFinal: 7 },
  { nombre: "PROC", notaFinal: 9 }
];

console.log("Expediente:", mediaExpediente(modulosEj17))

