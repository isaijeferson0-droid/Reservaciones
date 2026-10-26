// Aplicación de consola para gestionar reservaciones en un restaurante

interface Reservacion {
  id: number;
  cliente: string;
  personas: number;
  zona: string; // "Interior" o "Terraza"
}

// 1. Datos iniciales
let reservaciones: Reservacion[] = [
  { id: 1, cliente: "Ana", personas: 2, zona: "Interior" },
  { id: 2, cliente: "Carlos", personas: 6, zona: "Terraza" }, // terraza con >=5
  { id: 3, cliente: "Beatriz", personas: 4, zona: "Interior" },
  { id: 4, cliente: "David", personas: 5, zona: "Terraza" }   // terraza con >=5
];

// 2. Registro de nuevas reservaciones
reservaciones.push({ id: 5, cliente: "Elena", personas: 3, zona: "Interior" }); // normal al final
reservaciones.unshift({ id: 6, cliente: "Fernando", personas: 2, zona: "Terraza" }); // prioritaria al inicio

console.log("Lista antes de atender:", reservaciones);

// 3. Atender una reservación
const atendida = reservaciones.shift();
if (atendida) {
  console.log(`Atendiendo a ${atendida.cliente}, grupo de ${atendida.personas} personas.`);
} else {
  console.log("No hay reservaciones pendientes.");
}

// 4. Búsqueda y consulta
function buscarReservacion(arr: Reservacion[], id: number): Reservacion | undefined {
  return arr.find(r => r.id === id);
}

// Caso existente
let encontrada = buscarReservacion(reservaciones, 2);
if (encontrada) {
  console.log("Reservación encontrada:", encontrada);
} else {
  console.log("No existe la reservación con ese ID.");
}

// Caso inexistente
encontrada = buscarReservacion(reservaciones, 99);
if (encontrada) {
  console.log("Reservación encontrada:", encontrada);
} else {
  console.log("No existe la reservación con ese ID.");
}

// Filtro: terraza y >=5 personas
const filtroTerraza = reservaciones.filter(r => r.zona === "Terraza" && r.personas >= 5);
if (filtroTerraza.length > 0) {
  console.log("Reservaciones en terraza con grupos grandes:", filtroTerraza);
} else {
  console.log("No hay coincidencias en el filtro.");
}

// 5. Función tipada: registrar reservación
function registrarReservacion(arr: Reservacion[], nueva: Reservacion, prioridad: boolean): void {
  if (prioridad) {
    arr.unshift(nueva);
  } else {
    arr.push(nueva);
  }
  console.log("Reservación registrada:", nueva);
}

// Llamadas de prueba
registrarReservacion(reservaciones, { id: 7, cliente: "Gabriela", personas: 5, zona: "Interior" }, false);
registrarReservacion(reservaciones, { id: 8, cliente: "Hugo", personas: 6, zona: "Terraza" }, true);

// 6. Estado final
console.log("Reservaciones pendientes:", reservaciones);
console.log("Cantidad total:", reservaciones.length);
console.log("Cantidad de coincidencias del filtro:", filtroTerraza.length);
console.log("Verificación: el filtro no eliminó registros, original:", reservaciones.length, " vs filtrado:", filtroTerraza.length);
