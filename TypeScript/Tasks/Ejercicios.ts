/**
 * TODO: EJERCICIO 1 - Tipos Básicos
 */

const nombre: string = "Andrés";
const edad: number = 25;
const salario: number = 2500000;
const estaActivo: boolean = true;
const ciudad: string = "Cali";


console.log(nombre, typeof nombre);
console.log(edad, typeof edad);
console.log(salario, typeof salario);
console.log(estaActivo, typeof estaActivo);
console.log(ciudad, typeof ciudad);

/**
 * TODO: EJERCICIO 2 - Arrays Tipados
 */

const numeros: number[] = [10, 20, 30];
const nombres: string[] = ["Ana", "Luis", "Carlos"];
const estados: boolean[] = [true, false, true];


numeros.push(40);
nombres.push("Laura");
estados.push(false);


numeros.pop();
nombres.pop();
estados.pop();


console.log("Números:");
for (const numero of numeros) {
    console.log(numero);
}


console.log("\nNombres:");
for (const nombre of nombres) {
    console.log(nombre);
}


console.log("\nEstados:");
for (const estado of estados) {
    console.log(estado);
}


/**
 * TODO: EJERCICIO 3 - Crear un Type
 */

type Producto = {
    id: number;
    nombre: string;
    precio: number;
    disponible: boolean;
};

const producto1: Producto = {
    id: 1,
    nombre: "Laptop",
    precio: 2500000,
    disponible: true
};

const producto2: Producto = {
    id: 2,
    nombre: "Monitor",
    precio: 850000,
    disponible: false
};

console.log("Producto 1:");
console.log(producto1);

console.log("\nProducto 2:");
console.log(producto2);


/**
 * TODO: EJERCICIO 4 - Interfaces
 */

interface Empleado {
    nombre: string;
    cargo: string;
    salario: number;
}

const empleado1: Empleado = {
    nombre: "Ana",
    cargo: "Desarrolladora",
    salario: 3500000
};

const empleado2: Empleado = {
    nombre: "Luis",
    cargo: "Diseñador",
    salario: 2800000
};

console.log("Empleado 1:");
console.log(empleado1);

console.log("\nEmpleado 2:");
console.log(empleado2);

/**
 * TODO: EJERCICIO 5 - Union Types
 */

function mostrarDato(dato: string | number): void {
    if (typeof dato === "string") {
        console.log(dato.toUpperCase());
    } else {
        console.log(dato.toFixed(2));
    }
}

mostrarDato("typescript");
mostrarDato(25);


/**
 * TODO: EJERCICIO 6 - Enums
 *
 * Crea un enum llamado EstadoPedido.
 *
 * Debe contener:
 *
 * - Pendiente
 * - EnProceso
 * - Enviado
 * - Entregado
 *
 * Después:
 *
 * - Crea una variable utilizando el enum.
 * - Imprime su valor.
 */


/**
 * ==========================================================
 */


/**
 * TODO: EJERCICIO 7 - Clases
 *
 * Crea una clase llamada Vehiculo.
 *
 * Debe contener:
 *
 * - marca
 * - modelo
 *
 * Agrega un método llamado mostrarInformacion()
 * que imprima ambas propiedades.
 *
 * Crea dos objetos utilizando la clase.
 */


/**
 * TODO: EJERCICIO 8 - Herencia
 *
 * Crea una clase Persona.
 *
 * Debe contener:
 *
 * - nombre
 * - edad
 *
 * Luego crea una clase Estudiante
 * que herede de Persona.
 *
 * Agrega la propiedad carrera.
 *
 * Finalmente crea un estudiante
 * e imprime toda su información.
 */


/**
 * TODO: EJERCICIO 9 - Generics
 *
 * Crea una función genérica llamada
 * obtenerPrimero().
 *
 * Debe recibir un arreglo de cualquier tipo
 * y retornar el primer elemento.
 *
 * Prueba la función con:
 *
 * - Un arreglo de números.
 * - Un arreglo de strings.
 * - Un arreglo de booleanos.
 */


/**
 * TODO: EJERCICIO 10 - Sistema de Usuarios
 *
 * Desarrolla un pequeño sistema utilizando
 * todo lo aprendido durante el curso.
 *
 * Requisitos:
 *
 * 1. Crear un type llamado Usuario.
 *
 * Debe contener:
 *
 * - id
 * - nombre
 * - edad
 * - activo
 *
 * 2. Crear un arreglo tipado de usuarios.
 *
 * 3. Crear una función para agregar usuarios (uso del push).
 *
 * 4. Crear una función para buscar un usuario por su id (uso del find).
 *
 * 5. Crear una función para mostrar únicamente los usuarios activos (uso del filter).
 *
 * 6. Mostrar el arreglo final.
 */


export {};