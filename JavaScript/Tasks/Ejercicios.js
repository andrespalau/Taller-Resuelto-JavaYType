/**
 * TODO: EJERCICIO 1 - Calculadora Básica
 */

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

/** 
 * TODO: EJERCICIO 2 - Tabla de Multiplicar
 */

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


/**
 * TODO: EJERCICIO 3 - Gestión de Producto
 */

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


/**
 * TODO: EJERCICIO 4 - Inventario de Estudiantes
 */

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


/**
 * TODO: EJERCICIO 5 - Filtrar Empleados
 */

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


/**
 * TODO: EJERCICIO 6 - Estadísticas de Ventas
*/

    const readline = require("node:readline/promises");
const { stdin: input, stdout: output } = require("node:process");

async function estadisticasVentas() {
    const rl = readline.createInterface({ input, output });

    const cantidad = Number(
        await rl.question("¿Cuántas ventas desea ingresar?: ")
    );

    const ventas = [];

    for (let i = 0; i < cantidad; i++) {
        const venta = Number(
            await rl.question(`Ingrese el valor de la venta ${i + 1}: `)
        );

        ventas.push(venta);
    }

    const totalVendido = ventas.reduce(
        (total, venta) => total + venta,
        0
    );

    const ventaMasAlta = Math.max(...ventas);

    const promedioVentas = totalVendido / ventas.length;

    console.log("\nEstadísticas de Ventas");
    console.log(`Total vendido: ${totalVendido}`);
    console.log(`Venta más alta: ${ventaMasAlta}`);
    console.log(`Promedio de ventas: ${promedioVentas}`);

    rl.close();
}

estadisticasVentas();

/**
 * TODO: EJERCICIO 7 - Catálogo de Libros
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


const libroId2 = libros.find(libro => libro.id === 2);


const librosDisponibles = libros.filter(libro => libro.disponible === true);


const titulos = libros.map(libro => libro.titulo);

console.log("Libro con id 2:");
console.log(libroId2);

console.log("\nLibros disponibles:");
console.log(librosDisponibles);

console.log("\nTítulos:");
console.log(titulos);

/**
 * TODO: EJERCICIO 8 - Copias y Referencias
*/

const usuario = {
    nombre: "Carlos",
    edad: 30
};


const copiaReferencia = usuario;

copiaReferencia.nombre = "Andrés";

console.log("Después de usar =");
console.log("Usuario original:", usuario);
console.log("Copia con =:", copiaReferencia);

const copiaSpread = { ...usuario };

copiaSpread.nombre = "Laura";

console.log("\nDespués de usar Spread");
console.log("Usuario original:", usuario);
console.log("Copia con Spread:", copiaSpread);


/**
 * TODO: EJERCICIO 9 - Desestructuración
 */

const computador = {
    marca: "Lenovo",
    procesador: "Intel i7",
    ram: 16,
    almacenamiento: 512
};

const {
    marca,
    ram,
    almacenamiento: ssd,
    tarjetaGrafica = "No especificada"
} = computador;

console.log("Marca:", marca);
console.log("RAM:", ram);
console.log("SSD:", ssd);
console.log("Tarjeta gráfica:", tarjetaGrafica);

/**
 * TODO: EJERCICIO 10 - Sistema de Gestión de Estudiantes
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

const aprobados = estudiantes2.filter(
    estudiante => estudiante.nota >= 3.0
);

const mayoresEdad = estudiantes2.filter(
    estudiante => estudiante.edad >= 18
);

const nombres = estudiantes2.map(
    estudiante => estudiante.nombre
);

const estudianteId3 = estudiantes2.find(
    estudiante => estudiante.id === 3
);

const sumaNotas = estudiantes2.reduce(
    (total, estudiante) => total + estudiante.nota,
    0
);

const promedio = sumaNotas / estudiantes2.length;

const mejorEstudiante = estudiantes2.reduce(
    (mayor, estudiante) =>
        estudiante.nota > mayor.nota ? estudiante : mayor
);

const estudiantesConEstado = estudiantes2.map(estudiante => ({
    ...estudiante,
    estado: estudiante.nota >= 3.0 ? "Aprobó" : "Reprobó"
}));

const copiaEstudiantes = [...estudiantes2];

console.log("Estudiantes aprobados:");
console.log(aprobados);

console.log("\nEstudiantes mayores de edad:");
console.log(mayoresEdad);

console.log("\nNombres de los estudiantes:");
console.log(nombres);

console.log("\nEstudiante con ID 3:");
console.log(estudianteId3);

console.log("\nPromedio de notas:");
console.log(promedio.toFixed(2));

console.log("\nEstudiante con la nota más alta:");
console.log(mejorEstudiante);

console.log("\nEstudiantes con estado:");
console.log(estudiantesConEstado);

console.log("\nCopia del arreglo con Spread:");
console.log(copiaEstudiantes);
