/**
 * TODO: EJERCICIO 1 - Calculadora Básica
 */
/**
const readline = require("node:readline/promises");
const { stdin: input, stdout: output } = require("node:process");

function calculadora(numero1, numero2, operador) {
    switch (operador) {
        case "+":
            return numero1 + numero2;

        case "-":
            return numero1 - numero2;

        case "*":
            return numero1 * numero2;

        case "/":
            if (numero2 === 0) {
                return "No se puede dividir entre 0";
            }
            return numero1 / numero2;

        default:
            return "Operador no válido";
    }
}

async function iniciar() {
    const rl = readline.createInterface({ input, output });

    const numero1 = Number(
        await rl.question("Ingrese el primer número: ")
    );

    const numero2 = Number(
        await rl.question("Ingrese el segundo número: ")
    );

    const operador = await rl.question(
        "Ingrese la operación (+, -, *, /): "
    );

    const resultado = calculadora(numero1, numero2, operador);

    console.log(
        `calculadora(${numero1}, ${numero2}, "${operador}"); -> Resultado esperado: ${resultado}`
    );

    rl.close();
}

iniciar();
 */

/** 
 * TODO: EJERCICIO 2 - Tabla de Multiplicar
 */
/**
const readline = require("node:readline/promises");
const { stdin: input, stdout: output } = require("node:process");

function tablaMultiplicar(numero, cantidad) {
    console.log(`\nTabla de Multiplicar del ${numero} al ${cantidad}`);

    for (let i = 1; i <= cantidad; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

async function iniciarTabla() {
    const rl = readline.createInterface({ input, output });

    const numero = Number(
        await rl.question("Ingrese el número de la tabla: ")
    );

    const cantidad = Number(
        await rl.question("Ingrese la cantidad de operaciones: ")
    );

    tablaMultiplicar(numero, cantidad);

    rl.close();
}

iniciarTabla();
 */

/**
 * TODO: EJERCICIO 3 - Gestión de Producto
 */
/** 
const readline = require("node:readline/promises");
const { stdin: input, stdout: output } = require("node:process");

async function gestionProductos() {
    const rl = readline.createInterface({ input, output });

    const producto1 = await rl.question("Ingrese el primer producto: ");
    const producto2 = await rl.question("Ingrese el segundo producto: ");
    const producto3 = await rl.question("Ingrese el tercer producto: ");

    const productos = [producto1, producto2, producto3];

    productos.push("Monitor");

    productos.unshift("Audífonos");

    productos.pop();

    console.log("\nArreglo final:");
    console.log(productos);

    rl.close();
}

gestionProductos();
*/

/**
 * TODO: EJERCICIO 4 - Inventario de Estudiantes
 */
/** 
const readline = require("node:readline/promises");
const { stdin: input, stdout: output } = require("node:process");

async function inventarioEstudiante() {
    const rl = readline.createInterface({ input, output });

    const nombre = await rl.question("Ingrese el nombre del estudiante: ");
    const edad = Number(await rl.question("Ingrese la edad: "));
    const carrera = await rl.question("Ingrese la carrera: ");

    const materia1 = await rl.question("Ingrese la primera materia: ");
    const materia2 = await rl.question("Ingrese la segunda materia: ");

    const estudiante = {
        nombre: nombre,
        edad: edad,
        carrera: carrera,
        materias: [materia1, materia2]
    };

    estudiante.edad = Number(
        await rl.question("Ingrese la nueva edad: ")
    );

    const nuevaMateria = await rl.question(
        "Ingrese una nueva materia: "
    );

    estudiante.materias.push(nuevaMateria);

    console.log("\nDatos finales del estudiante:");

    Object.entries(estudiante).forEach(([propiedad, valor]) => {
        console.log(`${propiedad}:`, valor);
    });

    rl.close();
}

inventarioEstudiante();
*/

/**
 * TODO: EJERCICIO 5 - Filtrar Empleados
 */
/** 
const readline = require("node:readline/promises");
const { stdin: input, stdout: output } = require("node:process");

async function filtrarEmpleados() {
    const rl = readline.createInterface({ input, output });

    const cantidad = Number(
        await rl.question("¿Cuántos empleados desea ingresar?: ")
    );

    const empleados = [];

    for (let i = 0; i < cantidad; i++) {
        console.log(`\nEmpleado ${i + 1}`);

        const nombre = await rl.question("Ingrese el nombre: ");
        const salario = Number(
            await rl.question("Ingrese el salario: ")
        );

        empleados.push({
            nombre: nombre,
            salario: salario
        });
    }

    const empleadosFiltrados = empleados.filter(
        empleado => empleado.salario >= 4000
    );

    console.log("\nEmpleados con salario mayor o igual a 4000:");
    console.log(empleadosFiltrados);

    rl.close();
}

filtrarEmpleados();
*/

/**
 * TODO: EJERCICIO 6 - Estadísticas de Ventas
 * Dado el siguiente arreglo:
 * Calcular:
 *  - Total vendido.
 *  - Venta más alta (Math.max investigar).
 *  - Promedio de ventas.
 */
const ventas = [250, 400, 150, 600, 800];

/**
 * TODO: EJERCICIO 7 - Catálogo de Libros
 * Dado el siguiente arreglo:
 * Realiza las siguientes operaciones:
 *  - Encontrar el libro con id 2.
 *  - Obtener solo los libros disponibles.
 *  - Crear un arreglo únicamente con los títulos.
 */

const libros = [
    {
        id: 1,
        titulo: "JavaScript",
        disponible: true
    },
    {
        id: 2,
        titulo: "Python",
        disponible: false
    },
    {
        id: 3,
        titulo: "Java",
        disponible: true
    }
];

/**
 * TODO: EJERCICIO 8 - Copias y Referencias
 * Dado el siguiente objeto:
 * Realiza lo siguiente:
 *  - Crea una copia del usuario utilizando asignación (=).
 *  - Modifica el nombre de la copia.
 *  - Observa el resultado de ambos.
 *  - Ahora crea una copia utilizando Spread.
 *  - Modifica nuevamente el nombre.
 *  - Observa el resultado de ambos.
 *  - Explica la diferencia entre ambos casos.
 */

const usuario = {
    nombre: "Carlos",
    edad: 30
};

/**
 * TODO: EJERCICIO 9 - Desestructuración
 * Dado el siguiente objeto:
 * Realiza las siguientes tareas:
 *  - Extrae las propiedades marca y ram.
 *  - Renombra almacenamiento como ssd.
 *  - Asigna un valor por defecto a una propiedad llamada tarjetaGrafica.
 */

const computador = {
    marca: "Lenovo",
    procesador: "Intel i7",
    ram: 16,
    almacenamiento: 512
};

/**
 * TODO: EJERCICIO 10 - Sistema de Gestión de Estudiantes
 * Dado el siguiente arreglo:
 * Desarrolla un programa que permita:
 *  - Mostrar únicamente los estudiantes aprobados (nota mayor o igual a 3.0).
 *  - Mostrar únicamente los mayores de edad.
 *  - Obtener un arreglo únicamente con los nombres.
 *  - Buscar al estudiante con id 3.
 *  - Calcular el promedio de todas las notas.
 *  - Encontrar el estudiante con la nota más alta.
 *  - Crear un nuevo arreglo agregando la propiedad estado, cuyo valor será "Aprobó" o "Reprobó" según la nota.
 *  - Realizar una copia del arreglo utilizando el operador Spread.
 */

const estudiantes2 = [
    {
        id: 1,
        nombre: "Ana",
        nota: 4.5,
        edad: 20
    },
    {
        id: 2,
        nombre: "Luis",
        nota: 3.8,
        edad: 18
    },
    {
        id: 3,
        nombre: "Carlos",
        nota: 4.9,
        edad: 22
    },
    {
        id: 4,
        nombre: "Laura",
        nota: 2.9,
        edad: 19
    }

];
