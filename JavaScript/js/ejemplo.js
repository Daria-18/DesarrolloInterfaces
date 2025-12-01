/* EJERCICIO 1
Función que recibe una base y un exponente y devuelve base ** exponente
Mostrar en consola el resultado para 2³ y 5²
*/

function potencia(base,exponente){
    return base ** exponente
}

console.log("2 elevado a 3 es", potencia(2,3))
console.log("5 elevado a 2 es", potencia(5,2))

let alumno = {
    nombre: "Carlos",
    "Nota Final": 8.5
}

console.log("Notación punto alumno.nombre:",alumno.nombre)

//No se accede con un punto a la propiedad -> Syntax Error
console.log("Notación corchete alumno[nota final]:",alumno["Nota Final"])

//Acceso dinamico
let clave = "nombre"
console.log("Acceso usando la variable clave:", alumno[clave])

